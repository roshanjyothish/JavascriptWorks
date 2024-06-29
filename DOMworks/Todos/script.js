// fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))

getData()

async function getData(){

    let response=await fetch("https://jsonplaceholder.typicode.com/todos")

    let data=await response.json()

    displayTodos(data)
}

displayTodos(todos)

function displayTodos(todos){

    let htmlData=``

    for(let t of todos){

        htmlData+=`<div class="col-4">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">User ${t.userId}</h5>
    <h5 class="card-title">${t.id}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${t.title}</h6>
    <p class="card-text">${t.completed}</p>
  </div>
</div>
            </div>`
    }

    document.querySelector("#root").innerHTML=htmlData
}