//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector("button").addEventListener("click", stockDetails);

function stockDetails() {
    const ticker = document.querySelector("input").value;
    const url1 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=X8XWERVKV0GTRGZV`;
    const url2 = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=X8XWERVKV0GTRGZV`;

    //fetching URL for details of company
     fetch(url1)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);

            document.querySelector(".name").innerText = data.Name;
            let value = document.querySelectorAll("p");
            console.log(value);
            value[0].innerText = data.Description;
            value[7].innerText = data.Country;
            value[8].innerText = data.Sector;
            value[9].innerText = data.BookValue;
            value[10].innerText = data.MarketCapitalization;
            value[11].innerText = data.ForwardPE;
            value[12].innerText = data.DividendYield;

            let heading = document.querySelectorAll("h2, h3, .key");
            for (let i = 0; i < heading.length; i++) {
                console.log(heading[i]);
                heading[i].classList.add("show");
            }
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });

        //fetching URL for today's price details
        fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);

            let value = document.querySelectorAll(".cont-2 .value p");
            console.log(value);
            value[0].innerText = data["Global Quote"]["05. price"];
            value[1].innerText = data["Global Quote"]["08. previous close"];
            value[2].innerText = data["Global Quote"]["10. change percent"];
            value[3].innerText = data["Global Quote"]["02. open"];
            value[4].innerText = data["Global Quote"]["03. high"];
            value[5].innerText = data["Global Quote"]["04. low"];
            
            let change = data["Global Quote"]["09. change"];
            if (Number(change) >= 0) value[2].style.color = "green";
            else value[2].style.color = "red";
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });

}
