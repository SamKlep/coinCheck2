$(document).ready(function() {
    $.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=985402fdb81c74083af15ad1ab0b905937ad295d50144f8055daa7565b2338f0",
        {
           data: JSON
        },
        function(response) {
            console.log("hello")
            console.log(response);
            // console.log(typeof(Data))
            console.log(response.Data[0].body)
            console.log("hello")
        
             var newsElement = document.getElementById("news-body")
            //  newsElement.innerHTML = response.Data[0].body
             

             var items = response.Data
             var newsStory = items.map((item)=>{
                 return (
                     `
                     <div id="news-wrapper">
                     <div id="news-body">
                     <a href="${item.url}">
                     <h3 id="news-header">${item.title}</h3>
                     </a>
                     <p id="news">${item.body}</p>
                     </div>
                     </div>`
                 )
                 console.log(item.title)
             })
             newsElement.innerHTML = newsStory

      });

});