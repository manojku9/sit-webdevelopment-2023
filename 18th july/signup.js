const signupForm=document.getElementById('signupForm');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    //Create an object to hold the form data to send.
    const formData={
        //key in db:value by me
        username:username,
        email:email,
        password:password
    }
    
//Sending a POST request to the json server
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Sign Up Successful',data);
        window.location.href='login.html';
        //Handle successful response and redirectto login.html

    })
    .catch(error=>{
        console.log("error",error);
        //handle error
    })
    
})