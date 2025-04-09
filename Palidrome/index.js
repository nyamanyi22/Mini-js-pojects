const input = document.getElementById("input")
 
 function reverseString(str) {
     return str.split("").reverse().join("")
 }
 
 function checkPalindrome() {
     const value = input.value 
     const reverse = reverseString(value)
     
     if (value === reverse) {
         alert("P A L I N D R O M E")
     } else {
         alert("Not Palindrome!")
     }
 
     input.value = ""
 }