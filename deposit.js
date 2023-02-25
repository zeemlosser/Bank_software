document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value
    const parseDepositAmount =parseFloat(depositAmount)
    depositInput.value = ''
    if(isNaN(parseDepositAmount)){
        alert('Please Enter A Valid Number')    
        return;
    } 
    const totalDeposit = document.getElementById('total-deposit')
    const total = totalDeposit.innerText;
    const parsetTotal = parseFloat(total)
    const currentDeposit = parseDepositAmount + parsetTotal
    
    totalDeposit.innerText = currentDeposit

    const balance = document.getElementById('balance')
    const newBalance =balance.innerText
    const parseNewBalance = parseFloat(newBalance)

    const totalBalance = parseNewBalance + parseDepositAmount
    balance.innerText = totalBalance




    
})