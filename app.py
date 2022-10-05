from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", page_active = "Accueil")

@app.route("/create")
def create():
    return render_template("create.html", page_active = "Création")

@app.route("/characters")
def characters():
    return render_template("characters.html", page_active = "Personnages")

@app.route("/default")
def default():
    return render_template("default.html", page_active = "Par défaut")

if __name__ == "__main__":
    app.run(debug=True)    