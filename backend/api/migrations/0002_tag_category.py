# Generated by Django 2.0.7 on 2018-07-14 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='category',
            field=models.CharField(choices=[('Vaccine', 'vacc'), ('Demographic', 'demog'), ('Other', 'other')], default='other', max_length=20),
        ),
    ]