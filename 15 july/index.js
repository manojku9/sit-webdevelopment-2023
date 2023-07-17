const url="http://localhost:3000/users";
// fetch(url) //by default your fecth will always have a GET method
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
//     displayData(data);
// })
// .catch(error=>{
//     console.log(error);
// })

// function displayData(data){
//     const container=document.getElementById("container");
//     data.forEach(item=>{
//         const itemElement=document.createElement('p');
//         itemElement.textContent=`Name: ${item.name}, Email:${item.email}`;
//         container.appendChild(itemElement);
//     })

// }

//POST-CREATE->new data push

const newUser={
    name:"priyanshu",
    email:"priyanshu@gmail.com"
}
fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(newUser)
})
.then(response=>response.json())
.then(data=>{
    console.log("New data Created:",data);
})
.catch(error=>{
    console.log(error);
})