from django.db import models
from servicios.models import Servicio

from django.contrib.auth.models import User
# Create your models here.
class Propiedad (models.Model):
    nombre = models.CharField(max_length=255,null=True)
    descricion = models.TextField(null=True,blank=True)
    extra_info  = models.TextField(null=True,blank=True)
    ubicacion = models.CharField(max_length=255,null=True)
    numero_banos = models.IntegerField(default=1)
    numero_habitaciones = models.IntegerField(default=1)
    invitados_max = models.IntegerField(default=1)
    capacidad = models.IntegerField(default=0,null=True)
    tarifa = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    servicios = models.ManyToManyField(Servicio)
