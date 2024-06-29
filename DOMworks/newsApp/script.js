const APIKEY="457d2ca7922048768a4a1d49389ef145"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`

// fetch(url).then(res=>res.json()).then(data=>displayNews(data))

getData()47/\

async function getData(){

    let resp=await fetch(url)

    let data=await resp.json()

    displayNews(data)
}


displayNews(news)  

const categories=["business","entertainment","general","health","science","sports","technology"]

function displayNews(news){

    let htmlData=``

    for( let n of news.articles){

        htmlData+=`<div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${n.author}</p>
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
        <p class="card-text">${n.content}</p>
      </div>
    </div>
  </div>`
    }

    document.querySelector("#root").innerHTML=htmlData
}      



displayCategories(categories)

function displayCategories(categories){

    let htmlData=``

    for(let c of categories){

        htmlData+=`<button value="${c}" class="btn btn-outline-success">${c}</button>`
    }

    document.querySelector("#category").innerHTML=htmlData
}


function fetchNewsByCategory(event){

    let categoryName=event.targrt.value

    fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data))
}