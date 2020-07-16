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

Now you can manage preloaded data in [admin dashboard](http://localhost:8000/admin/)

### Description of the problem and solution

- There was ambiguity in the screener assessment payload between fields of `name`, `full_name`, `content.display_name` and used `full_name` and `content.display_name` in screener assessment page.

- Assumed that screener is a special type of assessment whose `disorder` is `Cross-Cutting`.

### Technical choices

Chose the following technologies:

- [django-rest-framework](https://www.django-rest-framework.org/) for backend api
- [Postgresql](https://www.postgresql.org/) for database storage
- [React](https://reactjs.org/) for frontend app
- [Docker](https://docs.docker.com/) & [docker-compose](https://docs.docker.com/compose/) for running backend and frontend
- [MaterialUI](https://material-ui.com/) for building UI/UX

### Trade-offs

#### Backend

- Skipped implement user management. But, you can still manage entities in django admin dashboard.
- As patients are not registered, couldn't implement recording answers from patients into database.

#### Frontend

- Skipped adding redux for data store as data structure is simple for now.
- Built single page only instead of adding multiple pages using react-router
- Skipped implementing authentication of users


As this is a coding challenge, this project is not complete in terms of business features.
The features that would make it deployable to production are:

- Add test spec for models and routes
- Implement signup and login
- Add thorough validation in both front-end and back-end
- Record the answers from the patients
- Add redux for data store in React app
- Add react-router for adding more pages
