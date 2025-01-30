function galeriaImagenes (){
    if (document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach.jpg") {
        console.log("Entro a la 2")
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    }else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach2.jpg"){
            console.log("Entro a la 3")
            document.body.children[1].children[0].src = "./img/beach3.jpg"
    }else if(document.body.children[1].children[0].src == "file:///Users/1033263/Documents/Develoments/zankasmx/img/beach3.jpg"){
            console.log("Console 1")
            document.body.children[1].children[0].src = "./img/beach.jpg"
    } else {
        console.log("Entro else")
        document.body.children[1].children[0].src = "./img/beach2.jpg"
    }
}

    