# Program to create a list for all of the words that both start and end with a Y

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
starts_with_y = []

for line in sow_pods:
    words.append(line.strip())

for w in words:
    if w.startswith("Y") and w.endswith("Y"):
        starts_with_y.append(w)

print(starts_with_y)
#print('All of the words that have B and X and are less than 5 letters long are:' + str(bx5))