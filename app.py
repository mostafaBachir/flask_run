from flask import Flask, render_template

app = Flask(__name__)

# Exemple de dictionnaire
data = {
    "name": "Bachir",
    "age": 37,
    "city": "Brossard",
    "skills": ["Python", "Golang", "AWS", "DevOps"]
}

@app.route('/')
def index():
    return render_template('index.html', data=data)  # Envoie le dictionnaire à Jinja2

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
