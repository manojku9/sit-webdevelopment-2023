//creating a new Blog
const createBlog=document.getElementById('create-blog');
createBlog.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const givenTitle=document.getElementById('title').value;
    const givenDes=document.getElementById('description').value;
    //Create an object to hold the form data to send.
    const newBlog={
        //key in db:value by me
        title:givenTitle,
        description:givenDes,
    }
    
//Sending a POST request to the json server
    fetch("http://localhost:3000/blogs",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newBlog)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
      alert("Created a New Blog");
        //Handle successful response and redirectto login.html
    })
    .catch(error=>{
        console.log("error",error);
        //handle error
    })
    
})
function logout(){
    localStorage.removeItem('token');
    window.location.href='index.html';
}



//getting all the Blogs
const url="http://localhost:3000/blogs";
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
    const blogs=document.getElementById('blog-container');
    data.forEach(item=>{
        const title=document.createElement('h3');
        const body=document.createElement('p');
        const del=document.createElement('button');
        const edit=document.createElement('button');
        title.textContent=`Title:${item.title}`;
        body.textContent=`Description: ${item.description}`;
        edit.textContent="Edit Blog";
        del.textContent="Delete Blog";
        edit.addEventListener('click',()=>{
            handleEdit(item.id);
        });
        del.addEventListener('click',()=>{
            handleDelete(item.id);
        });
        blogs.append(title,body,edit,del);
    })
}
function handleEdit(id){
    // const url=`http://localhost:3000/blogs/${id}`;
    const newTitle=window.prompt("Enter the new title");
    const newDes=window.prompt("Enter the new description");
    const updatedData={
        title:newTitle,
        description:newDes
    };

    fetch(`http://localhost:3000/blogs/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(updatedData)
    })
    .then(response=>{
        if(response.ok){
            alert(`Blog with Id ${id} updated:`);
        }
        else{
            throw new Error('Error in updating the blog');
        }
    })
    .catch(error=>{
        console.log(error);
    })
}

function handleDelete(id){
    fetch(`http://localhost:3000/blogs/${id}`,{
        method:'DELETE'
    })
    .then(response=>{
        if(response.ok){
            alert(`Blog with Id ${id} deleted:`);
        }
        else{
            throw new Error('Error in deleting the blog');
        }
    })
    .catch(error=>{
        console.log(error);
    })
}
   
