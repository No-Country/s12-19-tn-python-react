from django.shortcuts import render

# Create your views here.

def index(request):
    
    return render(request,'index.html')

def index_propiedad(request):
    return render(request, 'propiedad/index.html')

def create_propiedad(request):
    return render(request, 'propiedad/create.html')

def index_usuario(request):
    return render(request, 'usuario/index.html')

def login_usuario(request):
    return render(request, 'usuario/login.html')

def create_usuario(request):
    return render(request, 'usuario/create.html')

def create_reserva(request):
    return render(request, 'reserva/create.html')