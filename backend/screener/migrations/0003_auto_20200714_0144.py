# Generated by Django 3.0.8 on 2020-07-14 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('screener', '0002_auto_20200714_0133'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='title',
            field=models.CharField(help_text='Answer title', max_length=256),
        ),
    ]
