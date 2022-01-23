function fn(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onload = function(){
        if(this.status === 200){
            var link = JSON.parse(this.responseText);
            var str = ""
            link.forEach((data,index) =>{
                str += `
                     <li class="list-group-item">
                     <h5 class="card-title">${data.name}</h5>
                     <p class="card-text">${data.email}</p>
                     <p class="card-text">${data.phone}</p>
                     <p class="card-text">${data.website}</p>
                     <a class="btn btn-primary" onclick="handleClick(this,'${data.id}')">DELETE</a>
                     </li>`;
            })
           
        }
        document.getElementById("test").innerHTML=str;
    }
    xhttp.send();
}
fn();


function handleClick(param, id) {
    console.log('log')
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "https://jsonplaceholder.typicode.com/users/id", true );
    xhttp.send();
    xhttp.onload = function() {
        if(this.status === 200) {
            param.parentElement.remove()
        }
    }
    
    
}