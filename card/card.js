async function fn(){
    const link = await fetch("https://jsonplaceholder.typicode.com/users");
    var set = await link.json();
        var temp = "";
        set.forEach(function(data,index){
            temp +=  `
            <div class="col" id="demo">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynHfBuLHkLUNPZFkIHShI0Z4NL2-h-wC76Q&usqp=CAU" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.email}</p>
            <p class="card-text">${data.phone}</p>
            <p class="card-text">${data.website}</p>
            <a class="btn btn-primary" onclick="myFunction()">DELETE</a>
            </div>
            </div>
            </div>
            `;
        })
        document.getElementById("test").innerHTML = temp;  
}
fn();
function myFunction() {
    document.getElementById("demo").remove();
}

