


function btcPrice(currentPrice,profitPercentige) {

    var priceWithProfit = ((currentPrice * profitPercentige)/ 100) + currentPrice;

    return priceWithProfit;

}

function myFunction() {
    var criptoPrice = document.getElementById("myNumber").value;
    var criptoPercantise = document.getElementById("percent").value;
    var pricePlusProfit = (btcPrice(currentPrice,criptoPercantise)) + criptoPrice;

    document.getElementById("demo").innerHTML = pricePlusProfit;
    console.log(pricePlusProfit);

    // return pricePlusProfit;
}



// data = btcPrice(x,y);

// console.log(data);



