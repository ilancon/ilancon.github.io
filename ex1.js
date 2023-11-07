function sendOrder() {
    let order = {
        size: document.querySelector('input[name="size"]:checked').value,
        toppings: {
            pepperoni: document.getElementById('pepperoni').checked ? document.getElementById('pepperoni').value : null,
            sausage: document.getElementById('sausage').checked ? document.getElementById('sausage').value : null,
            cheese: document.getElementById('cheese').checked ? document.getElementById('cheese').value : null,
            mushrooms: document.getElementById('mushrooms').checked ? document.getElementById('mushrooms').value : null,
            olives: document.getElementById('olives').checked ? document.getElementById('olives').value : null,
        },
        drinks: {
            sodacan: document.getElementById('sodacan').value ? document.getElementById('sodacan').value : null,
            soda20z: document.getElementById('soda20z').value ? document.getElementById('soda20z').value : null,
            soda2l: document.getElementById('soda2l').value ? document.getElementById('soda2l').value : null,
            orangejuice: document.getElementById('orange').value ? document.getElementById('orange').value : null,
            water: document.getElementById('water20z').value ? document.getElementById('water20z').value : null
        }
    };

    localStorage.setItem('order', JSON.stringify(order));
    document.getElementById('receipt').innerHTML = '<div class="text-center fw-bolder"><div>Premium Pizzeria Receipt</div> <div>- - - - - - - - - - - - - - - - - - - - -</div></div>';
    document.getElementById('receipt').innerHTML += '<p>Size:</p>';

    let totalSum = 0;

    if (order.size === 'Small') {
        totalSum += 5.00;
        document.getElementById('receipt').innerHTML += '<p>Small - $5.00</p>';
    }
    else if (order.size === 'Medium') {
        totalSum += 7.00;
        document.getElementById('receipt').innerHTML += '<p>Medium - $7.00</p>';
    }
    else if (order.size === 'Large') {
        totalSum += 9.00
        document.getElementById('receipt').innerHTML += '<p>Large - $9.00</p>';
    }
    else if (order.size === 'Extra-Large') {
        totalSum += 12.00
        document.getElementById('receipt').innerHTML += '<p>Extra-Large - $12.00</p>';
    }

    document.getElementById('receipt').innerHTML += '<p>Toppings:</p>';
    if (order.toppings.pepperoni) {
        totalSum += 0.50;
        document.getElementById('receipt').innerHTML += '<p>Pepperoni - $0.50</p>';
    }
    if (order.toppings.sausage) {
        totalSum += 0.25
        document.getElementById('receipt').innerHTML += '<p>Sausage - $0.25</p>';
    }
    if (order.toppings.cheese) {
        totalSum += 0.50
        document.getElementById('receipt').innerHTML += '<p>Cheese - $0.50</p>';
    }
    if (order.toppings.mushrooms) {
        totalSum += 0.25
        document.getElementById('receipt').innerHTML += '<p>Mushrooms - $0.25</p>';
    }
    if (order.toppings.olives) {
        totalSum += 0.25
        document.getElementById('receipt').innerHTML += '<p>Olives - $0.25</p>';
    }

    document.getElementById('receipt').innerHTML += '<p>Drinks:</p>';
    //Soda can will cost $1.00
    if (order.drinks.sodacan > 0) {
        totalSum += parseFloat(order.drinks.sodacan) * 1.00;
        canprice = 1.00;
        document.getElementById('receipt').innerHTML += '<p>Soda Can: ' + order.drinks.sodacan + ' - $' + canprice + '</p>';
    }
    //Soda 20z will cost $1.50
    if (order.drinks.soda20z > 0) {
        totalSum += parseFloat(order.drinks.soda20z) * 1.50;
        zprice = 1.50;
        document.getElementById('receipt').innerHTML += '<p>Soda 20z: ' + order.drinks.soda20z + ' - $' + zprice + '</p>';
    }
    //Soda 2L will cost $5.00
    if (order.drinks.soda2l > 0) {
        totalSum += parseFloat(order.drinks.soda2l) * 5.00;
        lprice = 5.00;
        document.getElementById('receipt').innerHTML += '<p>Soda 2L: ' + order.drinks.soda2l + ' - $' + lprice + '</p>';
    }
    //Orange Juice will cost $1.00
    if (order.drinks.orangejuice > 0) {
        totalSum += parseFloat(order.drinks.orangejuice) * 1.00;
        ojprice = 1.00;
        document.getElementById('receipt').innerHTML += '<p>Orange Juice: ' + order.drinks.orangejuice + ' - $' + ojprice + '</p>';
    }
    //Water 20z will cost $0.75
    if (order.drinks.water > 0) {
        totalSum += parseFloat(order.drinks.water) * 0.75;
        waterprice = 0.75;
        document.getElementById('receipt').innerHTML += '<p>Water 20z: ' + order.drinks.water + ' - $' + waterprice + '</p>';
    }

    document.getElementById('receipt').innerHTML += '<p class="text-center fw-bold">Total: $' + totalSum + '</p>';
    document.getElementById('receipt').hidden = false;

}
function newOrder() {
    localStorage.removeItem('order');
    let receipt = document.getElementById('receipt');
    receipt.innerHTML = '';
    receipt.hidden = true;
}