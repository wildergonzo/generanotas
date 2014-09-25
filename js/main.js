function runScript(e) {
    if (e.keyCode == 13) {
        generarNotas();
        return false;
    }
}

function getRandom(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function create2DArray(rows,columns) {
	var x = new Array(rows);
	for (var i = 0; i < rows; i++) {
		x[i] = new Array(columns);
	}
	return x;
}
function makeTable(array) {
	var result = "<table class='table table-striped'>";
	result += "<tr";
	for(var i=0; i<array.length; i++) {
		result += "<td>"+ array[i] +"</td>";
	}
	result += "</tr>";
	result += "</table>";
	return result;
}
function makeTable2DArray(myArray,r) {
	var result = "<table class='table table-striped'>";
	for(var i=0; i<myArray.length; i++) {
		//[w]:color selection
		if(i==r){
		    result += "<tr class='highlight'>";
		} else{
			result += "<tr>";	
		}
		for(var j=0; j<myArray[i].length; j++){
		    result += "<td>"+myArray[i][j]+"</td>";
		}
		    result += "</tr>";
	}
	result += "</table>";
	return result;
}
     	var n10 = [
		    ['10','10', '10', '10'],
		    ['10','10', '9', '11'],
		    ['10','10', '8', '12'],
		    ['11','11', '9', '9'],
		    ['11','10', '10', '9'],
		    ['12','10', '9', '9'],
		    ['13','9', '9', '9'],
		    ['14','9', '9', '8'],
		    ['15','9', '8', '8'],
		    ['16','8', '8', '8'],
		    ['17','7', '8', '8'],
		    ['18','7', '7', '8'],
		    ['19','7', '7', '7']
		];
		var n11 = [
		    ['11','11', '11', '11'],
		    ['11','11', '10', '12'],
		    ['11','11', '9', '13'],
		    ['11','10', '10', '13'],
		    ['12','10', '10', '12'],
		    ['12','11', '11', '10'],
		    ['13','9', '9', '13'],
		    ['14','10', '10', '10'],
		    ['14','9', '11', '10'],
		    ['14','9', '9', '12'],
		    ['15','10', '10', '9'],
		    ['15','9', '11', '9'],
		    ['16','10', '9', '9'],
		    ['17','9', '9', '9'],
		    ['18','9', '9', '8'],
		    ['19','9', '8', '8'],
		    ['20','8', '8', '8']
		];
		var n12 = [
		    ['12','12', '12', '12'],
		    ['12','12', '11', '13'],
		    ['12','12', '10', '14'],
		    ['12','12', '12', '14'],
		    ['13','13', '11', '11'],
		    ['14','14', '10', '10'],
		    ['13','10', '14', '11'],
		    ['13','10', '12', '13'],
		    ['15','10', '11', '12'],
		    ['15','11', '11', '11'],
		    ['16','10', '10', '12'],
		    ['16','10', '11', '11'],
		    ['17','10', '10', '11'],
		    ['18','10', '10', '10'],
		    ['19','10', '10', '9'],
		    ['20','10', '10', '9']
		];

    function generarNotas() {
        var estudiante = parseInt(document.getElementById("nota_estudiante").value);
        var docente = parseInt(document.getElementById("nota_docente").value);
        var rows = new Array();
        var notas = new Array();
        var random = 0;
        switch(docente) {
		    case 10:	
			    for	(i = 0; i < n10.length; i++) {
	    			for (j = 0; j < n10[i].length; j++){
	    				if (n10[i][j] == estudiante){
	    					rows.push(i);
	    					j = n10[i].length;
	    				}
	    			}
				}
				var matrix = create2DArray(rows.length, n10[0].length);
				for	(i = 0; i < rows.length; i++) {
	    			for (j = 0; j < n10[i].length; j++){
	    				matrix[i][j] = n10[rows[i]][j];
	    			}
				}
			    //alert(matrix.length); //[w]:number of rows
			    random = getRandom(0, matrix.length);
			    /*for (i = 0; i < matrix[i].length; i++){
			    	notas.push(matrix[random][i])
			    }*/
		        break;
		    case 11:
		        break;
		    case 12:
		        break;
		    default:
	        	document.getElementById("tresult").innerHTML = "Dato invalido.";
		}
		document.getElementById("tresult").innerHTML = makeTable2DArray(matrix, random);
    }