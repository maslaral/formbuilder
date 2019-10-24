var review = {};
var button = document.querySelector("button");

button.addEventListener("click", function(){
    review = {
        title: document.querySelector("#title").value,
        body: document.querySelector("#body").value,
        link: document.querySelector("#link").value
    }

    for (var value in review){
        console.log(review[value]);
    }

    document.querySelector("form").reset();
    document.querySelector("#success").innerHTML = "<p>Successfully submitted!</p>";

    setTimeout(function(){
        document.querySelector("#success").innerHTML = "";
    }, 5000);
})