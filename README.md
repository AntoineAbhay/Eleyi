# Eleyi

This is a prototype app for the Michelin Campus Innovation Event in Clermont-Ferrand, France.

We suggested a uber like service for public transportation (mostly small buses) in developing countries such as Togo.


## How to set up on your local environment
If you don't have pipenv installed : `pip install pipenv`

```
cd path/to/repo
pipenv install
pipenv shell
export FLASK_APP=app.py
flask run
```

You will also need to define a environment variable like this to use your own google maps API key:

`export MAPSAPIKEY=your_api_key`


