from django.db import models
from django.forms import CharField
from django.contrib.auth.models import User
from propiedad.models import Propiedad

# Create your models here.
class Comentario(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    propiedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE)
    calificacion = models.IntegerField()
    comentario = models.CharField(max_length=500)
    fecha_creacion = models.DateTimeField(auto_now_add=True)