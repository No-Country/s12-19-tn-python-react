from django.db import models
# Create your models here.
class Servicio(models.Model):
    nombre = models.CharField()
    descripcion = models.TextField()
