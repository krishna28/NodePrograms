var board = []
var boardMap = {}
var firstRow = ['A','B','C'];

var secondRow = ['D','E','F'];

var thirdRow  = ['G','H','I'];

var fourthRow = ['','J',''];

var result = 0;
var inputSize = process.argv[2];

board.push(firstRow);
board.push(secondRow);
board.push(thirdRow);
board.push(fourthRow);

if(inputSize>1){

for(var i=0;i<board.length;i++){
	
	for(var j=0;j<board[i].length;j++){
		if(board[i][j]){
//			console.log(board[i][j]);
		boardMap[board[i][j]]=1;
		}
		if(i-(inputSize-1)>=0 && board[i][j]){
//			console.log(board[i][j]);
			boardMap[board[i][j]]++;
		}
		if(j-(inputSize-1)>=0 && board[i][j] && board[i][j-(inputSize-1)]){
//			console.log(board[i][j]);
			boardMap[board[i][j]]++
		}
		
		if(j+(inputSize-1)<board[i].length && board[i][j] && board[i][j+(inputSize-1)]){
//			console.log(board[i][j]);
			boardMap[board[i][j]]++;
		}
		
		
		if(i+(inputSize-1)<board.length && board[i+(inputSize-1)][j]){
//			console.log(board[i][j])
			boardMap[board[i][j]]++;
		}
	}
	
}
}else if(inputSize==1){
//	return 10;
	console.log("output "+10);
	result=10;
	
}else{
	
//	console.log("invalid input size");
	console.log("output "+0);
	result = 0;
}

for(item in boardMap){
	result+=boardMap[item]
}
console.log(board);
console.log("output "+result);
console.log(boardMap);