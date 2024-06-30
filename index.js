let quoteData = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "Allen Saunders"
    },
    {
      "quote": "The best way to predict the future is to create it.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "The only thing we have to fear is fear itself.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "Life is really simple, but we insist on making it complicated.",
      "author": "Confucius"
    }
  ]
  
let bgs = ['red','green','greenyellow','aqua','aquamarine','bisque','brown','chocolate','cadetblue','blueviolet'];
const btn = document.getElementById('quoteCtrl');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const color = document.querySelectorAll('.color');
const timeText = document.getElementById('time');
let time = 'morning';
let date = new Date();
if(date.getHours()>=12 && date.getHours()<=17){
    time = 'afternoon';
}else if(date.getHours()>17 && date.getHours()<=6){
   time  = 'night';
}
timeText.innerText = time;
quote.innerText = `"${quoteData[0].quote}"`;
author.innerText = '-By '+ quoteData[0].author;
btn.addEventListener('click',()=>{
    let rand = Math.floor(Math.random() * 10);
    color.forEach((e)=>{
        if(e.id=='quote' || e.id =='author'){
            e.style.color = bgs[rand];
        }else{
            e.style.backgroundColor = bgs[rand];
        }
    })
   quote.innerText = `"${quoteData[rand].quote}"`;
   author.innerText = '-By '+ quoteData[rand].author;
})