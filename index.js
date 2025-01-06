async function searchBirth() {
    var input_num = document.getElementById("selected").value;
    if(input_num < 1 || input_num > 5) {
        alert("존재하지 않음");
        return;
    } else if (input_num >= 1 && input_num <= 5){
        await fetch("https://my-json-server.typicode.com/yanghaemi/json_placeholder/"+input_num)
        .then((response) => response.json())
        .then((data) => {
            const html = createHTMLUserBirth(data);
            document.getElementById("result").innerHTML = html;
        });
        return;
    }
}

function createHTMLUserBirth(item) {
    return `
    <p>${item.name}님의 생일은 ${item.month}월 ${item.day}일</p>`
}