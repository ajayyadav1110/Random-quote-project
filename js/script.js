// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var message='';
var randmessage;
//array for different colors
var colors=['blue','#871F1F','#E29624','#706CAE','grey','#8C1F8C','#4BA2D4','#640664','#ED6949'];
var quotes=[{
quote:'Give me a museum and I will fill it',
source:'Pablo Picasso',
citation:'world Publication',
tags:'Artist',
year:1881
},
{
quote:'I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.',
 source:'Galileo Galilei',
citation:'Star',
tags:'Scientist',
year:1564
},
{
quote:'Not everything that can be counted counts, and not everything that counts can be counted.',
source:'Albert Einstein', 
citation:'The Shine',
tags:'Scientist',
year:1879
},
{
quote:'Give me chastity and continence, but not yet.',
source:'Saint Augustine',
citation:'Star Publication',
tags:'',
year:1813
},
{
quote:'People demand freedom of speech to make up for the freedom of thought which they avoid.',
source: 'Soren Aabye Kierkegaard',
citation:'Pumi',
tags:'Politician',
year:1813
},
{
quote:'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
source:'Bertrand Russell',
citation:'saint',
tags:'Businessman',
year:1872
},
{
quote:'Glory is fleeting, but obscurity is forever.',
source:' Napoleon Bonaparte',
citation:'Queen',
tags:'poet',
year:1769
},
{
quote:'Moral indignation is jealousy with a halo.',
source: 'H. G. Wells',
citation:'Lion Publication',
tags:'artist',
year:1866
}]; /*Create a function named getRandomQuote which:
selects a random quote object from the quotes array
returns the randomly selected quote object*/
 
 function getRandomQuote(){
   selectquote=quotes[Math.floor(Math.random()*quotes.length)];
 return selectquote;
 
 }
 
 
 /*Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote object using the following HTML template:*/
    


	function printQuote(message){
	 randmessage=getRandomQuote();
	 message='<p class="quote">'+randmessage.quote+'</p>'
	 message+='<p class="source">'+randmessage.source+'<span class="citation">'+randmessage.citation+'</span>'+'<span class="tags">'+randmessage.tags+'</span>'+'<span class="year">'+randmessage.year+'</span>'+'</p>';
	 document.getElementById('quote-box').innerHTML=message;
	 }

	 
	 //function call  onclick---1.printQuote,2.randColor----	
	        
			
			
			var button=document.getElementById('loadQuote');
	               button.onclick =function (){
	                    printQuote(message);
	                    randColor () 
	         };
			 
			 
//create a function for slecting random color from array of colors	 

                  function randColor () {
            var selectedcolor= colors[Math.floor(Math.random() * colors.length)];
           document.getElementById('body').style.background = selectedcolor;
        };




















