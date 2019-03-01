

var products = [
               {
                   name: 'parkа',
                   color: 'green',
                   cost: 150,
               },
                {
                   name: 'coat',
                   color: 'red', 
                   cost: 555,
               },
                {
                   name: 'jacket',
                   color: 'blue',  
                   cost: 259,
               },
           ];

var $catalog = document.getElementById('catalog');


// ссылки меню
var $a = document.createElement('a');
$catalog.appendChild($a);
$a.textContent = 'Главная ';
var $a = document.createElement('a');
$catalog.appendChild($a);
$a.textContent = ' Контакты';

var $h1 = document.createElement('h1');
$catalog.appendChild($h1);
$h1.textContent = 'КАТАЛОГ';

for(var i = 0; i < products.length; i++){
    var $div = document.createElement('div');
    $catalog.appendChild($div);
    $div.textContent = ' Наименование: ' + products[i].name + ' цвет: ' + products[i].color +  ' цена: ' + products[i].cost;
    
 // украшательства   
    $div.style.backgroundColor = 'antiquewhite';
    $div.style.height = '50px';
    $div.style.fontSize = '20px';
    
    var $button = document.createElement('button');
    $div.appendChild($button);
    $button.textContent = 'КУПИТЬ'
    
}