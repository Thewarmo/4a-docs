# Generated by Django 3.2.8 on 2021-11-14 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prodApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.CharField(max_length=150),
        ),
    ]
