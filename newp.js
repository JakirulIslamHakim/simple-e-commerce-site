var totalPrice = 0;
// const discount = 0;
function itemContainer(container) {
    const itemName = container.childNodes[3].childNodes[3].innerText;
    const liContainer = document.getElementById('add-item-name');
    const li = document.createElement('li');
    li.innerText = itemName;
    liContainer.appendChild(li);

    const price = container.childNodes[3].childNodes[5].childNodes[1].innerText;
    totalPrice = (parseFloat(totalPrice) + parseFloat(price)).toFixed(2);
    document.getElementById('total-price').innerText = totalPrice;
    // document.getElementById('grand-total').innerText = totalPrice;

    if (totalPrice > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');

        if (totalPrice >= 200) {
            document.getElementById('apply-btn').removeAttribute('disabled');
            document.getElementById('apply-btn').addEventListener('click', function () {
                const code = document.getElementById('Coupon-code').value;
                document.getElementById('Coupon-code').value ='';

                if (code === 'SELL200') {
                    const discount = (totalPrice * .20).toFixed(2);
                    document.getElementById('discount').innerText = discount;
                    const newTotal = (totalPrice - discount).toFixed(2);
                    document.getElementById('grand-total').innerText = newTotal;
                }
            })
        }
    }
}

document.getElementById('make-purchase').addEventListener('click', function () {
    document.getElementById('reload-btn').addEventListener('click',function(){
            location.reload();
    })
})