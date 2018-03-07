import json 

from flask import (Flask, render_template, redirect, url_for, 
                   request, make_response, flash)

from options import DEFAULTS

app = Flask(__name__)
app.secret_key = '90akq23jnfkmsafd09fj2qnflafadsff23' # just random key for a users

def get_saved_data(): # for tranform json to python code back
    try:
        data = json.loads(request.cookies.get('character')) # parsing as json style
    except TypeError:
         data = {}
    return data


@app.route('/')
def index():
    return render_template('index.html', saves=get_saved_data())


@app.route('/builder')
def builder():
    return render_template(
        'builder.html',
        saves=get_saved_data(),
        options=DEFAULTS
    )
        

@app.route('/save', methods=['POST'])
def save():
    flash("Alright! That looks awesome!")
    response = make_response(redirect(url_for('builder')))
    data = get_saved_data()
    data.update(dict(request.form.items()))
    response.set_cookie('character', json.dumps(data)) # you already got the info and all we need to do is update it & send back, json dict to str
    return response

app.run(debug=True, host='0.0.0.0', port=8000)
