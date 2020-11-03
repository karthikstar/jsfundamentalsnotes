// Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show Loader 

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000); // calculateresults after 2s

    

    e.preventDefault(); // prevent default behaviour of form 

})

// Calculate Results 

function calculateResults(){
    

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

        totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2);
        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide Loader
        document.getElementById('loading').style.display = 'none';


    } else{
        showError('Please check your numbers');
    }

    
}

// Show Werror
function showError(error){

    // hide results
    document.getElementById('results').style.display = 'none';

    // Hide Loader
    document.getElementById('loading').style.display = 'none';

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