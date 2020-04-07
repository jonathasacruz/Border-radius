let link;

function borderSetLink(){
   link = true;
   updateBorderRadius();
}

function borderUnlink(){
   link = false;
   updateBorderRadius();
}

function tlBorderSet(){
    if (link === true) {
        document.getElementById("tr").value = document.getElementById("tl").value;
        document.getElementById("bl").value = document.getElementById("tl").value;
        document.getElementById("br").value = document.getElementById("tl").value;
   }
   updateBorderRadius();
}

function updateBorderRadius(){
    let tl, tr, bl, br;
    tl = document.getElementById("tl").value + "%";
    tr = document.getElementById("tr").value + "%";
    bl = document.getElementById("bl").value + "%";
    br = document.getElementById("br").value + "%";
    document.getElementById("border-box").style.borderTopLeftRadius = tl;
    document.getElementById("border-box").style.borderTopRightRadius = tr;
    document.getElementById("border-box").style.borderBottomLeftRadius = bl;
    document.getElementById("border-box").style.borderBottomRightRadius = br;
}