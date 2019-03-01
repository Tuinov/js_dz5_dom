var $board = document.getElementById('board');
var $table = document.createElement('table');

$board.appendChild($table);


function chessBoard(){
    for(var i = 0; i < 8; i++){
        var $row = document.createElement('tr');

        for(var j = 0; j < 8; j++){
            var $cell = document.createElement('td');

            if((j + i) % 2 == 0){
                $cell.classList.add('black');
            }
            if(j == 0){
                var str = 'abcdefgh';
                $cell.textContent = str[i]; 
            }
            if(i == 0){
                $cell.textContent = (j + 1);
            }
            
            $row.appendChild($cell);

        }
        $table.appendChild($row);  
    }
}

    
chessBoard();