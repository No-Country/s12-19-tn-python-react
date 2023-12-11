from django.urls import path
from .views import list_galerias, detail_galeria, create_galeria, update_galeria, delete_galeria

urlpatterns = [
    path('galerias/', list_galerias, name='list_galerias'),
    path('galerias/<int:id>/', detail_galeria, name='detail_galeria'),
    path('galerias/create/', create_galeria, name='create_galeria'),
    path('galerias/update/<int:id>/', update_galeria, name='update_galeria'),
    path('galerias/delete/<int:id>/', delete_galeria, name='delete_galeria'),
]
