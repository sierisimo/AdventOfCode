filecontent = open("data.in")

text = filecontent.readline()

for i in text:
    if i == '(':
        print("Sumando")
    else:
        print("Restando")
