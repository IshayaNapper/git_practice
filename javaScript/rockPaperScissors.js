
//Shorthand function storing user choice and converting to lowercase.
const getUserChoice = userInput =>{
  //Taking userInput and converting to lowercase
    userInput = userInput.toLowerCase();
 
    //if any vaule in this condition equals to true return the userInput variable.
    if(userInput === 'rock' || userInput === 'paper' || userInput === scissors)
,
    return userInput;
//Else statment if error is found
    else {
      console.log('Error!');
    }
 };
 
 //Function generating random number to store computer choice. and rounding to nearest whole number
 function getComputerChoice() 
 {
   //Produces random number between 1-3 
   //stores it inside randomNumber variable
   let randomNumber = Math.floor(Math.random() * 3);

   //Switch statmement checks random number to see if they match 'case
   //if match it will return stored value.
   switch (randomNumber)
   {
     case 0:
     return 'rock';
     break;
     case 1:
     return 'paper';
     break;
     case 2:
     return 'scissors'
     break; 
   }
 
 }

 //Function Comparing userChoise wth computerChoice
 //Functions has two parmeters(place holders)
 const determineWinner = (userChoice, computerChoice) =>
 {
   //IF statement compairing userChoice and computerChoice
   if(userChoice === computerChoice){
     return 'Its a tie!';
   }
 
   if(userChoice === 'rock'){
     if (computerChoice === 'paper'){
     return 'The computer won!';
     } 
     else {
       return 'You won!';
     }
   }
   if(userChoice === 'paper'){
     if(computerChoice === 'scissors')
     return 'The computer Wins!'
   } 
   else {
     return 'You won!';
   }
 
  if(userChoice === 'scissors')
    if(computerChoice === 'rock')
    {
    return 'The computer wins!';
    }
 else {
   return 'You won!';
  }
 }
 
 
 
 // play game function definition
 const playGame = () =>
 {
   //calling function and storing in userChoice variable
   const userChoice = getUserChoice('rock');//Pass in choice in parameters

   //calling function storing in computerChoice variable
   const computerChoice = getComputerChoice();

   //Prints out useChoice variable
   console.log('You threw ' + userChoice);

   //Prints out computerChoice variable
   console.log('The computer threw: ' + computerChoice);
 
   //Calls determineWinner functinon pass in stored variables and prints to console.
   console.log(determineWinner(userChoice, computerChoice));
 }
 
 //Functions holds info and displays to console.
 playGame();
 