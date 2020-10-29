// Listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults)

// Calculate Results 

function calculateResults(e){
    

    // UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    // Compute Monthly payment

    const x = Math.pow(1+calculatedInterest, calculatedPayments);

    const monthly = (principal*x*calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2); // set to 2 d.p
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);

        totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2)
    } else{
        showError('Please check your numbers');
    }

    e.preventDefault(); // prevent default behaviour of form 
    
}

// Show Werror
function showError(error){
    // create a div
    const errorDiv = document.createElement('div');
    // get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading 
    card.insertBefore(errorDiv, heading); // insert error div before heading

    // clear error after 3 seconds 
    setTimeout(clearError,3000); // 3000ms = 3s


}

// Clear error

function clearError(){
    document.querySelector('.alert').remove();
}