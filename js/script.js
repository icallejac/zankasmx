function galeriaAuto(){
    if (document.getElementById("gauto").src == "https://icallejac.github.io/zankasmx/img/beach.jpg") {
        document.getElementById("gauto").src = "./img/beach2.jpg"
    }else if(document.getElementById("gauto").src == "https://icallejac.github.io/zankasmx/img/beach2.jpg"){
        document.getElementById("gauto").src = "./img/beach3.jpg"
    }else if(document.getElementById("gauto").src == "https://icallejac.github.io/zankasmx/img/beach3.jpg"){
        document.getElementById("gauto").src = "./img/beach.jpg"
    }else {
        console.log("Error")
    }
}

setInterval(galeriaAuto, 5000)

