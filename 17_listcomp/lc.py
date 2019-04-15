one = [str(x*22) for x in range(5)]
print(one)

two = [x*10+7 for x in range(5)]
print(two)

prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]


five = [x for x in range(100) if not (any([x % y == 0 for y in range(3,int(x**.5)+1,2)]) or x%2==0)]
prime = five
print(five)

four = [x for x in range(100) if x not in prime]
print(four)

def six(num):
    return {x for x in range(1,num) if num % x == 0}

print(six(9))
print(six(5))
print(six(12))

def transpose(m):
    return [[y for y in m]for x in range(len(m[0]))]

print(transpose([[1,2,3],[4,5,6],[7,8,9]]));
