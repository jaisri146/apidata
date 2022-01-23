function fn(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onload = function(){
        if(this.status === 200){
            var link = JSON.parse(this.responseText);
            var str = ""
            link.forEach((data,index) =>{
                str += `
                     <tr>
                     <td>${data.name}</td>
                     <td>${data.email}</td>
                     <td>${data.phone}</td>
                     <td>${data.website}</td>
                     <td><a class="btn btn-primary" onclick="fun()">DELETE</a></td>
                     </tr>`;
            })
           
        }
        document.getElementById("test").innerHTML=str;
    }
    xhttp.send();
}
fn();

function fun(){
    document.getElementById("test").deleteRow(0);
}
