# Generated by Django 3.2 on 2021-05-25 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210525_2101'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='name',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
