/**function galeriaImagenesSiguiente (){
    if (document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach.jpg") {
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    }else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach2.jpg"){
                document.body.children[1].children[0].src = "./img/beach3.jpg"
    }else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach3.jpg"){
                document.body.children[1].children[0].src = "./img/beach.jpg"
    } else {
            console.log("Error")
    }
}

function galeriaImagenesAnterior(){
    if (document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach.jpg") {
        document.body.children[1].children[0].src = "./img/beach3.jpg"
    } else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach2.jpg"){
        document.body.children[1].children[0].src = "./img/beach.jpg"
    } else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach3.jpg"){
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    } else {
        console.log("Error")
    }
}

function galeriaAuto(){
    if (document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach.jpg") {
       document.body.children[1].children[0].src = "./img/beach2.jpg"
    }else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach2.jpg"){
        document.body.children[1].children[0].src = "./img/beach3.jpg"
    }else if(document.body.children[1].children[0].src == "https://icallejac.github.io/zankasmx/img/beach3.jpg"){
        document.body.children[1].children[0].src = "./img/beach.jpg"
    }else {
        console.log("Error")
    }
}*/

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

