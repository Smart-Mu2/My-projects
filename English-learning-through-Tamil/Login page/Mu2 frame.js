function sample(){
    var passw = document.getElementById("pass").value;
    if (passw == 'SmartMu2') {
        document.getElementById("overlay1").style.display = "block";
        document.getElementById("popup2").style.display = "block";
        
    }
    else {
        document.getElementById("popup1").style.display = "block";
        document.getElementById("overlay1").style.display = "block";
        // popup.style.display="block";
        // overlay.style.display="block";

    }
}