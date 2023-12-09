from django.db import models
from django.forms import CharField
from usuario.models import Anfitrion, Huesped

# Create your models here.
class Comentario(models.model):
    id_anfitrion = models.ForeignKey("usuario.Anfitrion", on_delete=models.CASCADE)    
    id_huesped = models.ForeignKey("usuario.Huesped", on_delete=models.CASCADE)    
    id_propiedad = models.ForeignKey("propiedad.Propiedad", on_delete=models.CASCADE)
    calificacion = models.IntegerField()
    Comentario = models.CharField(_max_length=500)
    