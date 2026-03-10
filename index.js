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


//lägg till id för resterande buttons & addera till funktionen