# Generated by Django 3.2 on 2021-05-25 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='name',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='avatar',
            field=models.ImageField(null=True, upload_to='avatar/'),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='firstname',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='lastname',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='middlename',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='phone',
            field=models.CharField(max_length=15, null=True),
        ),
    ]