#from flask import Flask,redirect, render_template
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import data
import pymongo

# Set up Mongo Connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

## Set up Mongo Database and Collection
db = client.ufo

app = Flask(__name__)



@app.before_first_request
def setup():
# Recreate collection each time for demo
    # Drop collection if exists
    db.ufo_data.drop()
    df_dict = data.gather()
    # Insert data into Mongo
    db.ufo_data.insert_many(df_dict)
    print("Added to db")



if __name__ == "__main__":
    app.run()

