let searchImages = async (value) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        
        let data = await res.json();
        return data;   
    }
    catch(err){
        console.log(err)
    } 
}

let append = (data, container, ) =>{
    data.forEach((el) =>{
        let div = document.createElement("div")
      
        div.addEventListener("click", function () {
            myfunc(el);
          });

        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class", "img")
        let content = document.createElement("div")
        content.setAttribute("class", "content")


        

        let img = document.createElement("img")
        img.src = el.urlToImage;

        let p =  document.createElement("p")
        p.innerHTML = el.description;

        let tit = document.createElement("h3")
        tit.innerHTML = el.title; 

        imgDiv.appendChild(img)
        content.append(tit,p)

        

        div.append(imgDiv,content)
        container.append(div)
    })
}
function myfunc(el) {
    localStorage.setItem("news", JSON.stringify(el));
    window.location.href = "news.html";
    

  }
  
export { searchImages, append }