function loadHTML(id, filename){
    let xhttp;
    let element = document.getElementById(id)
    let file = filename;

    
    element.innerHTML = '<object data="./includes/navbar.html">'
    console.log('test')
    /*
    if(file){
        console.log("test")

        xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    element.innerHTML = this.responseText
                }
                if(this.status == 404){
                    element.innerHTML = "<h1>404 Not found</h1>"
                }
            }
            xhttp.open("GET", `./includes/${file}`, true)
            xhttp.send()
            return
        }
    }
    */

}