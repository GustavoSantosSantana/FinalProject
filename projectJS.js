function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const mealTypes = ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let mealPlanHTML = '<h2>Meal Plan</h2>';
    days.forEach(day => {
        mealPlanHTML += `<h3>${day}</h3>`;
        mealTypes.forEach(type => {
            mealPlanHTML += `<div><strong>${type}:</strong> <input type="text" id="${day}-${type}"></div>`;
        });
    });

    const mealPlanInputs = document.getElementById('mealPlanInputs');
    mealPlanInputs.innerHTML = mealPlanHTML;
}

function clearMealPlan() {
    document.getElementById('mealPlanForm').reset();
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
