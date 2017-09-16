from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/hashtag/<string:search>')
def hashtag(search):
    return render_template('hashtag.html', search = search)


if __name__ == '__main__':
    app.run(debug=True);