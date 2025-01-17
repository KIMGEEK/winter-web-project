function getColor() {
    const colorList = document.getElementsByClassName('form-check-input');

    for (var i = 0; i < count; i++) {
        if (colorList[i].checked) {
            console.log('선택된 색상', colorList[i].value);
            return colorList[i].value;
        }
    }
};

function addMessage() {
            // Get the input element
            const input = document.getElementById('messageInput');
            const messageText = input.value.trim();

            // Check if the message is not empty
            if (messageText !== '') {
                // Create a new message element
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.textContent = messageText;

                // Get the message board
                const messageBoard = document.getElementById('messageBoard');

                // Add the new message at the top of the board
                messageBoard.insertBefore(messageElement, messageBoard.firstChild);

                // Clear the input field
                input.value = '';
            }

            // Return focus to input field
            input.focus();
        }