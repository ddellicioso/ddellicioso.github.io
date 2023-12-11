
function goBack() {
    window.history.back();
}


document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector(".checkbox");

    checkbox.addEventListener("mouseenter", function() {
        moveCheckbox();
    });

    function moveCheckbox() {
        const newPosition = Math.random() * 50; // Adjust the range as needed
        checkbox.style.transform = `translateX(${newPosition}vw)`;
    }
});



function checkPassword() {
    var password = document.getElementById("password").value;
    var resultElement = document.getElementById("result");

    // Replace this with your actual password check logic
    if (password === "19042023") {
        resultElement.textContent = "Login successful!";
        redirectToPage(); // Call the function to redirect
    } else {
        resultElement.textContent = "Incorrect password. Please try again.";
    }
}

function redirectToPage() {
    // Replace 'target_page.html' with the actual page you want to redirect to
    window.location.href = 'home.html';
}



