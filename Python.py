
# Ping-Pong AKA FizzBuzz Test

num = input("To which number do you want to Ping-Pong? ")

for ii in range (1, num + 1):
   if ii % 3 == 0 and ii % 5 != 0:
      print("Ping")
   elif ii % 5 == 0 and ii % 3 != 0:
      print("Pong")
   elif ii % 3 == 0 and ii % 5 == 0:
      print("Ping-Pong")
   else:
      print(ii)
