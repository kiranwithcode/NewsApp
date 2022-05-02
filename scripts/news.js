// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();


let x = JSON.parse(localStorage.getItem("news"));
let container = document.getElementById("detailed_news");

// console.log(x)


let mDiv = document.createElement("div");

let iDiv = document.createElement("div");
let image = document.createElement("img");
image.setAttribute("class","imgsearch")
image.src = x.urlToImage;
iDiv.append(image);

let ti = document.createElement("div");
let title = document.createElement("h3");
title.innerText = x.title;
let cont = document.createElement("p");
cont.innerText = x.description;
ti.append(title, cont);

mDiv.append(iDiv, ti);
container.append(mDiv);




