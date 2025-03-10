# Utiliser Python 3.12.9
FROM python:3.12.9-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . .

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port 8080 (Cloud Run attend ce port)
ENV PORT=8080
EXPOSE 8080

# Lancer Gunicorn avec 4 workers
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8080", "app:app"]
