var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

async function foo(){
    let res=await fetch("https://api.chucknorris.io/jokes/random"); 
    let data=await res.json();
    console.log(data);
    return bar(data);
}  
foo();

function bar(data){
        row.innerHTML=`
        <div class="col-md-4">
        <div class = "card">
        <div class="card border-secondary mb-3 bg-transparent" style="max-width: 18rem;">
        <div class="card-body  ">
        <p class="card-text">${data.value}</p>
        </div>
      </div>
      </div>
      </div>
      `;
      document.body.append(container);
}