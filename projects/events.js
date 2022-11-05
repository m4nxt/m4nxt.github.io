function cleanInfo () {
    document.getElementById("javascriptInfo").style.opacity = 0;
    document.getElementById("pythonInfo").style.opacity = 0;
    document.getElementById("javaInfo").style.opacity = 0;
}

function showJavascript() {
    cleanInfo();
    document.getElementById("javascriptInfo").style.opacity = 1;
}

function showJava() {
    cleanInfo();
    document.getElementById("javaInfo").style.opacity = 1;
}

function showPython() {
    cleanInfo();
    document.getElementById("pythonInfo").style.opacity = 1;
}

window.addEventListener('click', function(e){   // makes all infoItems invisible when clicking outside any of them
    if (
        !document.getElementById('infoGrid').contains(e.target)
        && !document.getElementById('langGrid').contains(e.target)
    ) {
      cleanInfo()
    } else{
        console.log("what")
    }
});