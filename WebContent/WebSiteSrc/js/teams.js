/*
 * 1、进入页面读取全量球员数据
 * 2、数据存放到本地数组(存放一个个的球员对象)
 * 3、遍历数组内的球员对象,加入到teamData，每加入一个totalabi和numOfPlayer增加相应数值
 * 4、遍历每个teamData，将队员名加入到table内，更新总实力到table内
 * 5、柱状图表--考虑实现
 * 
 * 
 */
var allplayers = new Array(); // 存放所有球员数据

//球员对象构造函数,记录所有的能力
function playerData() {
	this.playername = "empty";
	this.isCaptain = false;	//是否队长

	this.totalabi = 50; //总实力
	this.body_abi = 50; //体质能力
	this.tech_abi = 50; //技术能力
	this.spec_abi = 50; //特殊能力
	this.attack_abi = 50; //进攻能力
	this.defence_abi = 50; //防守能力	

	this.department = "empty"; //部门
}

//队伍构造函数，记录每个队伍的人员和总能力
function teamData() {
	this.totalabi = 0;	//总实力
	this.numOfPlayer = 0; //队员数目
	this.player = new Array(); //记录队员名
}

