//openwindow funktion
document.querySelectorAll(".icon").forEach(icon =>{
    icon.addEventListener("dblclick",()=>{
        const windowId = icon.dataset.window;
        const window = document.getElementById(windowId);

        window.style.display = "block";
        window.classList.remove("hide");
    });
});


//closewindow function
document.querySelectorAll(".close").forEach(button=>{
    button.addEventListener("click",()=>{
        const window = button.closest(".window-container");
        window.classList.add("hide");
    });
});



//Funktion för att dra runt alla olika windows
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
}

