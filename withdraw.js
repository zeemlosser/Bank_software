document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const stringWithdraw =withdrawInput.value 
    parsewithdraw = parseFloat(stringWithdraw)
    withdrawInput.value = ''
    if(isNaN(parsewithdraw)){
        alert("please enter valid amount")
        return;
    }

    const totalWithdraw = document.getElementById('total-withdraw')
    const stringTotalWithdraw = totalWithdraw.innerText
    const parsetotalWithdraw = parseFloat(stringTotalWithdraw)
    
    const balance = document.getElementById('balance')
    const innerBalance = balance.innerText
    const parsebalance = parseFloat(innerBalance)
    
    if(parsewithdraw > parsebalance){
        alert("Insufficiant Balance!!")
        return;
    }

    const addWithdraw = parsetotalWithdraw + parsewithdraw
    totalWithdraw.innerText = addWithdraw

    const totalBalance = parsebalance - parsewithdraw
    balance.innerText = totalBalance
    
   


    
})