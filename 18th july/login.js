const username=document.getElementById('username');
const password=document.getElementById('password');
//for authentication if we have multiple users
function login(){
    fetch("http://localhost:3000/users",{
        method:'GET',
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);//i am getting 3 objects
        const user =data.find((element)=>element.username===username.value && element.password===password.value);
        //user will have the element which matches the condition
        console.log("User:",user);
        //if i have something in user i will generate a token and store it in LS
        if(user){
            const token=Date.now();
            localStorage.setItem('token',token);
            alert("Logged in Successfully");
            window.location.href='home.html';
        }
        else{
            alert("You are not a member please sign in");
            window.location.href='signup.html';
        }
    })
}