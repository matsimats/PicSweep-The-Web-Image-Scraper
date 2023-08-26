document.getElementById("show-button").addEventListener("click", async function() {
    const url = document.getElementById("url-input").value;

    // Send the URL to the backend
    const response = await fetch("http://127.0.0.1:5000/image-details", { // replace with your server url
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            url: url
        })
    });

    const data = await response.json();

    // Clear the current image list
    const imageListElement = document.getElementById("image-list");
    imageListElement.innerHTML = "";

    // Add each image to the list
    if (data.images) {
        data.images.forEach((imageName, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Image ${index + 1}: ${imageName}`;
            imageListElement.appendChild(listItem);
        });
    }
});
