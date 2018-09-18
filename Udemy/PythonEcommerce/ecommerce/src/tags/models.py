import os
import random

from django.db import models
from django.db.models.signals import pre_save, post_save
from django.urls import reverse

from ecommerce.utils import unique_slug_generator
from products.models import Product


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    print(instance)
    print(filename)
    new_filename = random.randint(1, 19512351234)
    _, ext = get_filename_ext(filename)
    final_filename  = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext) 
    return "products/{new_filename}/{final_filename}".format(
        new_filename=new_filename, 
        final_filename=final_filename
    )


class Tag(models.Model):
    title       = models.CharField(max_length=120)
    slug        = models.SlugField(blank=True, unique=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
    active      = models.BooleanField(default=True)
    products    = models.ManyToManyField(Product, blank=True)

    def __str__(self):
        return self.title

def tag_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(tag_pre_save_receiver, sender=Tag)