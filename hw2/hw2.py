# Given a file that contains Tab delimited text data, 
# write a program that:
# 1.Reads a filename as an argument
# 2.Then, opens that file, and reads all the data from 
# the file, then converts it to one of the following 
# formats, based on a second argument:
#       -c   CSV format
#       -j  JSON format
#       -x  XML format
# 3. And saves a new file, with the appropriate file 
# format in the current directory.
# i.e., the user selects a letter, and the file is 
# saved in the appropriate format.
# Upload word doc showing the execution, with a link to 
# your source code, and the 3 files (one each of CSV, 
# JSON, and XML) created by your program.

import csv
import json

filename = "C:/Users/carya/Desktop/CMPE-131-Elevate/hw2/hw2_data.txt"
csvPath = "C:/Users/carya/Desktop/CMPE-131-Elevate/hw2/csv_out.csv"
jsonPath = "C:/Users/carya/Desktop/CMPE-131-Elevate/hw2/json_out.json"

# read filename as argument
# read for csv
with open(filename, 'r') as f:
    readcsv = f.read().replace('\t', ',') 

# write to csv 
with open(csvPath, "w", newline="") as g:
    writer = csv.writer(g)
    writer.writerow([readcsv])   # square brackets to write one string per row

# write to json

# def make_json(csvPath, jsonPath):
#    data = {}

#    with open(csvPath, encoding='utf-8') as csvf:
#        csvReader = csv.DictReader(csvf)

#        for rows in csvReader:
#            key = rows['Player']
#            data[key] = rows
    
#    with open(jsonPath, 'w', encoding = )

players = {}

fields = ['Year', 'Player', 'Age', 'Hometown', 'Home State', 'Tm', 'G', 
'GS', 'Cmp', 'Att', 'Yds', 'TD', 'Int', 'Att', 'Yds', 'Y/A', 'TD', 'Rec', 
'Yds', 'Y/R', 'TD', 'FantPos', 'FantPt', 'Height (inches)', 'Weight', 'College', 
'Conference', 'College wins', 'College losses', 'DOB', 'Draft Round', 'Draft Year', 
'Wonderlic', '40\xa0Yard', 'Bench Press', 'Vert Leap\xa0(in)', 'Broad Jump\xa0(in)', 
'Shuttle', '3Cone']

with open(filename) as fh:
    p = 0
    for line in fh:
        description = list(line.strip().split('\t'))
        if (p > 0):
            print(description)
            sno = 'player'+str(p)
            i = 0
            playerData = {}
            while i<len(fields):
                playerData[fields[i]] = description[i]
                i = i + 1
            players[sno] = playerData
        p = p + 1
        

out_file = open(jsonPath, "w")
json.dump(players, out_file, indent = 4)
out_file.close()

# write to xml 