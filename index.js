// first load basic html and styling then add functionality after the DOM has loaded
document.addEventListener('DOMContentLoaded',()=>{
  getQuotes()  
  getComments() 
})
const commentSection = document.getElementById('commentSection');

// functin to capture user of site comments from db.json
function getComments(){
    fetch(' http://localhost:3000/comments',)
        .then(response => response.json())
        .then(data => data.map(displayComment))    
        .catch(err => console.error(err));

}

// displays comments of the user to the DOM
function displayComment(comment){
    const comments = document.createElement('li');
    comments.innerText = comment.comnt
    commentSection.appendChild(comments);
    console.log(comments);
}
let quoted = document.getElementById('quote');
const getQuote = document.getElementById('btn');


//  gets quotes from a public API endpoint

const getQuotes = ()=>{
    
    
    fetch('https://api.quotable.io/random',)
        .then(response => response.json())
        .then(handleQuotes)    
        .catch(err => console.error(err));
};

// displays the fetched quote to the DOM

function handleQuotes(quote){
        quoted.innerText = quote.content;
        author.innerText = quote.author;
    
};

getQuote.addEventListener('click', getQuotes);
const form = document.getElementById('form');
form.addEventListener('submit', postComments)


//  sends comments to the database
function postComments (event){
        event.preventDefault();
        fetch(' http://localhost:3000/comments',{
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body : JSON.stringify({
               comnt : event.target.children[0].value,
           })
        })
           .then(response => response.json())
           .then(res => console.log(res))    
           .catch(err => console.error(err));
       
       form.reset()
   
}
