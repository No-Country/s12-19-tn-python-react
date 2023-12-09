from django.db import models

# Create your models here.

class Propiedad(models.Model):
    title = models.CharField(max_length=100)
    address = models.TextField()
    added_photos = models.TextField()
    description = models.TextField()
    #country = models.CharField(max_length=100)
    #city = models.CharField(max_length=100)
    extra_info = models.TextField()
    rooms_number = models.IntegerField()
    bathrooms_number = models.IntegerField()
    guests_max = models.IntegerField()
    price = models.IntegerField()
