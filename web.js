const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


$("#server").change(function(){
    let server = this.value;
    if(server=="dank"){
        const generateMeme = () => {
            fetch("https://meme-api.com/gimme/IndianDankMemes").then(
                (response) => response.json()).then(data => {
                    updateDetails(data.url, data.title, data.author);
                });
                console.log("IndianDankMemes updated");
        };
        generateMemeBtn.addEventListener("click", generateMeme);
    }

    else if(server=="sun"){
        const generateMeme = () => {
            fetch("https://meme-api.com/gimme/sunraybee").then(
                (response) => response.json()).then(data => {
                    updateDetails(data.url, data.title, data.author);
                });
                console.log("sunraybee updated");
        };
        generateMemeBtn.addEventListener("click", generateMeme);
    }

    else{
        const generateMeme = () => {
            fetch("https://meme-api.com/gimme/SaimanSays").then(
                (response) => response.json()).then(data => {
                    updateDetails(data.url, data.title, data.author);
                });
                console.log("saimanSays updated");
        };
        generateMemeBtn.addEventListener("click", generateMeme);
    }    

   

    const updateDetails = (url, title, author) => {
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = `Made by : ${author}`;
    };

});

