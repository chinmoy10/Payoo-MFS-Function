document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const withdrawMoney = getInputFieldValueByID('case-out-money-input');
    const pinNumber = getInputFieldValueByID('case-out-pin-input');

    if(isNaN(withdrawMoney)){
        alert('Failed to withdraw money');
        return;
    }

    if(pinNumber === 1234){
        const currentBalance = getTextFieldValueByID('current-balance');
        
        if(withdrawMoney > currentBalance){
            alert('You do not have enough balance to cash out');
            return;
        }

        const updatedBalance = currentBalance - withdrawMoney;

        document.getElementById('current-balance').innerText = updatedBalance;

        // add transaction history

        const div = document.createElement('div');
        div.classList.add("bg-red-200");
        div.classList.add('p-5');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>Cash Out Value ${withdrawMoney} Tk. New Balance is ${updatedBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert("Failed to withdraw money. Try again later");
    }
});