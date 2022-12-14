document.addEventListener('DOMContentLoaded',()=>{
  getQuotes()  
})
let quoted = document.getElementById('quote');
const getQuote = document.getElementById('btn');
const getQuotes = ()=>{
    
    
    fetch('https://api.quotable.io/random',)
        .then(response => response.json())
        .then((quote)=>{
            quoted.innerText = quote.content;
            author.innerText = quote.author;
        })    
        .catch(err => console.error(err));
};
const commentSection = document.getElementById('commentSection');
getQuote.addEventListener('click', getQuotes);
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    const comment = document.createElement('li');
    event.preventDefault();
    comment.innerText = event.target.children[0].value
    commentSection.appendChild(comment);
})
