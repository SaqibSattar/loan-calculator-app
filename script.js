document.getElementById('calculateBtn').addEventListener('click', calculateLoan);
document.getElementById('resetBtn').addEventListener('click', resetCalculator);

function calculateLoan() {
    console.log('reached')
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);
    const loanTermType = document.getElementById("loanTermType").value;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please Enter valid Numbers for all the Fields");
        return;
    }

    const totalPayments = (loanTermType === 'months') ? loanTerm : loanTerm * 12;
    const monthlyInterest = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function resetCalculator() {
    document.getElementById('loanAmountInput').value = '';
    document.getElementById('interestRateInput').value = '';
    document.getElementById('loanTermInput').value = '';
    document.getElementById('loanTermType').value = 'months';
    document.getElementById('result').innerHTML = `
        <p><strong>Monthly Payment: $0.00</strong></p>
        <p><strong>Total Interest: $0.00</strong></p>
    `;
}


function displayResult(monthlyPayment, totalInterst){

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Total Interest: ${totalInterst.toFixed(2)}</p></strong>
    `;
}

