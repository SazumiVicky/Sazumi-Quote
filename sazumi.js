const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
var message="Sumber: Sazumi Vicky";
function clickIE4(){if (event.button==2){alert(message);return false;}} function clickNS4(e){if (document.layers||document.getElementById&&!document.all){if (e.which==2||e.which==3){alert(message);return false;}}} if (document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS4;} else if (document.all&&!document.getElementById){document.onmousedown=clickIE4;} document.oncontextmenu=new Function("alert(message);return false")
function getQuote() {
    fetch("http://quotes.stormconsultancy.co.uk//random.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        Quote.innerText = data.quote;
        Author.innerText = `~${data.author}`;
    });
}
getQuote();