from django.shortcuts import render
from comentarios.models import Comentario

# Create your views here.
def Comentarios(request):
    listaComentarios = Comentario.objects.all()
    context = {"comentarios":listaComentarios}
    return render (request,context)