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
getQuote.addEventListener('click', getQuotes);
