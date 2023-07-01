let generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  let memeImage = document.querySelector(".meme-generator img");
  let memeTitle = document.querySelector(".meme-generator .meme-title");
  let memeAuthor = document.querySelector(".meme-generator .meme-author");
  
  let updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  let generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();