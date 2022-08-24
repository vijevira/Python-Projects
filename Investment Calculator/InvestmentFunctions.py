p=1000
t=10
r=.08
def calculateEMI(p, t, r) :
		r/=12
		n=t*12
		num=p*r*((1+r)**n)
		dem=(1+r)**n-1
		return round(num/dem,2)
def calculateLoan(p, t, r) :
		emi=calculateEMI(p, t, r)
		total=emi*t*12
		return round(total, 2)
print(calculateLoan(p, t, r)) 
ret=.15
sip=1000
def calculateCAGR(p, a, t) :
		return (a/p)**(1/t)-1

def calculateSIP(p, t, r) :
		i=r/12
		n=t*12
		return p*((((1 + i)**n )- 1) / i)*(1 + i)
		#return p*(1+i)*((n-1)/i)(i+1)
print(round(calculateSIP(sip, t, ret)))
