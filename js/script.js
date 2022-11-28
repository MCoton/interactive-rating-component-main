let value = '';

// Select interactive elements and assign to a constant
const ratings = document.querySelectorAll('li');
const submit = document.getElementById('submit').addEventListener('click', handleSubmit);
// Select 'state' elements
const thankyouState = document.getElementById('thankyouState');
const ratingState = document.getElementById('ratingState');
// Select rating span in thankyou state
const ratedAs = document.getElementById('chosenRating')

// Add event listeners to the elements selected above
ratings.forEach(rating => {
    rating.addEventListener('click', handleClick, false); 
});


// Handle clicks on 'li' elements and change state using '.clicked' class
function handleClick (event) {
    let element = event.target;
    let classes = element.classList;
    value = element.innerText;
    // Boolean for use in the IF statement because I could not
    // make it evaluate correctly within the actual IF statement
    // parentheses so had to pre-assign it here.
    let activeRating = classes.contains('clicked');

    // Remove clicked class from all 'li' elements
    for (const rating of ratings) {
        rating.classList.remove('clicked');
    }

    // Conditional to either add or remove 'clicked' class
    // denoting the active button
    if (!activeRating){
        element.classList.add('clicked');
    } else {
        element.classList.remove('clicked');
        value = '';
    }
    return value;
}

function handleSubmit () {
    if(value) {
        ratingState.classList.add('hidden');
        thankyouState.classList.remove('hidden');
        ratedAs.innerText = value;
    } else {
        alert ('Please select a value');
    }
}
