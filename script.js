var link;

function borderSetLink(){
   link = true;
}

function borderUnlink(){
   link = false;
}

function tlBorderSet(){
    if (link === true) {
        document.getElementById("tr").value = this.document.getElementById("tl").value;
        document.getElementById("bl").value = this.document.getElementById("tl").value;
        document.getElementById("br").value = this.document.getElementById("tl").value;
    }
}