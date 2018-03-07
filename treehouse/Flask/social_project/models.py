import datetime

from flask_bcrypt import generate_password_hash
from flask_login import UserMixin
from peewee import *

DATABASE = SqliteDatabase('social.db')


class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField(max_length=100)
    joined_at = DateTimeField(default=datetime.datetime.now)
    is_admin = BooleanField(default=False) # for extention, can add more on admin user
 
    class Meta:
        database = DATABASE
        order_by = ('-joined_at',) # - sign for descending, newer come first

    def get_posts(self):
        return Post.select().where(Post.user == self) # get posts of a specific user

    def get_stream(self):
        return Post.select().where(
            (Post.user << self.following()) |
            (Post.user == self)
        ) # further change, all the people that I'm following or mine

    def following(self):
        """The users that we are following."""
        return (
            User.select().join(
                Relationship, on=Relationship.to_user
            ).where(
                Relationship.from_user == self
            )
        )

    def followers(self):
        """Get users following the current user"""
        return (
            User.select().join(
                Relationship, on=Relationship.from_user
            ).where(
                Relationship.to_user == self
            )
        )

    @classmethod
    def create_user(cls, username, email, password, admin=False):
        try:
            with DATABASE.transaction():
                cls.create(
                    username=username,
                    email = email,
                    password = generate_password_hash(password),
                    is_admin = admin)
        except IntegrityError:
            raise ValueError("User already exists")


class Post(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = ForeignKeyField(
        rel_model=User,
        related_name='posts'
    )
    content = TextField()

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',) # to make tuple(no change), put comma at the end


class Relationship(Model):
    from_user = ForeignKeyField(User, related_name='relationships') # people who is following
    to_user = ForeignKeyField(User, related_name='related_to') # people who is followed
    
    class Meta:
        database = DATABASE
        indexes = (
            (('from_user', 'to_user'),True),
        )

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Post, Relationship], safe=True)
    DATABASE.close()
