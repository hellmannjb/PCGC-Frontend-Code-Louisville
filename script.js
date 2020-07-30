/*--- Turns on Hamburger Menu when Ham-Icon Clicked ---*/

function toggleClass(){
    let menu = document.querySelector(".desktop-nav");
    menu.classList.toggle("toggleCls");
}

/*--- Validates Selected TeeTime Date --- */

function validateForm(){
    var tTime = document.forms["teetime-form"]["Teetime_Date"].value;
    if (new Date() > new Date(tTime)){
        alert("Teetime must be booked at least one day in advance.");
    } else {
        alert("Teetime submitted, see you out on the course!")
    }
 }

    