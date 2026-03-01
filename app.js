// A movie Guesser which guess a correct movie.

// Movie name in which the user input will be compare with.
let favoriteMovie = "avatar";
// Taking input from the user of any name of the movie.
let guess = prompt("Guess Movie Name and write it.").toLowerCase();
// Condition to check the movie name that either it is correct or not.
while(guess !== favoriteMovie && guess !== "quit"){
    guess = prompt("Wrong Guess. Please try Again!").toLowerCase();
}
// Condition to know that whether it is correct or quit the movie guesser.
if(guess === favoriteMovie){
    console.log("Congratulations! You Did Correct.");
} else{
    console.log("You quit!");
}