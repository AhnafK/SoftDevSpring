import random
##
##def make_HTML_heading(f):
##    text = f()
##    def inner():
##        return '<h1>' + text + '<h1>'
##    return inner

#equiv to
#greet = make_HTML_heading(greet)
##@make_HTML_heading
##def greet():
##    greetings = ['Hello', 'Welcome', 'AYO', 'Hola', 'Bonjour', 'WordUP']
##    return random.choice(greetings)
##
##print(greet())
#greet_heading = make_HTML_heading(greet)
#print(greet_heading())
##
##def fib(n):
##    check = [0,1]
##    def sub():
##        nonlocal check
##        while len(check) < n:
##            check.append(check[-1] + check[-2])
##            
##    return check(n)

def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(40))
