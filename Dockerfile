FROM python:3.11

WORKDIR /app

COPY ./api /app/api

RUN pip install fastapi uvicorn

CMD ["uvicorn", "api.app:app", "--host", "0.0.0.0", "--port", "8000"]