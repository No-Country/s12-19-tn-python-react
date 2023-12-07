from django.shortcuts import render
from comentarios.models import Comentario

# Create your views here.
def Comentarios(request):
    listaComentarios = Comentario.object.all()
    context = {"comentarios":listaComentarios}
    return render (request,context)
