# Coding challenge for Blueprint HQ

## Requirements

Here is [original requirement](https://github.com/blueprinthq/coding-challenge).

## Deliverables

### Hosted application

### How to run locally

Run container

```bash
docker-compose up -d
```

Once container is up and running apply migrations (a one-time operation) and create superuser by executing:

```bash
docker-compose exec api bash

python manage.py migrate
python manage.py createsuperuser
exit
```

### Description of the problem and solution

### Technical choices

### Trade-offs

As this is a coding challenge, this project is not complete in terms of business features.
The features that would make it deployable to production are:

- Make patient able to signup and login
- Record the answers from the patients
- Add admin dashboard (Can be done using django-admin)
