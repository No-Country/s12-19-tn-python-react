# Generated by Django 4.2.7 on 2023-12-11 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('galeria', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='galeria',
            old_name='descricion',
            new_name='descripcion',
        ),
    ]
