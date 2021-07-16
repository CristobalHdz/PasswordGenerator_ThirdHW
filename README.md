 # 03 Javascript


# Section 01: General Information

Third code Boot Camp assignment.
</br>
</br>
`Password Generator`
</br>
</br>
 by Cristobal Hernandez
 
 ## Published link
 https://cristobalhdz.github.io/PasswordGenerator_ThirdHW/

# Section 02: General Information

The assignment for this week is to make a random password generator. This week we have been given some of the code and we have to work over it to make a functioning random password generator.

# Section 03: Code I changed and the explanation on why

Line 3: `var passwordText = document.querySelector("#password")`
Explanation: Taken out of the function because the DOM variable can be global without problems. If the variable was only supposed to be locally used, then it hsould stay inside the function. The code looks, and is, cleaner with all the variables together.

Line 17: `generateBtn.addEventListener("click", writePassword)` to `generateBtn.addEventListener("click", () => {};)`
Explanation: The code can be reduced by assining the annonymous function directly. The changed code is cleaner and easier to read and edit. 

Line 53: `var password = generatePassword()` & `passwordText.value = password;`  to `passwordText.value = generatePassword();`
Explanation: The removal of the "password" gives us the oportunity to shrten the code and make it less complicated to read.

#  Section 04: My experience

I had a really rought time with the given code. The last two of the three changes I made were so I could work with order. I had to see what password was equal to so I could apply it to the value so that is why I decided just ot merge some code to make it easier to read and work on.

The loop for the characters to position themselves depending on the length was pretty fun to search on the web. I used the one from the references because it was the cleanest out of the ones I looked at. 
</br>
The refference had the `.charAt()` which gave me the oportunity to search what it does and how it can be applied inside of the code.
</br>
I did add some filters just for fun to make the code as complete as possible. Let's call it a "fool-proof" way of telling the user what is missing for the code to work.

# References
`Code help reference`
https://w3collective.com/random-password-generator-javascript/

`.charAt() method`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt