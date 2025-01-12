async function searchBirth() {
    var input_num = document.getElementById("selected").value;
    if(input_num < 1 || input_num > 5) {
        alert("존재하지 않음");
        return;
    } else if (input_num >= 1 && input_num <= 5){
        await fetch("https://my-json-server.typicode.com/yanghaemi/json_placeholder/"+input_num)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const html = createHTMLUserBirth(data);
            document.getElementById("result").innerHTML = html;
        });
        return;
    } else {
        const response = await fetch("https://my-json-server.typicode.com/yanghaemi/json_placeholder/db")
        const data = await response.json();
        console.log(data);
        switch(input_num) {
            case '양해미':  // if (input_num === '양해미')
                result = data["1"];
                break;
            case '송영은':  // if (input_num === '송영은')
                result = data["2"];
                break;
            case '강지웅':  // if (input_num === '강지웅')
                result = data["3"];
                break;
            case '오현지':  // if (input_num === '오현지')
                result = data["4"];
                break;
            case '윤정섭':  // if (input_num === '윤정섭')
                result = data["5"];
                break;
            default:
                result = [];
                break;
          }
        console.log(result);
        if(result.length === 0) {
            alert("존재하지 않음");
            return;
        }
        const html = createHTMLUserBirth(result);
        document.getElementById("result").innerHTML = html;
    }
}

function createHTMLUserBirth(item) {
    return `
    <p>${item.name}님의 생일은 ${item.month}월 ${item.day}일</p>`
}