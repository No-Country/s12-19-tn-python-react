from django.db import models
from propiedad.models import Propiedad
# Create your models here.
class Servicio(models.Model):
    nome = models.CharField()
    descricion = models.TextField()
    propiedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE)