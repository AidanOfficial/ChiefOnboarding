# Generated by Django 3.2.8 on 2021-11-11 02:37

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('preboarding', '0004_preboarding_polymorphic_ctype'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='preboarding',
            managers=[
                ('templates', django.db.models.manager.Manager()),
            ],
        ),
        migrations.RemoveField(
            model_name='preboarding',
            name='polymorphic_ctype',
        ),
    ]
