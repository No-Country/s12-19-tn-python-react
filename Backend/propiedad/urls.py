from django.urls import path
from .views import list_propiedad, detail_propiedad, create_propiedad, update_propiedad, delete_propiedad

urlpatterns = [
    path('propiedad/', list_propiedad, name='list_propiedad'),
    path('propiedad/<int:id>/', detail_propiedad, name='detail_propiedad'),
    path('propiedad/create/', create_propiedad, name='create_propiedad'),
    path('propiedad/update/<int:id>/', update_propiedad, name='update_propiedad'),
    path('propiedad/delete/<int:id>/', delete_propiedad, name='delete_propiedad'),
]
