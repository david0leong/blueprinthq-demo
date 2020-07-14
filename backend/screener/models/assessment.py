from django.db import models


class Assessment(models.Model):
    """Assessment"""

    class Meta:
        pass

    name = models.CharField(
        max_length=30,
        help_text='Assessment name'
    )

    full_name = models.CharField(
        max_length=50,
        help_text='Assessment full name'
    )

    display_name = models.CharField(
        max_length=50,
        help_text='Assessment display name'
    )

    disorder = models.CharField(
        max_length=30,
        help_text='Assessment disorder'
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        editable=False,
        help_text='When the assessment is created'
    )

    def __str__(self):
        return self.full_name
