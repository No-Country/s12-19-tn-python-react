from django.db import models
from propiedad.models import Propiedad
from django.contrib.auth.models import User
# Create your models here.

class Reserva(models.Model):
    fecha_inicio = models.DateField(null=True)
    fecha_fin = models.DateField(null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=1)
    propriedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE,null=True)
    costo_total = models.DecimalField(max_digits=10, decimal_places=2,default=0.0)