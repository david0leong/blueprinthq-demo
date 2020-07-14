# Generated by Django 3.0.8 on 2020-07-14 01:21

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assessment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Assessment name', max_length=30)),
                ('full_name', models.CharField(help_text='Assessment full name', max_length=50)),
                ('display_name', models.CharField(help_text='Assessment display name', max_length=50)),
                ('disorder', models.CharField(help_text='Assessment disorder', max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True, help_text='When the assessment is created')),
            ],
        ),
        migrations.CreateModel(
            name='Domain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Domain name', max_length=100)),
                ('threshold', models.PositiveSmallIntegerField(blank=True, help_text='Threshold score for level-2 assessment', null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('next_assessment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='threshold_domains', to='screener.Assessment')),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('standard', 'Standard')], help_text='Section type', max_length=30)),
                ('title', models.CharField(help_text='Section title', max_length=256)),
                ('assessment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sections', to='screener.Assessment')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Answer title', max_length=100)),
                ('domain', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='screener.Domain')),
                ('section', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='screener.Section')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.PositiveSmallIntegerField(help_text='Answer value', validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
                ('title', models.CharField(help_text='Answer title', max_length=100)),
                ('section', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answers', to='screener.Section')),
            ],
        ),
    ]