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

filename = 'c:/Users/User/Desktop/CMPE131/CMPE-131-Elevate/hw2/hw2_data.txt'
dict = []

# read filename as argument
# read for csv
with open(filename, 'r') as f:
    readcsv = f.read().replace('\t', ',') 

# write to csv 
with open("c:/Users/User/Desktop/CMPE131/CMPE-131-Elevate/hw2/csv_out.csv", "w", newline="") as g:
    writer = csv.writer(g)
    writer.writerow([readcsv])   # square brackets to write one string per row

# write to json
with open("c:/Users/User/Desktop/CMPE131/CMPE-131-Elevate/hw2/json_out.json", "w") as json_write:
    json_write.write(str(readcsv))


# write to xml 