#!/bin/sh

until cd /app/backend/src
do
    echo "Waiting for server volume..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

./manage.py collectstatic --noinput

gunicorn crm.wsgi --bind 0.0.0.0:8000 --workers 2 --threads 2