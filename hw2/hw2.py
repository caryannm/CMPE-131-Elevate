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

# read filename as argument
with open("c:/Users/carya/CMPE-131-Elevate/hw2/hw2_data.txt") as f:
    reader = f.read()
    #print(reader)   # print to output

# write to csv 
with open("c:/Users/carya/CMPE-131-Elevate/hw2/csv_out.csv", "w", newline="") as g:
    writer = csv.writer(g)
    writer.writerow([reader])   # square brackets to write one string per row
    