
// Add event listener to the submitted button
document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the page from not loading
    generateMealPlan(); // called function to generate the meal plan 
});


function generateMealPlan() {
    // Retrieve user input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let goal = document.getElementById('goal').value;

    // Created an object to store the meals for each day
    let meals = {
        Monday: {
            breakfast: document.getElementById('breakfastMonday').value,
            snack1: document.getElementById('snack1Monday').value,
            lunch: document.getElementById('lunchMonday').value,
            snack2: document.getElementById('snack2Monday').value,
            dinner: document.getElementById('dinnerMonday').value
        },
        Tuesday: {
            breakfast: document.getElementById('breakfastTuesday').value,
            snack1: document.getElementById('snack1Tuesday').value,
            lunch: document.getElementById('lunchTuesday').value,
            snack2: document.getElementById('snack2Tuesday').value,
            dinner: document.getElementById('dinnerTuesday').value
        },
        Wednesday: {
            breakfast: document.getElementById('breakfastWednesday').value,
            snack1: document.getElementById('snack1Wednesday').value,
            lunch: document.getElementById('lunchWednesday').value,
            snack2: document.getElementById('snack2Wednesday').value,
            dinner: document.getElementById('dinnerWednesday').value
        },
        Thursday: {
            breakfast: document.getElementById('breakfastThursday').value,
            snack1: document.getElementById('snack1Thursday').value,
            lunch: document.getElementById('lunchThursday').value,
            snack2: document.getElementById('snack2Thursday').value,
            dinner: document.getElementById('dinnerThursday').value
        },
        Friday: {
            breakfast: document.getElementById('breakfastFriday').value,
            snack1: document.getElementById('snack1Friday').value,
            lunch: document.getElementById('lunchFriday').value,
            snack2: document.getElementById('snack2Friday').value,
            dinner: document.getElementById('dinnerFriday').value
        },
        Saturday: {
            breakfast: document.getElementById('breakfastSaturday').value,
            snack1: document.getElementById('snack1Saturday').value,
            lunch: document.getElementById('lunchSaturday').value,
            snack2: document.getElementById('snack2Saturday').value,
            dinner: document.getElementById('dinnerSaturday').value
        },
        Sunday: {
            breakfast: document.getElementById('breakfastSunday').value,
            snack1: document.getElementById('snack1Sunday').value,
            lunch: document.getElementById('lunchSunday').value,
            snack2: document.getElementById('snack2Sunday').value,
            dinner: document.getElementById('dinnerSunday').value
        }
    };

    // making sure we Validate the email address
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Create a new window for the meal plan
    let mealPlanWindow = window.open("about:blank", 'myPop', 'width=400,height=200,left=200,top=200');
    mealPlanWindow.document.write(`
        <html>
        <head>
            <title>Meal Plan</title>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <h2>Goal for the Week: ${goal}</h2>
            <h3>Monday</h3>
            <p>Breakfast: ${meals.Monday.breakfast}</p>
            <p>Snack 1: ${meals.Monday.snack1}</p>
            <p>Lunch: ${meals.Monday.lunch}</p>
            <p>Snack 2: ${meals.Monday.snack2}</p>
            <p>Dinner: ${meals.Monday.dinner}</p>

            <h3>Tuesday</h3>
            <p>Breakfast: ${meals.Tuesday.breakfast}</p>
            <p>Snack 1: ${meals.Tuesday.snack1}</p>
            <p>Lunch: ${meals.Tuesday.lunch}</p>
            <p>Snack 2: ${meals.Tuesday.snack2}</p>
            <p>Dinner: ${meals.Tuesday.dinner}</p>

            <h3>Wednesday</h3>
            <p>Breakfast: ${meals.Wednesday.breakfast}</p>
            <p>Snack 1: ${meals.Wednesday.snack1}</p>
            <p>Lunch: ${meals.Wednesday.lunch}</p>
            <p>Snack 2: ${meals.Wednesday.snack2}</p>
            <p>Dinner: ${meals.Wednesday.dinner}</p>

            <h3>Thursday</h3>
            <p>Breakfast: ${meals.Thursday.breakfast}</p>
            <p>Snack 1: ${meals.Thursday.snack1}</p>
            <p>Lunch: ${meals.Thursday.lunch}</p>
            <p>Snack 2: ${meals.Thursday.snack2}</p>
            <p>Dinner: ${meals.Thursday.dinner}</p>

            <h3>Friday</h3>
            <p>Breakfast: ${meals.Friday.breakfast}</p>
            <p>Snack 1: ${meals.Friday.snack1}</p>
            <p>Lunch: ${meals.Friday.lunch}</p>
            <p>Snack 2: ${meals.Friday.snack2}</p>
            <p>Dinner: ${meals.Friday.dinner}</p>

            <h3>Saturday</h3>
            <p>Breakfast: ${meals.Saturday.breakfast}</p>
            <p>Snack 1: ${meals.Saturday.snack1}</p>
            <p>Lunch: ${meals.Saturday.lunch}</p>
            <p>Snack 2: ${meals.Saturday.snack2}</p>
            <p>Dinner: ${meals.Saturday.dinner}</p>

            <h3>Sunday</h3>
            <p>Breakfast: ${meals.Sunday.breakfast}</p>
            <p>Snack 1: ${meals.Sunday.snack1}</p>
            <p>Lunch: ${meals.Sunday.lunch}</p>
            <p>Snack 2: ${meals.Sunday.snack2}</p>
            <p>Dinner: ${meals.Sunday.dinner}</p>
        </body>
        </html>
    `);
    mealPlanWindow.document.close();
}

// Function to validate email address
function validateEmail(email) {
    // Simple email validation regex pattern
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
