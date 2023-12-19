from django.db import models
from propiedad.models import Propiedad
# Create your models here.
class Servicio(models.Model):
    nombre = models.CharField()
    descripcion = models.TextField()
    propiedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE)