# Generated by Django 3.2 on 2021-05-18 13:57

from django.db import migrations, models
import django.db.models.deletion
import hotels.models


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('square', models.FloatField(null=True)),
                ('guest_quantity', models.PositiveSmallIntegerField(default=1, null=True)),
                ('main_photo', models.ImageField(upload_to='room/main/')),
                ('favorite_room_function', models.CharField(max_length=50, null=True)),
                ('base_price_per_night', models.DecimalField(decimal_places=2, default=1, max_digits=10)),
                ('hotel_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='hotels.hotel')),
            ],
        ),
        migrations.CreateModel(
            name='RoomImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=hotels.models.room_photo_upload_path)),
                ('room_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='hotels.room')),
            ],
        ),
    ]
