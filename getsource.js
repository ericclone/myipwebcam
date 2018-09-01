var url = "https://raw.githubusercontent.com/ericclone/myipwebcam/master/sources.json"

var ajax = new XMLHttpRequest();
ajax.open("GET", url, true);
ajax.send(null);
ajax.onreadystatechange = function () {

     if (ajax.readyState == 4 && (ajax.status == 200)) {

        console.log("ready")            
        var dict = JSON.parse(ajax.responseText);
//         var top = dict.top;
        var bottom = dict.bottom;
//         document.getElementById("iftop").src = "http://" + top + ":8080/browserfs.html";
        document.getElementById("ifbottom").src = "http://" + bottom + ":8080/browserfs.html";
//         document.getElementById("btntop").href = "http://" + top + ":8080";
        document.getElementById("btnbottom").href = "http://" + bottom + ":8080";
    } else {
        console.log("not ready yet")            
    }
}
