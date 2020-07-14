from django.db import models


class Section(models.Model):
    """Assessment section"""

    TYPE_STANDARD = 'standard'

    TYPES = (
        (TYPE_STANDARD, 'Standard'),
    )

    class Meta:
        pass

    assessment = models.ForeignKey(
        'Assessment',
        related_name='sections',
        on_delete=models.CASCADE
    )

    type = models.CharField(
        choices=TYPES,
        max_length=30,
        help_text='Section type'
    )

    title = models.CharField(
        max_length=256,
        help_text='Section title'
    )

    def __str__(self):
        return self.title
