#!/bin/bash
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py loaddata --app screener assessment.yaml domain.yaml section.yaml question.yaml answer.yaml
