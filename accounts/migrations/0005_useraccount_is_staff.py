# Generated by Django 3.2 on 2021-05-28 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_useraccount_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
