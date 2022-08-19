#Retairment Calculator
def getRetairmentAge(income,expense,rate,age):
    i=age
    total=0
    while True:
        i+=1
        total*=(1+rate)
        total+=income
        income*=1.1
        expense*=1.05
        if total*0.05 >= expense*1.05:
            return i
def getEfficientRetairmentAge(income,expense,rate,age,retAge=85):
    i=age
    total=0
    #expenses=calculateExpense(expense,retAge-age)
    while isEnough(total,expense,retAge-i):
        i+=1
        total*=(1+rate)
        total+=income
        income*=1.1
        expense*=1.05
        
    return i
def isEnough(total,expense,year):
    while total>0:
        if year==0:
            return False
        total-=expense
        total*=1.1
        expense*=1.05
        year-=1
        
    return True
        
def calculateExpense(expense,year):
    total=0
    while year:
        year-=1
        total*=1.05
        total+=expense
    return total
    
income=15000#int(input("Enter Your Monthly Investment Amount : "))
income*=12
expense=50000#int(input("Enter Monthly Expenses : "))
expense*=12
rate=15#int(input("Expected Return Per Annum : "))
rate/=100
age=25#int(input("Enter Your Current Age : "))
print("="*80)
ret85=getEfficientRetairmentAge(income,expense,rate,age)
print(f"Acceptable Retairment at till Age 85 := {ret85}")
ret75=getEfficientRetairmentAge(income,expense,rate,age,75)
print("-"*80+f"\nAcceptable Retairment at till Age 75 := {ret75}")
ideal=+getRetairmentAge(income,expense,rate,age)
print("-"*80+f"\nIdeal Retairment at till Lifetime := {ideal}")
print("="*80)
print("_"*80)
