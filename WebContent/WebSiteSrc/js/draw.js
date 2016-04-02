var playerItem = "<li><img src='../img/tshirt19.png'>%player</li>";		//球员元素（在球队列表中）
var pickingLeftItem = "<div class='pickingLeftItem'>%player</div>";		//候选区左侧球员选项
var pickingRightItem = "<div class='pickingRightItem'>%player</div>"; 	//候选区右侧球员选项
var playerReg = "%player";	//替换规则

var playerListStr = '[{"name":"王大雷"},{"name":"黄博文"},{"name":"郜林"},{"name":"高拉特"},{"name":"李学鹏"},{"name":"冯潇霆"},{"name":"金英权"},{"name":"郑智"},{"name":"于汉超"},{"name":"张琳芃"}]';
var playerArray;  //所有球员数组
var pickingArray = new Array(); //处在候选区的球员数组
var pc = 0;

//把一个球员添加到一个球队
var addPlayer = function(playerTeam, playerName){
	var ulId = "#team" + playerTeam;
	var newPlayerItem = playerItem.replace(playerReg, playerName);
	var obj = $(ulId);
	if(obj){
		var originHTML = obj.html();
		obj.html(originHTML+newPlayerItem);
	}
};

//重置分队结果
var resetPlayer = function(){
	//清除已分队数据
	var teamArray = ["A", "B", "C", "D"];
	for(i=0; i<teamArray.length; i++){
		ulId = "#team" + teamArray[i];
		var obj = $(ulId);
		if(obj){
			obj.html("");
		}
	}
	
	//清除候选区数据
	var obj = $("#pickingPlayer");
	if(obj){
		obj.html("");
	}
	if(pickingArray.length != 0){
		pickingArray.splice(0, pickingArray.length);//清空【候选球员】数组
	}
	
	//全局指针复位
	pc = 0;
	
	//解禁【选人】按钮
	$("#pick").attr("disabled", false);
};

//选出四位球员
var pickPlayer = function(){
	var obj = $("#pickingPlayer");
	if(obj){
		var maxPick = pc+4;
		if(pickingArray.length != 0){
			pickingArray.splice(0, pickingArray.length);//清空【候选球员】数组
		}
		for(i=pc;i<maxPick && i<playerArray.length;i++){
			var playerName = playerArray[i].name;
			if(i%2==0){//left
				htmlStr = pickingLeftItem.replace(playerReg, playerName);
			}else{//right
				htmlStr = pickingRightItem.replace(playerReg, playerName);
			}
			pickingArray.push(playerName);//把当前球员添加到【候选球员】数组
			obj.html(obj.html()+htmlStr);
			pc++;
		}
		$("#pick").attr("disabled", true);
	}
};

//随机派到队伍
var drawPlayer = function(){
	if(pickingArray.length != 0){ //进行分组
		var pickedArray = [0, 0, 0, 0];
		var teamArray = ["A", "B", "C", "D"];
		for(i=0; i<pickingArray.length; i++){
			var k = getRandomNum(0, pickedArray.length-1);
			while(pickedArray[k] == 1){
				k = getRandomNum(0, pickedArray.length-1);
			}
			pickedArray[k] = 1;
			addPlayer(teamArray[k], pickingArray[i]);
		}
		
		//清除候选区数据
		var obj = $("#pickingPlayer");
		if(obj){
			obj.html("");
		}
		if(pickingArray.length != 0){
			pickingArray.splice(0, pickingArray.length);//清空【候选球员】数组
		}
		
		//解禁【选人】按钮
		$("#pick").attr("disabled", false);
		
		
	}else{
		alert("当前【候选区】没有球员，请先选人进入【候选区】。");
	}
};

//提交结果
var submitDraw = function(){
	
};

//获取随机数
var getRandomNum = function(min, max){   
	var Range = max - min;
	var Rand = Math.random();   
	return(min + Math.round(Rand * Range));   
};

$(document).ready(function(){
	playerArray = JSON.parse(playerListStr);
});
