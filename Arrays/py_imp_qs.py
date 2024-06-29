# =====================================================================================================

# Write a Python program to create an empty tuple.

# empty_tuple=()

# =====================================================================================================

# Write a program to create a tuple with elements (1, 2, 3, 4, 5) and print it.

b=[]
for i in range(1,6):
    b.append(i)
a=tuple(b)
print(b)


# =====================================================================================================
# Write a Python program to concatenate two tuples.
# a=(7,5,1,0,9)
# b=(4,9,5,5,4)

# concatenate = a + b

# print("concatenated tuple =",concatenate)

# =====================================================================================================
# Write a program to find the length of a tuple.

# a=(7,5,1,0,9,4,9,5,5,4)

# print(len(a))

# =====================================================================================================
# Write a program to check if an element exists in a tuple.

# a=(1,2,3,4,5)
# def search(b):
#     for i in a:
#         if i==b:
#             return b,"is in this tuple"
#             break
#     else:
#         return b,"is not in the tuple"

# print(search(58))

# =====================================================================================================
# Write a Python program to find the index of an element in a tuple.

# tuple=(1,2,3,4,5)
# def index(i):
#     if i in tuple:
#         return i,"is in the",tuple.index(i),"th index of the existing tuple "
#     else:
#         return 'not in the existing tuple'

# print(index(5))

# =====================================================================================================
# Write a program to sort a tuple of strings.

# tuple=('tata','suzuki','kia','byd','ford','honda','volkswagen')

# print(sorted(tuple))

# =====================================================================================================
# Write a Python program to find the maximum and minimum elements in a tuple.

# tuple=(1,2,3,4,5,6,7)

# print(max(tuple))

# print(min(tuple))

# =====================================================================================================
# Write a Python program to remove an element from a tuple.

# a=(1,2,3,4,5)

# def remove(b):
#     c=list(a)
#     if b in c:
#         c.remove(b)
#         return tuple(c)
#     else:
#         return 'element not in the tuple'

# print(remove(5))

# =====================================================================================================
# Write a program to find the sum of elements in a tuple.

# tuple=(2,4,6)
# print(sum(tuple))

# =====================================================================================================
# Write a program to find the frequency of elements in a tuple.

# tuple=(1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6)
# dup_tup={}
# for i in tuple:
#     if i not in dup_tup:
#         dup_tup[i]=1
#     else:
#         dup_tup[i]+=1

# print(dup_tup)








