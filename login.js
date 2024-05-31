const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');

btn1.addEventListener('click', function(){
    window.location.href = 'splash.html'; 
    setTimeout( showLogin, 5000); 
    
});

// function showLogin(){
//     window.location.href ='home.html'; // replace with the desired URL
// }

btn2.addEventListener('click', function(){
   
    setTimeout( 5000)

    window.location.href = './splash.html'; 
    
});