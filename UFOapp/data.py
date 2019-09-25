#Generate UFO dataset
#This notebook uses raw UFO data from https://github.com/planetsig/ufo-reports and cleans it up. 
#Exports the clean data into json file to be used by the UFO app.
#The data was scrubbed and already clean to begin with, this notebook further organises it to best fit this specific project.


import pandas as pd
import os

srcpath = os.path.join('data','scrubbed.csv')
# Read UFO Signtings Csv data raw data



# Gather UFO signings data from the source file and store in Mongo Db
def gather():
    try:
        df = pd.read_csv(srcpath, sep=',', error_bad_lines=False, index_col=False, dtype='unicode') 

        # Change to Camel Case

        df["city"]= df["city"].str.upper().str.title() 
        df["state"]= df["state"].str.upper()
        df["country"]= df["country"].str.upper()
        df["shape"]= df["shape"].str.upper().str.title() 

        # Split datetime to separate date and time columns
        df[['date','time']] = df.datetime.str.split(expand=True) 

        # Remove duration(hours/min) and date posted
        df = df.drop(columns=['duration (hours/min)', 'date posted'])

        # Filter only for United States
        df = df[df["country"] == "US"]

        # Arange into dictionary
        df_dict = df.to_dict('records')

        return df_dict

    except Exception as e:
        print("ERROR : " + str(e))
        return

