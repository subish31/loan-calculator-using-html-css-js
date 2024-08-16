document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('total-payment').textContent = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('monthly-payment').textContent = monthly.toFixed(2);
        document.getElementById('total-interest').textContent = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        alert('Please check your numbers');
    }
});
