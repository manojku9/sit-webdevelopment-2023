const url="http://localhost:3000/users";
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    displayData(data);
})
.catch(error=>{
    console.log(error);
})

function displayData(data){
    const container=document.getElementById("container");
    data.forEach(item=>{
        const itemElement=document.createElement('p');
        itemElement.textContent=`Name: ${item.name}, Email:${item.email}`;
        container.appendChild(itemElement);
    })
}