# Generated by Django 3.1.7 on 2021-03-23 12:59

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0007_auto_20201128_1623"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="seen_updates",
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
