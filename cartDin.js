var $cart = document.getElementById('cart');
var $table = document.createElement('table');

$cart.appendChild($table);


var products = [
               {
                   name: 'parkа',
                   cost: 150,
                   quantity: 2,
               },
                {
                   name: 'coat',
                   cost: 555,
                   quantity: 2,
               },
                {
                   name: 'jacket',
                   cost: 259,
                   quantity: 2,
               },
           ];
        
            var sum = 0;
        
        function countBasketPrice(x){

                for(var i = 0; i < products.length; i++){
                    sum = sum + products[i].cost * products[i].quantity;

                }
                return sum;
            }


   function basketProducts(x){
       if(products.length == 0){
           $cart.textContent = 'Ваша корзина пуста';
       }
       
       for(var i = 0; i < (products.length + 2); i++){
           var $row = document.createElement('tr');
           $table.appendChild($row);
           
           if(i == 0){
               $row.innerHTML = '<h3>В корзине:<h1>';
           }
           if(i > 0 && i < (products.length + 1)){
               $row.textContent = products[i - 1].name + ' : ' + products[i - 1].quantity + ' шт.' + ' цена: ' + (products[i - 1].quantity * products[i - 1].cost);
           }
           if(i == (products.length + 1)){
               
               $row.textContent = ('Сумма вашей покупки: ' + countBasketPrice(products));
           }        
    }
}
   
            
           basketProducts(products);

$table.classList.add('back');
           