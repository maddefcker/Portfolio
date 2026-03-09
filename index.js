//GAMMAL -för att öppna flik/window
// const iconImage = document.querySelector(".icon-container img");
// const windowElement = document.querySelector(".window-container");

// iconImage.addEventListener("dblclick",()=>{
//     windowElement.style.display = "block"
// });


//funktion för att öppna window
function openWindow(iconId, windowId){
    const icon = document.getElementById(iconId);
    const window = document.getElementById(windowId);

    icon.addEventListener("dblclick",()=>{
        window.style.display = "block";
    })
}

//kalla på funkctionen
openWindow("iconContact","contact");
openWindow("iconAbout","about");
openWindow("iconProj","projects");


//fönster ej skapade ännu, lägg till senare

// openWindow("iconMail","mail");
// openWindow("iconRef","references");
// openWindow("iconCV","cv");


//funktion för att stänga flik/window
// function closeWindow(closeClass, windowClass){
// const closeBtn = document.querySelector("."+"closeClass");
// const windowEl = document.querySelector("."+"windowClass");

// closeBtn.addEventListener("click",()=>{
//     windowEl.classList.toggle("hide");
// })
// };

//kalla på funktionen
// closeWindow("close","window-container");

document.querySelectorAll(".close").forEach(btn=>{
    btn.addEventListener("click",()=>{
        btn.closest(".window-container").classList.add("hide");
    });
});