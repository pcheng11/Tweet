import json
import tweepy
from flask import Flask
import pymongo
from pymongo import MongoClient
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api_main = Api(app)
CONSUMER_KEY = ""
CONSUMER_SECRET = ""
ACCESS_TOKEN = ""
ACCESS_TOKEN_SECRET = ""
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)#, parser = tweepy.parsers.JSONParser())
parser = reqparse.RequestParser()
parser.add_argument('WORDS')
l = list()
list_dict = list()
class Get_data(Resource):
	def get(self,WORDS):
		
		search_result = tweepy.Cursor(api.search, q=WORDS).items(1)
		json_str = ''
		for i in search_result:
			json_str = json.dumps(i._json)
		datajson = json.loads(json_str)
		l.append(datajson)
		name = l[len(l)-1]['user']['name']
		screen_name = l[len(l)-1]['user']['screen_name']
		tweet_text = l[len(l)-1]['text']
		date = l[-1]['created_at']
		dic = dict()
		dic['NAME'] = name
		dic['TEXT'] = tweet_text
		dic['NICKNAME'] = screen_name
		dic['DATE'] = date
		dic['HASHTAG'] = WORDS
		try:
			loc = l[-1]['place']['bounding_box']['coordinates'][0][0][::-1]
			dic['LOCATION']  = loc
		except TypeError:
			loc = 'None'
			dic['LOCATION'] = loc

		profile_pic = l[len(l)-1]['user']['profile_image_url']
		dic['PROFILEPIC'] = profile_pic
		#list_dict.append(dict)
		return(dic)
api_main.add_resource(Get_data, "/current/<string:WORDS>")

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
