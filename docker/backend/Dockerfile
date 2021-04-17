FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
ADD ./backend/requirements.txt /app/backend/
RUN pip install --upgrade pip
RUN pip install -r /app/backend/requirements.txt
RUN pip install gunicorn
RUN pip install psycopg2-binary
ADD ./docker /app/docker
ADD ./backend /app/backend
EXPOSE 8000
