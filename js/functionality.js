function updateMemoryCost(product, isTrue) {

    const memoryCostInput = document.getElementById(product + '-cost');
    let memoryCost = memoryCostInput.innerText;
    if (isTrue) {
        memoryCost = 0;
    }
    else {
        memoryCost = 180;
    }
    memoryCostInput.innerText = memoryCost;
    calculateTotal();
}
function updateStorageCost(product, storage) {

    const storageCostInput = document.getElementById(product + '-cost');
    let storageCost = storageCostInput.innerText;
    if (storage == '256gb') {
        storageCost = 0;
    }
    else if (storage == '512gb') {
        storageCost = 100;
    }
    else if (storage == '1Tb') {
        storageCost = 180;
    }
    storageCostInput.innerText = storageCost;
    calculateTotal();
}
function updateDeliveryCost(product, delivery) {

    const deliveryCostInput = document.getElementById(product + '-cost');
    let deliveryCost = deliveryCostInput.innerText;
    if (delivery) {
        deliveryCost = 0;
    }
    else {
        deliveryCost = 20;
    }
    deliveryCostInput.innerText = deliveryCost;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productCost = parseInt(productInput.innerText);
    return productCost;
}

function calculateTotal() {
    const productCost = getInputValue('product');
    const memoryTotalCost = getInputValue('memory');
    const storageTotalCost = getInputValue('storage');
    const deliveryTotalCost = getInputValue('delivery');
    const totalPrice = productCost + memoryTotalCost + storageTotalCost + deliveryTotalCost;
    // update on the html
    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('discount-price').innerText = totalPrice;
}
function discountTotal() {
    const total = document.getElementById('discount-price');
    const totalCost = parseInt(total.innerText);
    const promoInput = document.getElementById('promo-code');
    if (promoInput.value == 'stevekaku') {
        const discountFinal = totalCost * 0.8;
        total.innerText = discountFinal;
    }
    promoInput.value = '';
}

document.getElementById('8gb-memory').addEventListener('click', function () {
    updateMemoryCost('memory', true);
})
document.getElementById('16gb-memory').addEventListener('click', function () {
    updateMemoryCost('memory', false);
})
document.getElementById('256gb-storage').addEventListener('click', function () {
    updateStorageCost('storage', '256gb');
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    updateStorageCost('storage', '512gb');
})
document.getElementById('1Tb-storage').addEventListener('click', function () {
    updateStorageCost('storage', '1Tb');
})
document.getElementById('free-delivery').addEventListener('click', function () {
    updateDeliveryCost('delivery', true);
})
document.getElementById('urdent-delivery').addEventListener('click', function () {
    updateDeliveryCost('delivery', false);
})
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    discountTotal();
})