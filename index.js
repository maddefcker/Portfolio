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
openWindow("iconTrash","bin");
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
closeWindow("btnBin","bin");
closeWindow("btnMeow","meow");

//funktion för att kunna dra runt alla olika windows - fungerar bara på aboutme
 let draggableElement = document.getElementById("about")

let offsetX, offsetY;

draggableElement.addEventListener("mousedown",startDragging);
draggableElement.addEventListener("mouseup", stopDragging);

function startDragging(e){
    e.preventDefault();
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
    draggableElement.classList.add("dragging");
    document.addEventListener("mousemove",dragElement);
}

function dragElement(e){
    e.preventDefault();
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    draggableElement.style.left = x + "px";
    draggableElement.style.top = y + "px";
}

function stopDragging(){
    draggableElement.classList.remove("dragging");
    document.removeEventListener("mousemove",dragElement);
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

//funktion för att ladda ner CV om man klickar på "yes"
