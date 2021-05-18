userNum = int(input("Type any number: "))
found = True # Default

for factor in range(2, userNum) :
    if int(userNum) % factor == 0 and not userNum == 2:
        found = False 
        break
if found == True and not userNum < 2 :
    print("The number is prime.")
else:
    print("The number is not prime")
