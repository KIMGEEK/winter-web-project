function getColor() {
    const colorList = document.getElementsByClassName('form-check-input');

    var count = colorList.length;

    console.log('라디오버튼 개수', count);

    for (var i = 0; i < count; i++) {
        if (colorList[i].checked) {
            console.log('선택된 색상', colorList[i].value);
            return colorList[i].value;
        }
        
    }
};