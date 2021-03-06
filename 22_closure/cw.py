##def inc(x):
##    return x + 1
##
##f = inc
##
##print(inc)
##print(f)
##print(f(10))

##def adder(a,b):
##    return a + b
##
##def caller(c):
##    print(c(2,4))
##    print(c(3,5))
##
##caller(adder)
##
##def outer(x):
##    def contains(l):
##        return x in l
##    return contains
##
##d = outer(15)
##del outer
####outer(43)
##print(d([1,2,414,1234,3]))
##
##print(d([13,34,15,15]))
##
##print(d(range(1,20)))
##
def repeat(w):
   def re(n):
       print(w*3)
   return re

r1 = repeat("hello")
r2 = repeat("goodbye")

r1(2)
r2(2)
repeat('cool')(2)

# def outer():
#    x = "foo"
#    def inner():
#        nonlocal x
#        x = "bar"
#    inner()
#    return x
# print(outer())

print('---')
def make_counter():
    x = 0
    def inc():
        nonlocal x
        x+=1
        print(x)
    return inc

ctr1 = make_counter()
ctr1()
ctr1()
ctr2 = make_counter()
ctr1()
ctr2()
ctr1()
ctr2()
