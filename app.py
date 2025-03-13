from flask import Flask, request, render_template

app = Flask(__name__)

# Exemple de dictionnaire
data = {
    "name": "Bachir",
    "age": 37,
    "city": "Brossard",
    "skills": ["Python", "Golang", "AWS", "DevOps"],
    "factorial": None,
    "even": None,
}

def factorial(n):
    """Calcule le factoriel de n de manière récursive."""
    if n == 0 or n == 1:
        return 1  # Condition d'arrêt
    return n * factorial(n - 1)  # Appel récursif

@app.route('/')
def index():
    # Récupérer le nombre de la requête (GET)
    number = request.args.get('number', default=None, type=int)

    if number is not None:
        data["factorial"] = factorial(number)
        data["even"] = "Oui, le nombre est pair" if number % 2 == 0 else "Non, le nombre est impair"
    else:
        data["factorial"] = "Aucun nombre fourni"
        data["even"] = "Aucun nombre fourni"

    print(data)  # Pour debug

    return render_template('index.html', data=data)  # Envoie le dictionnaire à Jinja2

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
