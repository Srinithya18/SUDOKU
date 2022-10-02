import json
lines=[]
dictionary={}
with open('sudoku.txt') as f:
    i=0
    for line in f:
        dictionary[str(i)]=line[:-1]
        i+=1


print(dictionary)

out_file = open("test2.json", "w")
json.dump(dictionary, out_file, indent = 4)
out_file.close()