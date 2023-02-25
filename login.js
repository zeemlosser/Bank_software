document.getElementById('submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    const passField = document.getElementById('user-pass')
    const email = emailField.value 
    const pass = passField.value 
    //console.log(email,pass)

    if (email === "fbmzeem@gmail.com" && pass === "Zeem0153@"){
        window.location.href = 'bank.html'
    }
    else{
      alert('vhul password disos motherchod')  
    }
})