# Coding challenge for Blueprint HQ

## Requirements

Here is [original requirement](https://github.com/blueprinthq/coding-challenge).

## Deliverables

### Hosted application

### How to run locally

Build containers

```bash
docker-compose build
```

Run containers

```bash
docker-compose up -d
```

Apply migrations (a one-time operation)

```bash
docker-compose exec api python manage.py migrate
```

Create superuser by executing:

```bash
docker-compose exec api python manage.py createsuperuser
```

Load fixtures

```bash
docker-compose exec api python manage.py loaddata --app screener assessment.yaml domain.yaml section.yaml question.yaml answer.yaml
```

### Description of the problem and solution

### Technical choices

### Trade-offs

As this is a coding challenge, this project is not complete in terms of business features.
The features that would make it deployable to production are:

- Add test spec
- Add validators for models
- Implement signup and login
- Record the answers from the patients
