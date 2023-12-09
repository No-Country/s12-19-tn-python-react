import imp
from unicodedata import name
from django.db import migrations
from django.contrib.auth.models import Group

def add_user_groups(apps,schema_editor):
    Group.objects.get_or_create(name = 'Huesped')
    Group.objects.get_or_create(name = 'Anfitrion')

class Migration(migrations.Migration):
    dependencies = [
        ('usuario','0003_remove_perfil_numero_cuenta'),
    ]

    operations = [
        migrations.RunPython(add_user_groups)
    ]