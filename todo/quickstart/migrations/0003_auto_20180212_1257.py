# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-02-11 23:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0002_auto_20180212_1212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
