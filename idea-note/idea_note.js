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

    const selectedColor = document.querySelector('input[name="headerColor"]:checked').value;
    const headerClass = selectedColor === 'pink' ? 'bg-danger bg-opacity-25' : 'bg-secondary bg-opacity-25';

    // Check if the message is not empty
    if (messageText !== '') {
        const messageHTML = `
        <div class="card mb-3 shadow-sm">
            <div class="card-header ${headerClass}">
                <div class="text-muted">
                            Posted by ${getCurrentUser()} at ${formatDateTime()} (Seoul Time)
                        </div>
            </div>
            <div class="card-body">
                <div class="justify-content-between align-items-top">
                    <div class="flex-grow-1 m-2">
                        <div class="message-text">${messageText}</div>
                    </div>
                    <div class="flex-grow-1 m-1">
                    <button class="btn btn-danger btn-sm ms-2" onclick="this.closest('.card').remove()">
                        Delete
                    </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Add the new message at the top of the board
        const messageBoard = document.getElementById('messageBoard');
        messageBoard.insertAdjacentHTML('afterbegin', messageHTML);

        // Clear the input field
        input.value = '';
        input.focus();
    }
}

function getCurrentUser() {
    return 'KIMGEEK';
}

// Add event listener for Enter key
window.onload = function() {
    document.getElementById('messageInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addMessage();
        }
    });
};

function formatDateTime() {
    const now = new Date();
    return now.toISOString().slice(0, 19).replace('T', ' ');
}