# Generated by Django 3.2 on 2021-05-18 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0002_room_roomimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='favorite_room_function',
        ),
    ]
