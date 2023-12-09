from django.db import models

from propiedad.models import Propiedad

# Create your models here.
class Galeria(models.Model):
    propiedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='imagenes')
    descricion = models.CharField(max_length=255)