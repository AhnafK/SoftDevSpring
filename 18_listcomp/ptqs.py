def quicksort(n):
    part = randint(len(n))
    [x for x in range(len(n)) if n[x] < n[part]] + [x for x in range(len(n)) if n[x] > n[part]]

def triples(n):
    return list(tuple([{x, y, int((x**2 + y**2)**.5)} for x in range(1,n) for y in range(1,n) if ((x**2 + y**2)**.5).is_integer()]))

#print(quicksort([1,4,6,8,3,2,5,1]))
print(triples(6))
