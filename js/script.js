function galeriaImagenesSiguiente (){
    if (document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach.jpg") {
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    }else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach2.jpg"){
                document.body.children[1].children[0].src = "./img/beach3.jpg"
    }else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach3.jpg"){
                document.body.children[1].children[0].src = "./img/beach.jpg"
    } else {
                console.log("Error")
    }
}

function galeriaImagenesAnterior(){
    if (document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach.jpg") {
        document.body.children[1].children[0].src = "./img/beach3.jpg"
    } else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach2.jpg"){
        document.body.children[1].children[0].src = "./img/beach.jpg"
    } else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach3.jpg"){
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    } else {
        console.log("Error")
    }
}

function galeriaImagenesAuto(){
    
}