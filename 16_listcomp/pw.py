def pwchkr(p):
    upper = [True for x in p if x.isupper()]
    lower = [True for x in p if x.islower()]
    number = [True for x in p if x.isdigit()]
    #return upper[0] and lower[0] and number[0]
    return len(upper)>0 and len(lower)>0 and len(number)>0

def scr(p):
    if pwchkr(p):
        d = 4
    else:
        d = 0
    upper = [1 for x in p if x.isupper()]
    lower = [1 for x in p if x.islower()]
    number = [1 for x in p if x.isdigit()]
    return d + (sum(upper) + sum(lower) + sum(number))/max([len(upper), len(lower), len(number)])

print(pwchkr("as1"))
print(pwchkr("aS1"))
print(scr("aSsssss1"))
