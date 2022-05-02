// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
import { sidebar } from "../components/sidebar.js";
import { searchImages, append } from "./fetch.js";

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('sidebar').innerHTML = sidebar();

let getData = async () =>{
    try{
        let list = ["in","us","ch","uk","nz"]
        const random = Math.floor(Math.random() * list.length);
        console.log(random, list[random]);
        // let con = document.getElementById('results').innerHTML=null
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${random, list[random]}`)
        
        let data = await res.json();
        let container = document.getElementById('results')
        console.log(data.articles)  
        append(data.articles, container)
    }
    catch(err){
        console.log(err)
    } 
}
getData()

// searchImages(value).then((data) =>{
//     console.log(data.articles)
//      let container = document.getElementById('results')
//      container.innerHTML= null;
//     append(data.articles, container)
//     // let value = document.getElementById('query').value="";

// });

let id;

let search = (e) =>{
    
    // if(e.key=== "Enter"){
        
        let value = document.getElementById('search_input').value;
        searchImages(value).then((data) =>{
            console.log(data.articles)
             let container = document.getElementById('results')
             container.innerHTML= null;
            append(data.articles, container)
            // let value = document.getElementById('query').value="";
            serachData(e)
        });
    // }
};

document.getElementById('search_input').addEventListener("input", debounce)
async function debounce(){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        search()
    },1000)
}
// let list = ["in","us","ch","uk","nz"]

let categories = document.getElementById("sidebar").children;

for(let el of categories){
    el.addEventListener('click', cSearch)
}
function cSearch(){
    
    // console.log(this.id);
    getData(this.id).then((data) =>{
         console.log(data)
         let container = document.getElementById('results')
         container.innerHTML= null;

        
        // let container = document.getElementById('results')
        // console.log(data.articles)  
      
        // append(data.articles, container)
    });
}



const serachData = async(e)=>{
    // let search = document.getElementById('search_input').value;
    if(e.key==="Enter")
    {
      let sv = document.getElementById('results').innerHTML;
      localStorage.setItem("search_term",sv)
      window.location.href="search.html"
    }
   }

   
// document.querySelector("#search_input").addEventListener("keydown", search);

// let url1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode} `;

