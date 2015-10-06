/* dice game main js */

var dice_x = 140;
var dice_y = 40;
//var dice_x_2 = 340;	// 第二个骰子的水平位置
var dice_width = 100;
var dice_height = 100;
var win_status = false;
var rec = 12;	// 圆点的半径
var color = ['blue', 'red', 'green', '#d654ac', '#88dd77', '#d9004e'];

var ctx = document.getElementById('canvas').getContext('2d');
var message_obj = document.getElementById('message');
ctx.lineWidth = 5;

function init(){
	message_obj.innerHTML = '';
	win_status = false;
}

function clickDraw(){
	console.log(message_obj.innerHTML);
	if(win_status){
		alert('Please Init');
		return false;
	}
	
	var ch = 1 + Math.floor(Math.random() * 6);	// 1~6
	startDraw(ch);	
	var sum = ch;
	
	// 第二个骰子
	dice_x = dice_x + 200;
	ch = 1 + Math.floor(Math.random() * 6);
	sum += ch;
	startDraw(ch);
	dice_x = dice_x - 200;	// 还原x
	switch(sum){
		case 12:
		case 2:
			message_obj.innerHTML = 'You Win!';
			win_status = true;
			break;
		default:
			message_obj.innerHTML = '';
	}
}

function startDraw(ch){
	ctx.clearRect(dice_x, dice_y, dice_width, dice_height);	// 清除原来的
	ctx.strokeRect(dice_x, dice_y, dice_width, dice_height);
	switch(ch){
		case 1:
			draw1();
			break;
		case 2:
			draw2();
			break;
		case 3:
			draw3();
			break;
		case 4:
			draw4();
			break;
		case 5:
			draw5();
			break;
		case 6:
			draw6();
			break;
		default:
			break;
	}
}

/**
* 画一个点
*/
function draw1(){
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(dice_x + 50, dice_y + 50, rec, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
}

function draw2(){
	for(var i = 0; i < 2; i++){ 
		ctx.fillStyle = color[i];
		ctx.beginPath();
		ctx.arc(dice_x + 50, dice_y + 25 + 50 * i, rec, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}

function draw3(){
	ctx.strokeRect(dice_x, dice_y, dice_width, dice_height);
	for(var i = 0; i < 3; i++){
		ctx.fillStyle = color[i];
		ctx.beginPath();
		ctx.arc(dice_x + 25 + 25 * i, dice_y + 25 + 25 * i, rec, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}

function draw4(){
	for(var i = 0; i < 4; i++){
		ctx.fillStyle = color[i];
		ctx.beginPath();
		var x, y;
		switch(i){
			case 0:
				x = dice_x + 25;
				y = dice_y + 25;
				break;
			case 1:
				x = dice_x + 75;
				y = dice_y + 25;
				break;
			case 2:
				x = dice_x + 25;
				y = dice_y + 75;
				break;
			case 3:
				x = dice_x + 75;
				y = dice_y + 75;
				break;
		}		
		ctx.arc(x, y, rec, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}

function draw5(){
	for(var i = 0; i < 5; i++){
		ctx.fillStyle = color[i];
		ctx.beginPath();
		var x, y;
		switch(i){
			case 0:
				x = dice_x + 25;
				y = dice_y + 25;
				break;
			case 1:
				x = dice_x + 75;
				y = dice_y + 25;
				break;
			case 2:
				x = dice_x + 50;
				y = dice_y + 50;
				break;
			case 3:
				x = dice_x + 25;
				y = dice_y + 75;
				break;
			case 4:
				x = dice_x + 75;
				y = dice_y + 75;
				break;
		}		
		ctx.arc(x, y, rec, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}

function draw6(){
	for(var i = 0; i < 6; i++){
		ctx.fillStyle = color[i];
		ctx.beginPath();
		var x, y;
		switch(i){
			case 0:
				x = dice_x + 25;
				y = dice_y + 20;
				break;
			case 1:
				x = dice_x + 75;
				y = dice_y + 20;
				break;
			case 2:
				x = dice_x + 25;
				y = dice_y + 50;
				break;
			case 3:
				x = dice_x + 75;
				y = dice_y + 50;
				break;
			case 4:
				x = dice_x + 25;
				y = dice_y + 80;
				break;
			case 5:
				x = dice_x + 75;
				y = dice_y + 80;
				break;
		}		
		ctx.arc(x, y, rec, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}	
