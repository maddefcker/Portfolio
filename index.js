//för att öppna flik/window
const iconImage = document.querySelector(".icon-container img");
const windowElement = document.querySelector(".window-container");

iconImage.addEventListener("dblclick",()=>{
    windowElement.style.display = "block"
});


//funktion för att stänga flik/window