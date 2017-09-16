from flask import Flask, render_template, url_for, redirect,request
import requests, json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')
        

@app.route('/hashtag',methods=['POST','GET'])
def hashtag():
    r=requests.get('https://jsonplaceholder.typicode.com/posts/1').json()
    search = request.form['search']
    print(r)

    return render_template('home.html', search = r)
    # if request.form['search'] != '': 
    #     print('r')
    #     return render_template('home.html', search = list('r'))
    # else:
    #     return "Error"      

if __name__ == '__main__':
    app.run(debug=True);