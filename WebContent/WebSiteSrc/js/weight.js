/********************************
 *  作者：kfzx-qiusd 
 *  权重值
 *
 *********************************/
/*
 *  :::::::::: 全局变量定义开始 :::::::::: 
 * 
 */
var weightfunc = {
	//身体属性，共四项
	speed_w: 0.35, //速度权重值
	strength_w: 0.2, //强壮权重值
	stamina_w: 0.35, //体能权重值
	health_w: 0.15, //受伤抗性

	//技术属性，共四项
	passing_w: 0.3, //传球权重值
	touching_w: 0.3, //停球权重值
	dribbling_w: 0.3, //盘带权重值
	heading_w: 0.1, //头球权重值

	//特殊属性，共两项
	minding_w: 0.4, //意志力权重值
	rating_w: 0.6, //出勤率权重值

	//进攻属性，共三项
	shoot_w: 0.3, //射门
	offtheball_w: 0.45, //跑位
	creativity_w: 0.25, //创造力

	//防守属性，共三项
	taking_w: 0.35, //抢断
	marking_w: 0.25, //盯人
	positioning_w: 0.4, //防守站位

	//总能力，共五项
	body_w: 0.2, //身体
	tech_w: 0.35, //技术
	spec_w: 0.1, //特殊
	attack_w: 0.2, //进攻
	defence_w: 0.15 //防守
}


