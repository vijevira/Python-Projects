p = 10000
rate = 12
inc = 5000
age = 25
totalValue = 72000
while age < 50:
  totalValue+=p*12
  totalValue*=1.12
  if p<25000:
    p+=5000
  else:
    p*=1.05
  age+=1
  print('Age: ', age, 'Value: ', int(totalValue))
