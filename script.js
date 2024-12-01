
function addTag(text) {

    const newTag = document.createElement("li");
    const tagText = document.createElement("p");
    const deleteButton = document.createElement("button");

    newTag.className = "tags";
    tagText.textContent = text;
    deleteButton.className = "x";
    deleteButton.innerHTML = `<img src="assets/close.png" alt="x">`;


    deleteButton.addEventListener("click", function () {
        newTag.remove();
    });


    newTag.appendChild(tagText);
    newTag.appendChild(deleteButton);


    const tagList = document.querySelector(".tag > ul");
    tagList.append(newTag);
}

document.getElementById("add-button").addEventListener("click", function () {

    const textInput = document.getElementById("add-text").value;


    if (textInput.trim() === "") { //kalo kosongan
        alert("Please enter a skill.");
        return;
    }

 
    addTag(textInput);


    document.getElementById("add-text").value = "";  //menghapus
});

document.querySelectorAll(".tags .x").forEach((button) => {
    button.addEventListener("click", function () {
        button.closest(".tags").remove();
    });
});
