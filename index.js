//funktion för att öppna window
function openWindow(iconId, windowId){
    const icon = document.getElementById(iconId);
    const window = document.getElementById(windowId);

    icon.addEventListener("dblclick",()=>{
        window.style.display = "block";
        window.classList.remove("hide"); 
    })
}

//kalla på funkctionen - öppna fönster
openWindow("iconContact","contact");
openWindow("iconAbout","about");
openWindow("iconProj","projects");
openWindow("iconMail","mail");
openWindow("iconTech","techstack");
openWindow("iconRef","references");
openWindow("iconTrash","trashcan");
openWindow("iconMeow","meow");

//funktion för att stänga fönster
function closeWindow(buttonId,windowId){
    const btn = document.getElementById(buttonId);
    const window = document.getElementById(windowId);

    btn.addEventListener("click",()=>{
        window.classList.toggle("hide");
    })
}
//kalla på funktionen - stäng ner fönster
closeWindow("btnAbout","about");
closeWindow("btnContact","contact");
closeWindow("btnProj","projects");
closeWindow("btnMail","mail");
closeWindow("btnTech","techstack");
closeWindow("btnRef","references");
closeWindow("btnTrash","trashcan");
closeWindow("btnMeow","meow");

//funktion för nav-bar - öppna fönster
function navOpen(buttonId,windowId){
    const window = document.getElementById(windowId);
    const nav = document.getElementById(buttonId);

    nav.addEventListener("click",()=>{
        window.style.display = "block";
        window.classList.remove("hide");
    })
}

//kalla på funktionen för nav
navOpen("navAbout","about");
navOpen("navContact","contact");
navOpen("navProj","projects");
navOpen("navEmail","mail");
navOpen("navRef","references");
navOpen("navTech","techstack");

//funktion för att kunna dra runt alla olika windows - fungerar bara på aboutme

//NY TEST FUNKTION
 let draggableElement = document.querySelectorAll(".window-container").forEach(el =>{
    makeDraggable(el);
 });
function makeDraggable(draggableElement){

let offsetX, offsetY;

draggableElement.addEventListener("mousedown", startDragging);
draggableElement.addEventListener("mouseup", stopDragging);

function startDragging(e){

  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

  document.addEventListener("mousemove", dragElement);
}

function dragElement(e){

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  draggableElement.style.left = x + "px";
  draggableElement.style.top = y + "px";
}

function stopDragging(){
  document.removeEventListener("mousemove", dragElement);
}
}

//GAMMAL FUNKTION
//  let draggableElement = document.getElementById("about")
// let offsetX, offsetY;

// draggableElement.addEventListener("mousedown",startDragging);
// draggableElement.addEventListener("mouseup", stopDragging);

// function startDragging(e){
//     e.preventDefault();
//     offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
//     offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
//     draggableElement.classList.add("dragging");
//     document.addEventListener("mousemove",dragElement);
// }

// function dragElement(e){
//     e.preventDefault();
//     let x = e.clientX - offsetX;
//     let y = e.clientY - offsetY;
//     draggableElement.style.left = x + "px";
//     draggableElement.style.top = y + "px";
// }

// function stopDragging(){
//     draggableElement.classList.remove("dragging");
//     document.removeEventListener("mousemove",dragElement);
// }


//funktion för popup-window CV
function popup(buttonId,popupId){
    const cv = document.getElementById(buttonId);
    const popupwindow = document.getElementById(popupId);

    cv.addEventListener("click",()=>{
        popupwindow.style.display="block";
        popupwindow.classList.remove("hide");
    })
}

//kalla på funktionen - popup cv
popup("btnCV","cv");

//funktion för att stänga popup-fönstret
function closePopup(buttonId, popupId){
    const cancel = document.getElementById(buttonId);
    const popupwindow = document.getElementById(popupId);

    cancel.addEventListener("click",()=>{
        popupwindow.classList.toggle("hide");
    })
}

//kalla på funktionen
closePopup("cancel","cv");


//Väder-API
const apiKey ='f93e6b4c871724ed933a2c8d81f40439';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const locationInput = document.getElementById("locationInput");
// const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

const weatherIcon = document.getElementById("weatherIcon");

weatherIcon.addEventListener("click",()=>{
    fetchWeather(location);
})

function fetchWeather(){
    const url = `${apiUrl}?q=Norrtälje&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
            descriptionElement.textContent = data.weather[0].description;
        })

        // .catch(error =>{
        //     console.error("Error fetching weather data", error);
        // });
}

