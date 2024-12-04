document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueByID('add-money-input');
    const pinNumber = getInputFieldValueByID('case-in-pin-input');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    if(pinNumber === 1234){
        const currentBalance = getTextFieldValueByID('current-balance');
        const updatedBalance = currentBalance + addMoney;

        document.getElementById('current-balance').innerText = updatedBalance;

        // transaction history

        // const p = document.createElement('p');
        // p.innerText = `Cash In Value ${addMoney} Tk. New Balance is ${updatedBalance}`;

        const div = document.createElement('div');
        div.classList.add("bg-green-200");
        div.classList.add('p-5');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>Cash In Value ${addMoney} Tk. New Balance is ${updatedBalance}</p>
        `

        document.getElementById("transaction-container").appendChild(div);

    }
    else{
        alert("Failed to add money. Try again later");
    }
});