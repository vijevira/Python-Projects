#Investment strategy
import locale
import math
locale.setlocale(locale.LC_MONETARY, 'en_IN')
def getStrategy(age):
    #(high,med,bharatpe,ulip,gold,fd)
    #(20,15,12,10,8,5)
    equity=100-age
    if age<20:
        return (80,0,10,10,0,0)
    if age<=30:
        med=(equity*(1-(0.1*(30-age))))/2
        high=equity-med
        bharatpe=age//2
        ulip=(age-bharatpe)//2
        gold=age-bharatpe-ulip
        return (high,med,bharatpe,ulip,gold,0)
    if age<=50:
        med=equity*(1-(.025*(50-age)))
        high=equity-med
        bharatpe=age//2
        ulip=(age-bharatpe)//2
        gold=age-bharatpe-ulip
        return (high,med,bharatpe,ulip,gold,0)
    if age<=60:
        med=equity
        high=0
        bharatpe=25
        ulip=0
        fd=(age-bharatpe)-((60-age))
        gold=age-bharatpe-fd
        return (high,med,bharatpe,ulip,gold,fd)
    if age<=70:
        high=gold=ulip=0
        med=20
        bharatpe=20
        fd=60
        return (high,med,bharatpe,ulip,gold,fd)
    else:
        high=gold=ulip=0
        med=0
        bharatpe=20
        fd=80
        return (high,med,bharatpe,ulip,gold,fd)
        
def findAvgReturn(invested,value,year):
    return (math.pow(value/invested,1/year)-1)*100
    
def printVal(value,invested,age):
    global currentAge
    print("="*80)
    print("Your Total Investment at Age of {}".format(age))
    print("-"*80)
    print("Equity Investmet   = {}, Expected Value = {}".format(locale.currency(invested[0], grouping=True),locale.currency(value[0], grouping=True)))
    print("Index Investmet    = {}, Expected Value = {}".format(locale.currency(invested[1], grouping=True),locale.currency(value[1], grouping=True)))
    print("BharatPe Investmet = {}, Expected Value = {}".format(locale.currency(invested[2], grouping=True),locale.currency(value[2], grouping=True)))
    print("ULIP Investmet     = {}, Expected Value = {}".format(locale.currency(invested[3], grouping=True),locale.currency(value[3], grouping=True)))
    print("Gold Investmet     = {}, Expected Value = {}".format(locale.currency(invested[4], grouping=True),locale.currency(value[4], grouping=True)))
    print("FD Investmet       = {}, Expected Value = {}".format(locale.currency(invested[5], grouping=True),locale.currency(value[5], grouping=True)))
    print("_"*80)
    print("Total Invested Amount = {}, Expected Value = {}".format(locale.currency(sum(invested), grouping=True),locale.currency(sum(value), grouping=True)))
    print("Average Return Per Annum = {0:.2f}%".format(findAvgReturn(sum(invested),sum(value),age-currentAge)))
    print("_"*80)

income=15000#int(input("Enter your monthly investment amount: "))
age=25#int(input("Enter your age: "))
currentAge=age
print("Considering salary hikes per year = 10%")
ret=(0.20,0.15,0.12,0.10,0.08,0.05)
#ret=(0.20,0.15,0.15,0.15,0.15,0.15)
value=[0,0,0,0,0,0]
invested=[0,0,0,0,0,0]
income*=12
while age<=60:
    strategy=getStrategy(age)
    amount=[]
    for i in range (6):
        value[i]*=(1+ret[i])
        value[i]=int(value[i])
    for p in strategy:
        amount.append(int(income*(p/100)))
    for i in range (6):
        value[i]+=amount[i]
        invested[i]+=amount[i]
    if age>25 and age%5==0:
        printVal(value,invested,age)
    #income+=(income/10)
    age+=1
