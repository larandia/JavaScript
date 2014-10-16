/*
# Game based on multidimentional arrays 
# Autor: Limbert Arandia
# Date: 10-16-2014
*/

var game = function() {

	var getMatrixSize = function() {
	
		do {
			var n = prompt('Introduce the size of the matrix for game (please enter only pair and integer number)');
			n = parseInt(n);
		} while((n % 2) != 0);
		
		return n;
	  };
	  
	var tableAsString = function(m) {
		var temp = "";
		for ( var i = 0; i < m.length; ++i ) {
			temp += m[i];
			if ( i < m.length - 1 ) {
				temp += "\n";
			}
		}
		return temp;
	};
	
	var printMatrix = function(m){
		
		for (var i = 0; i < m.length; i++){
         for (var j = 0; j < m[i].length; j++){
              console.log(m[i][j]);
         }
		 console.log("\n");
		}
	 };
	 
	var fillRndMatrix = function(m){
		
		for(var i= 0; i < ((m.length*m.length)/2); i++) {
			var isCellReady = false;
			do {
				var idx = parseInt(Math.random() * m.length);
				var idx2 = parseInt(Math.random() * m.length);
				
				if(m[idx][idx2] == undefined) {
					m[idx][idx2] = String.fromCharCode(65 + i);
					isCellReady = true;
				}
						
			  } while (!isCellReady) 
		}
		return m;
	};
	
	var fillCustomMatrix = function(n,v) {
		var m = [];
         for (var i = 0; i < n; i++) {
          m[i] = [];
          for (var j = 0; j < n; j++) {
           m[i][j] = v;
		   }
		}
		return m;
	};
	
    var size = getMatrixSize();
	
	var finalMatrix = function() {
		
		var matrix = fillCustomMatrix(size, undefined);
		var matrixNew = fillRndMatrix(matrix);
		var matrixFilled = fillRndMatrix(matrixNew); 
					
		return matrixFilled; 
	};
	var tmpMatrixStatus = function(m){
		for (var x= 0; x< m.length; x++){
			for (var y= 0; y< m.length; y++){
				var tmp = m[x][y];				
				if (tmp.localeCompare('*')== 0)
					return false;
			}
		}
		return true;
	};

    var startGame = function(){
		var filledMatrix = finalMatrix();
		var tmpMatrix = fillCustomMatrix(size, '*');

		do {
			var printM = printMatrix(filledMatrix);
			var printMT = printMatrix(tmpMatrix);
			var mString = tableAsString(filledMatrix);
			var tmpString = tableAsString (tmpMatrix);

			var firstNumRow = parseInt(prompt("Please enter the row index for first letter: "+"\n"+ mString + "\n" +"=========="+"\n"+ tmpString));
			var firstNumCol = parseInt(prompt("Please enter the column index for first letter: "+ "\n"+ mString + "\n" +"=========="+"\n"+tmpString));
			var secondNumRow = parseInt(prompt("Please enter the row index for second letter: "+ "\n"+ mString + "\n" +"=========="+"\n"+ tmpString));
			var secondNumCol = parseInt(prompt("Please enter the column index for second letter: "+ "\n"+ mString + "\n" +"=========="+"\n"+tmpString));

			if (filledMatrix[firstNumRow][firstNumCol] == filledMatrix[secondNumRow][secondNumCol]) {
				alert ('CORRECT! the two letters match properly');
				tmpMatrix[firstNumRow][firstNumCol] = filledMatrix[firstNumRow][firstNumCol] ;
				tmpMatrix[secondNumRow][secondNumCol] = filledMatrix[firstNumRow][firstNumCol] ;
			    }
			else { alert('INCORRECT! both letters not match, please try again');}
		  } while(tmpMatrixStatus(tmpMatrix) == false);
		  var mString = tableAsString(filledMatrix);
		  var tmpString = tableAsString (tmpMatrix);
		  alert ('Congratulations! you won the game'+ "\n"+ mString + "\n" +"=========="+"\n"+tmpString);
		  var printM = printMatrix(filledMatrix);
		  var printMT = printMatrix(tmpMatrix);

    }
    startGame();
};