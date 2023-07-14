// Function to generate the meal plan and create a new web page
function generateMealPlan() {
    // Retrieve user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
    var meals = [
        document.getElementById('breakfast').value,
        document.getElementById('snack1').value,
        document.getElementById('lunch').value,
        document.getElementById('snack2').value,
        document.getElementById('dinner').value
    ];

    // Validate email address
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Create a new window for the meal plan
    var mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write('<html>

        < head >
        <title>Meal Plan</title>
</head >

        <body>');

            // Write the meal plan content
            mealPlanWindow.document.write('<h1>Meal Plan for ' + name + '</h1>');
            mealPlanWindow.document.write('<h2>Goal for the Week: ' + goal + '</h2>');
            mealPlanWindow.document.write('<h3>Monday</h3>');
            mealPlanWindow.document.write('<p>Breakfast: ' + meals[0] + '</p>');
            mealPlanWindow.document.write('<p>Snack: ' + meals[1] + '</p>');
            mealPlanWindow.document.write('<p>Lunch: ' + meals[2] + '</p>');
            mealPlanWindow.document.write('<p>Snack: ' + meals[3] + '</p>');
            mealPlanWindow.document.write('<p>Dinner: ' + meals[4] + '</p>');

            // Write the rest of the week's meal plan here...

            mealPlanWindow.document.write('</body>

</html > ');
mealPlanWindow.document.close();
}

// Function to validate email address
function validateEmail(email) {
    // Simple email validation regex pattern
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}