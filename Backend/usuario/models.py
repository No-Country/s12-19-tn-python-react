from django.db import models
"""
<<<<<<< HEAD
from reserva.models import Reserva
from propiedad.models import Propiedad
=======
from django.contrib.auth.models import User
>>>>>>> c1a2064a6f2aed9401ebc9a2f7e378d136624fff

# Create your models here.
class Perfil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)
    document_id = models.CharField(max_length=15,unique=True)


    def __str__(self):
         return self.nombre

class Anfitrion(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
#    propiedades_administradas = models.ManyToManyField('Propiedad',blank=True)
    avaliacao_anfitriao = models.FloatField(default=0.0)

    def __str__(self):
        return f"Anfitrion: {self.usuario.nombre}" 

class Huesped (models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
#   reservas = models.ManyToManyField('Reserva', blank=True)
    avaliacao = models.FloatField(default=0.0)

=======
        return self.user.username
>>>>>>> c1a2064a6f2aed9401ebc9a2f7e378d136624fff
"""