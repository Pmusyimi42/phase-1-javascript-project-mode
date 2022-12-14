document.addEventListener('DOMContentLoaded',()=>{
  getQuotes()  
})
const getQuotes = ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fab9a53a39mshe9809b23c7afb54p11725cjsnb80dfbbd2ffe',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options)
        .then(response => response.json())
        .then(getQuote)
        .catch(err => console.error(err));
};
