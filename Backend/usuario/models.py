from pyexpat import model
from django.db import models
from reserva.models import Reserva
from propriedad.models import Propriedad

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.EmailField(unique=True)

    def __str__(self):
        return self.nombre

class Anfitrion(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
#    propriedades_administradas = models.ManyToManyField('Propriedad',blank=True)
    avaliacao_anfitriao = models.FloatField(default=0.0)

    def __str__(self):
        return f"Anfitrion: {self.usuario.nombre}" 

class Huesped (models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
#   reservas = models.ManyToManyField('Reserva', blank=True)
    avaliacao = models.FloatField(default=0.0)

