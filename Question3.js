function changeRange(){
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    //Generate color
     var color = "#" + hex(r) + hex(g) +hex(b);
    //Change background color and text
    document.body.style.backgroundColor = color;
    document.getElementById("hex-label").innerText = color;
    document.getElementById("r-label").innerText = r;
    document.getElementById("g-label").innerText = g;
    document.getElementById("b-label").innerText = b;

    if(r < 180 && g < 180 && b<180){
        document.getElementById("container").style.color="white";
        document.getElementById("hex-label").style.color="white";

    }
    else{
        document.getElementById("container").style.color="black";
        document.getElementById("hex-label").style.color="black";

    }


}
function hex(v){
    let hex = v.toString(16);
    if(v < 16){
        hex = "0" + hex;
    }
    return hex;
}

r.addEventListener("click",changeRange);
g.addEventListener("click",changeRange);
b.addEventListener("click",changeRange);

/* function convertToHex(v){

}

function convertToRGB(){

} */