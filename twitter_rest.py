
from pymongo import MongoClient
import tweepy
import json
from time import sleep
import hug
#@hug.get()
WORDS = input("Please enter a hashtag")
l = list()
client = MongoClient("mongodb://pcheng11:a**@cluster0-shard-00-00-4ie1u.mongodb.net:27017,cluster0-shard-00-01-4ie1u.mongodb.net:27017,cluster0-shard-00-02-4ie1u.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin")
            
            # Use twitterdb database. If it doesn't exist, it will be created.
db = client.twitterdb
class StreamListener(tweepy.StreamListener):    

    #This is a class provided by tweepy to access the Twitter Streaming API. 
        def on_connect(self):
        # Called initially to connect to the Streaming API
            print("You are now connected to the streaming API.")
 
        def on_error(self, status_code):
        # On error - if an error occurs, display the error / status code
            print('An Error has occured: ' + repr(status_code))
            return False
 
        def on_data(self, data):
            
    
            # Decode the JSON from Twitter
            datajson = json.loads(data)
            l.append(datajson)
            # print (l)
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

            #if 
            try:    
                loc = l[-1]['place']['bounding_box']['coordinates'][0][0][::-1]
                dic['LOCATION']  = loc
            except TypeError:
                loc = 'None'
                dic['LOCATION'] = loc

            profile_pic = l[len(l)-1]['user']['profile_image_url']
            dic['PROFILEPIC'] = profile_pic

            ID = db.twitter_collection.insert_one(dic).inserted_id
            #print(ID)
            #results = client.twitterdb.find() 
            print('----------------------------------------------------')
            print('----------------------------------------------------')
            print('----------------------------------------------------')
            print(ID)
            print('----------------------------------------------------')
            print('----------------------------------------------------')
            print('----------------------------------------------------')
            
            #print(dic)
            print('----------------------------------------------------')
            print('DATE: ' + date)
            print('NAME: '+ name)
            print('NICKNAME: '+ screen_name)
            print('TEXT: ' + tweet_text)
            print('LOCATION: ' + str(loc))
            print('PROFILEPIC: ' + profile_pic)
            print('HASHTAG: '+ WORDS)
            print('----------------------------------------------------')
            
            #with open("result.txt","a") as out:
                #out.write(str(dic)+'\n')
                #json.dump(dic, out)
                #return False
            #else:
                #return True
#                 print ("result " + str(dic))
#                 exit(1)

                #break          

def api_function(hashtag: hug.types.text):
    WORDS = [hashtag]
    CONSUMER_KEY = "9eUA1B2aN1bkYTM7YRgOsjc0r"
    CONSUMER_SECRET = "oBkfMDjpBZ9w3HR6Zl4VcsFpfo4oWKSxD3cmfzZnOaHCTuGD8M"
    ACCESS_TOKEN = "769002669134393345-C6OuBKGU6i8zdVF5ldB9D7cmNMUqR4k"
    ACCESS_TOKEN_SECRET = "cOVtS3q6rQ7oWhlpzHoJAYO0718yccpbbpc2qhS3WlrPF"


    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    #Set up the listener. The 'wait_on_rate_limit=True' is needed to help with Twitter API rate limiting.
    #stop = 0
    #while stop == 0:

    listener = StreamListener(api=tweepy.API(wait_on_rate_limit=False)) 
    streamer = tweepy.Stream(auth=auth, listener=listener)
    print("Tracking: " + str(WORDS))
    streamer.filter(track=WORDS, async = False)

    

api_function(WORDS)

# @hug.get()
# def tweet_data(/):
    #a = json.loads(out)


