from django.db import models

# Write your models here
class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    length = models.IntegerField(default=180)
    
    def __str__(self):
        return "{} by {}".format(self.title, self.artist)


class Performer(models.Model):
    name = models.CharField(max_length=255)
    song = models.ForeignKey(Song)
    
    def __str__(self):
        return self.name
