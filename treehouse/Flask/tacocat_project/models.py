from flask_bcrypt import generate_password_hash
from flask_login import UserMixin
from peewee import *

import datetime

DATABASE = SqliteDatabase('tacocat.db')


class User(UserMixin, Model):
    email = CharField(unique=True)
    password = CharField(max_length=100)
    joined_at = DateTimeField(default=datetime.datetime.now)
    is_admin = BooleanField(default=False) # for extension, 

    class Meta:
        database = DATABASE
        order_by = ('-joined_at',)

    def get_tacos(self):
        return Taco.select().where(Taco.user == self).limit(100)
  

    @classmethod
    def create_user(cls, email, password, is_admin):
        try:
            with DATABASE.transaction():
                cls.create(
                    email=email,
                    password=generate_password_hash(password),
                    is_admin=is_admin)
        except IntegrityError:
            raise ValueError("User already exists!")


class Taco(Model):
    protein = CharField()
    shell = CharField()
    cheese = BooleanField(default=False)
    extras = TextField()
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = ForeignKeyField(
        rel_model=User,
        related_name='tacos'
    )

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Taco], safe=True)
    DATABASE.close()
