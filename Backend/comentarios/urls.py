from django.urls import path
from .views import list_comentarios, detail_comentario, create_comentario, update_comentario, delete_comentario

urlpatterns = [
    path('comentarios/', list_comentarios, name='listar_comentarios'),
    path('comentarios/<int:id>/', detail_comentario, name='detail_comentario'),
    path('comentarios/create/', create_comentario, name='create_comentario'),
    path('comentarios/update/<int:id>/', update_comentario, name='update_comentario'),
    path('comentarios/delete/<int:id>/', delete_comentario, name='delete_comentario'),
]
