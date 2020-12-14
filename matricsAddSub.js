function createMatrix() {

    var i = document.getElementById('columns').value;
    var j = document.getElementById('rows').value;
    var mat = "";
    
    for(var y = 0; y < j; y++) {
        for(var x = 0; x < i; x++) {
            
            mat = mat + "<input type='number' id='arr[" +x+ "][" +y+ "]'>";

            if (x==(i-1))   {
                mat = mat +"<br>";
            }
        }
    }
    document.getElementById("div").innerHTML = mat;

}

function powerTwo() {
    
    var i = document.getElementById('columns').value;
    var j = document.getElementById('rows').value;
    
    var arr = new Array(i);

    for (var x = 0; x < i; x++) {
        arr[x] = new Array(j);
    }

    for(var y = 0; y < j; y++) {
        for(var x = 0; x < i; x++) { //this loop only loops once.
            
           arr[x][y] = document.getElementById('rows').value;

            if (x==(i-1))   {
                mat = mat +"<br>";
            }
        }
    }


}