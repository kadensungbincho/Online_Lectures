

from flask import Flask
from flask import render_template

app = Flask(__name__) # magic variable, means use whatever our current namespace is
                      # always refer yourself

@app.route('/')  # route setting with decorator function
@app.route('/<name>') # multi route, capture whatever values after / with key 'name'
def index(name="Treehouse"):
    return render_template("index.html", name=name)


@app.route('/add/<int:num1>/<int:num2>') # take the variable as int 
@app.route('/add/<float:num1>/<float:num2>')
@app.route('/add/<int:num1>/<float:num2>')
@app.route('/add/<float:num1>/<int:num2>')
def add(num1, num2):
    context = {'num1': num1, 'num2': num2} # using dict for sending key-val for jinja2in html {{ }}
    return render_template("add.html", **context)


app.run(debug=True, port=8000, host='0.0.0.0')  # debug True : always restart after change



