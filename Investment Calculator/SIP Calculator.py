# SIP CALCULATOR #

p=int(input("Enter Monthly Installement Amount: "))
r=float(input("Enter Monthly Interest Rate: "))
total=p
i=1
temp=p
while (True):
    x=input("YEAR = {} ".format(i//12))
    if len(x)>0:
        inv=round(p*(i-1),2)
        print("Total Investment = {}".format(inv))
        print("Total Amount = {}".format(temp))
        print("Total Earning = {}".format(round(temp-inv,2)))
        break
    for j in range (12):
        temp=round(total*(1+r/100),2)
        total=temp+p
        print("End of {} months = {}".format(i,temp))
        i+=1
