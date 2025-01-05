function searchBirth() {
    if(document.getElementById("selected").value < 1 || document.getElementById("selected").value > 5) {
        alert("존재하지 않음");
        return;
    }
    
    alert(document.getElementById("selected").value);
    //fetch("https://my-json-server.typicode.com/yanghaemi/json_placeholder/3")
    //.then((response) => response.json())
    //.then((data) => console.log(data));
}