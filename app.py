from flask import Flask
from flask import render_template
import os
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', mapsApiKey = os.environ.get('MAPSAPIKEY'))

@app.route('/results')
def results():
    return "RESULTS."
