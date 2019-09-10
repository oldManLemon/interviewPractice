var spend = 50;
var prices = [1, 12, 5, 111, 200, 1000, 10];

function pricesSort(a, b) {
    if (a > b) {
        return 1;

    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
function maxToys(prices, k) {


    prices = prices.sort(pricesSort);
    let products = [];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < k) {
            k = k - prices[i];
            products.push(prices[i]);
        }
    }
    console.log(products.length);
    return products.length;
}



maxToys(prices, spend);