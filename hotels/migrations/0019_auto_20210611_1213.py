# Generated by Django 3.2 on 2021-06-11 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0018_remove_hotel_sub_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotel',
            name='description',
            field=models.CharField(max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='policy',
            field=models.CharField(max_length=1000, null=True),
        ),
    ]
