#Investment strategy
import locale
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
    return (0,0,0,0,0,100)
        
def findAvgReturn(invested,year):
    global ret
    avg=0
    total=sum(invested)
    if total==0:
        return 0
    for i in range (6):
        avg+=(invested[i]/total)*ret[i]
    return avg*100

def findCurrentValue(amount,year):
    return amount*(0.95**year)

def printVal(value,invested,age):
    global currentAge
    print("="*80)
    print("Your Total Investment at Age of {}".format(age))
    print("-"*80)
    print("Stock Investmet    := {}, Expected Value := {}".format(locale.currency(invested[0], grouping=True),locale.currency(value[0], grouping=True)))
    print("Index Investmet    := {}, Expected Value := {}".format(locale.currency(invested[1], grouping=True),locale.currency(value[1], grouping=True)))
    print("BharatPe Investmet := {}, Expected Value := {}".format(locale.currency(invested[2], grouping=True),locale.currency(value[2], grouping=True)))
    print("ULIP Investmet     := {}, Expected Value := {}".format(locale.currency(invested[3], grouping=True),locale.currency(value[3], grouping=True)))
    print("Gold Investmet     := {}, Expected Value := {}".format(locale.currency(invested[4], grouping=True),locale.currency(value[4], grouping=True)))
    print("FD Investmet       := {}, Expected Value := {}".format(locale.currency(invested[5], grouping=True),locale.currency(value[5], grouping=True)))
    print("_"*80)
    print("Total Invested Amount := {}, Expected Value := {}".format(locale.currency(sum(invested), grouping=True),locale.currency(sum(value), grouping=True)))
    print("Average Return := {0:.2f}%, Current Value := {1}".format(findAvgReturn(invested,age-currentAge),locale.currency(findCurrentValue(sum(value),age-currentAge), grouping=True)))
    print("_"*80)

def evaluateInvestment(income,value,invested,age):
    strategy=getStrategy(age)
    amount=[]
    if age>20 and age%10==0:
        printVal(value,invested,age)
    for i in range (6):
        value[i]*=(1+ret[i])
        value[i]=int(value[i])
    for p in strategy:
        amount.append(int(income*(p/100)))
    for i in range (6):
        value[i]+=amount[i]
        invested[i]+=amount[i]
    
income=25000#int(input("Enter your monthly investment amount: "))
currentIncome=income
age=25#int(input("Enter your age: "))
lumpsum=180000 #int(input("Enter Total Amount Invested till now: "))
currentAge=age
print("Considering salary hikes per year = 10%")
ret=(0.20,0.15,0.12,0.10,0.08,0.05)
#ret=(0.30,0.20,0.15,0.10,0.08,0.05)
value=[0,lumpsum,0,0,0,0]
invested=[0,lumpsum,0,0,0,0]
income*=12
while age<=40:
    evaluateInvestment(income,value,invested,age)
    income+=(income/10)
    age+=1
print("-"*20+f"All Investment moves to FD at Age of {age}".upper()+"-"*21)
print("="*80)
fd=sum(value)
print("Total Amount := {}".format(locale.currency(fd, grouping=True)))
print("-"*80)
currentValue=fd*((.95)**(age-currentAge))
print("5% Inflation Adjusted, Current Value := {}".format(locale.currency(currentValue, grouping=True)))
print("="*80)
expense=50000#int(input("Enter Current Monthly Expenses : "))
expense*=((1.05)**(age-currentAge))
investmentAge=age-currentAge
print("Expenses at age of {} Per Month:= {}".format(age,locale.currency(expense, grouping=True)))
print("="*80)
expense*=12
while age:
    fd-=expense
    if age<50:
        fd*=1.15
    elif age<=60:
        fd*=1.1
    else:
        fd*=1.05
    expense*=1.05
    if fd<=0:
        print("_"*80)
        print("-"*28+"Bank Currupt, Age := {}".format(age)+"-"*28)
        break
    if age==85:
        print("_"*80)
        print("Successfully lived {} years, Total Amount := {}".format(age,locale.currency(fd, grouping=True)))
        print("Current Value := {}".format(locale.currency(findCurrentValue(fd,age-currentAge), grouping=True)))
        print(f"Investment Per Month := {currentIncome}, Hikes := 10%, Years := {investmentAge}")
        #break
    if age<85 and age%5==0:
        print("-"*80)
        print("Age {} Amount := {}".format(age,locale.currency(fd, grouping=True)))
    age+=1
print("_"*80)
print("="*80)    
    
