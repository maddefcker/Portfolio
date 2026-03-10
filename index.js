//funktion för att öppna window
function openWindow(iconId, windowId){
    const icon = document.getElementById(iconId);
    const window = document.getElementById(windowId);

    icon.addEventListener("dblclick",()=>{
        window.style.display = "block";
        window.classList.remove("hide"); //tar bort hide så att fönster går att öppna om & om igen efter de stängts
    })
}

//kalla på funkctionen
openWindow("iconContact","contact");
openWindow("iconAbout","about");
openWindow("iconProj","projects");
openWindow("iconMail","mail");

//fönster ej skapade ännu, lägg till senare

// openWindow("iconRef","references");
// openWindow("iconCV","cv");



//annan funktion för att stänga fönster
function closeWindow(buttonId,windowId){
    const btn = document.getElementById(buttonId);
    const window = document.getElementById(windowId);

    btn.addEventListener("click",()=>{
        window.classList.toggle("hide");
    })
}
//kalla på funktionen
closeWindow("btnAbout","about");
closeWindow("btnContact","contact");
closeWindow("btnProj","projects");
closeWindow("btnMail","mail");

//ej skapade ännu, lägg till senare
// closeWindow("btnReferences","references");
// closeWindow("btnCV","cv");


//funktion för att kunna dra runt alla olika windows
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