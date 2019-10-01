#from flask import Flask,redirect, render_template
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import data
import pymongo
import json
from pprint import pprint
from bson.json_util import dumps

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

# # Trying to pass a complete JSON dict to Javascript. Not working
# @app.route("/")
# def build():
#     data = list(db.ufo_data.find().limit(20))
#     print(type(data))
#     return jsonify(data)
#     #return render_template("index.html")

# Get data from Mongo. Build a Plotly trace and send that back to JS file.
@app.route("/")
def build():

    return render_template("index.html")


@app.route("/api/days")
def days():
    data = list(db.ufo_data.find().sort("datetime",pymongo.DESCENDING).limit(1))
    print("Starting day calculation......")
    pprint(data)
    print(type(data[0]["date"]))
    print(data[0]["longitude "])
    print(data[0]["latitude"])
    print(type(data[0]["latitude"]))

    trace = {
        "type":"scattermapbox",
        "lat":[data[0]["latitude"]],
        "lon":[data[0]["longitude "]],
        "mode":"markers",
        "marker": {
            "size":14
        },
        "text":data[0]["city"] + "," + data[0]["state"]
    }
    pprint(trace)
    return jsonify(trace)

    #TO return the entire object dict
    #return dumps(db.ufo_data.find().sort("datetime",pymongo.DESCENDING).limit(1))

@app.route("/api/all")
def all():
    print(dumps(db.ufo_data.find().sort("datetime",pymongo.DESCENDING).limit(1)))
    return (dumps(db.ufo_data.find().sort("datetime",pymongo.DESCENDING).limit(1)))
    #return jsonify({"A":"B"})


if __name__ == "__main__":
    app.run()

