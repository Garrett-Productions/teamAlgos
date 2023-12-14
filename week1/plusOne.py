def plus_one(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        else:
            digits[i] = 0
    
    return [1] + digits

# Test cases
print(plus_one([1, 2, 3]))
print(plus_one([9, 9]))