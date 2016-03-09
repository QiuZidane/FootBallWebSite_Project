/********************************
 *  作者：kfzx-qiusd 
 *  说明：有空在研究深入JQ...
 *
 *********************************/

// 身体的SLIDER
var bodeabbs1 = $('#bodeabbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');	
var bodeabbs2 = $('#bodeabbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var bodeabbs3 = $('#bodeabbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var bodeabbs4 = $('#bodeabbs4').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');


// 技术的SLIDER
var tech_abbs1 = $('#tech_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs2 = $('#tech_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs3 = $('#tech_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs4 = $('#tech_abbs4').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');


// 特殊能力的SLIDER
var spec_abbs1 = $('#spec_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var spec_abbs2 = $('#spec_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');

// 进攻能力的SLIDER
var attack_abbs1 = $('#attack_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var attack_abbs2 = $('#attack_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var attack_abbs3 = $('#attack_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');

// 防守能力的SLIDER
var defen_abbs1 = $('#defen_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var defen_abbs2 = $('#defen_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var defen_abbs3 = $('#defen_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');


//球员能力对象,记录所有的能力   
var ability = {
	//大项:
	totalabi: 50, //总实力
	body_abi: 50, //身体能力
	tech_abi: 50, //技术能力
	spec_abi: 50, //特殊能力
	attack_abi: 50, //进攻能力
	defence_abi: 50, //防守能力
	//细项:
	speed: bodeabbs1.getValue(), //速度
	strength: bodeabbs2.getValue(), //强壮
	stamina: bodeabbs3.getValue(), //体能
	health: bodeabbs4.getValue(), //受伤抗性
	passing: tech_abbs1.getValue(), //传球
	touching: tech_abbs2.getValue(), //停球
	dribbling: tech_abbs3.getValue(), //盘带
	heading: tech_abbs4.getValue(), //头球
	minding: spec_abbs1.getValue(), //意志力
	rating: spec_abbs2.getValue(), //出勤率
	shoot: attack_abbs1.getValue(), //射门
	offtheball: attack_abbs2.getValue(), //跑位
	creativity: attack_abbs3.getValue(), //创造力
	taking: defen_abbs1.getValue(), //抢断
	marking: defen_abbs2.getValue(), //盯人
	positioning: defen_abbs3.getValue() //防守站位


}

// 获取大项的progressBar
var body_progress = document.getElementById("body_abi_pg");
var tech_progress = document.getElementById("tech_abi_pg");
var spec_progress = document.getElementById("spec_abi_pg");
var attack_progress = document.getElementById("attack_abi_pg");
var defence_progress = document.getElementById("defence_abi_pg");

//  1、获取球员每个小项的能力
//	2、计算大项能力和总实力
function GetandCalPlayerAbilities() {
	//*****获取小项的能力*****
	ability.speed = bodeabbs1.getValue(); //速度
	ability.strength = bodeabbs2.getValue(); //强壮
	ability.stamina = bodeabbs3.getValue(); //体能
	ability.health = bodeabbs4.getValue(); //受伤抗性
	ability.passing = tech_abbs1.getValue(); //传球
	ability.touching = tech_abbs2.getValue(); //停球
	ability.dribbling = tech_abbs3.getValue(); //盘带
	ability.heading = tech_abbs4.getValue(); //头球
	ability.minding = spec_abbs1.getValue(); //意志力
	ability.rating = spec_abbs2.getValue(); //出勤率
	ability.shoot = attack_abbs1.getValue(); //射门
	ability.offtheball = attack_abbs2.getValue(); //跑位
	ability.creativity = attack_abbs3.getValue(); //创造力
	ability.taking = defen_abbs1.getValue(); //抢断
	ability.marking = defen_abbs2.getValue(); //盯人
	ability.positioning = defen_abbs3.getValue(); //防守站位

	//*****计算大项能力*****
	//身体属性，共四项
	var speed_w = 0.35; //速度权重值
	var strength_w = 0.2; //强壮权重值
	var stamina_w = 0.35; //体能权重值
	var health_w = 0.15; //受伤抗性	
	ability.body_abi = ability.speed * speed_w + ability.strength * strength_w + ability.stamina * stamina_w + ability.health * health_w;
	ability.body_abi.toFixed(2);

	//技术属性，共四项
	var passing_w = 0.3; //传球权重值
	var touching_w = 0.3; //停球权重值
	var dribbling_w = 0.3; //盘带权重值
	var heading_w = 0.1; //头球权重值
	ability.tech_abi = ability.passing * passing_w + ability.touching * touching_w + ability.dribbling * dribbling_w + ability.heading * heading_w;
	ability.tech_abi.toFixed(2);

	//特殊属性，共两项
	var minding_w = 0.4; //意志力权重值
	var rating_w = 0.6; //出勤率权重值
	ability.spec_abi = ability.minding * minding_w + ability.rating * rating_w;
	ability.spec_abi.toFixed(2);

	//进攻属性，共三项
	var shoot_w = 0.3; //射门
	var offtheball_w = 0.45; //跑位
	var creativity_w = 0.25; //创造力
	ability.attack_abi = ability.shoot * shoot_w + ability.offtheball * offtheball_w + ability.creativity * creativity_w;
	ability.attack_abi.toFixed(2);

	//防守属性，共三项
	var taking_w = 0.35; //抢断
	var marking_w = 0.25; //盯人
	var positioning_w = 0.4; //防守站位
	ability.defence_abi = ability.taking * taking_w + ability.marking * marking_w + ability.positioning * positioning_w; //防守能力
	ability.defence_abi.toFixed(2);

	/*
	 * 
	 * 设置大项的属性条数值
	 * 
	 */
	body_progress.setAttribute('style', 'width: ' + ability.body_abi + '%');
	tech_progress.setAttribute('style', 'width: ' + ability.tech_abi + '%');
	spec_progress.setAttribute('style', 'width: ' + ability.spec_abi + '%');
	attack_progress.setAttribute('style', 'width: ' + ability.attack_abi + '%');
	defence_progress.setAttribute('style', 'width: ' + ability.defence_abi + '%');

	/*
	 * 
	 * 设置大项的属性条颜色
	 * 
	 */
	setProgessBarColor("body_abi_pg", ability.body_abi);
	setProgessBarColor("tech_abi_pg", ability.tech_abi);
	setProgessBarColor("spec_abi_pg", ability.spec_abi);
	setProgessBarColor("attack_abi_pg", ability.attack_abi);
	setProgessBarColor("defence_abi_pg", ability.defence_abi);

	$(function() {
	$('#highchartDiv').highcharts({
		chart: {
			polar: true,
			type: 'line'
		},
		title: {
			floating: true,
			text: ' ',
			x: -80
		},
		pane: {
			size: '80%'
		},
		xAxis: {
			categories: ['技术', '防守', '特殊', '身体', '进攻'],
			tickmarkPlacement: 'on',
			lineWidth: 0
		},
		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			max: 100,
			min: 0
		},
		tooltip: {
			shared: true,
			pointFormat: '<span style="color:{series.color}">{point.y:,.0f}'
		},
		legend: {
			align: 'right',
			verticalAlign: 'top',
			y: 120,
			x: 90,
			layout: 'vertical'
		},
		series: [{
			data: [ability.tech_abi, ability.defence_abi, ability.tech_abi, ability.body_abi, ability.attack_abi], 	//对应='技术', '防守', '特殊', '身体', '进攻'
			pointPlacement: 'on'
		}]

	});
});

	//	console.clear();	
	//	for (var key in ability) {
	//		if (ability[key] != 50) {
	//			console.log(key + "=" + ability[key]); //speed = xx
	//		}
	//	}

};

/*
 * 
 * 设置大项的属性条颜色
 * 
 */
function setProgessBarColor(abilityName, ability) {
	var level5 = '#d81919' //传奇
	var level4 = '#9900ff' //史诗
	var level3 = '#41aff9' //精良
	var level2 = '#5cb85c' //优秀
	var level1 = '#f0ad4e' //普通

	var progressBar = $('#' + abilityName);
	if (ability < 45) {
		progressBar.css({
			'background': level1
		});
	} else if (ability < 60) {
		progressBar.css({
			'background': level2
		});
	} else if (ability < 75) {
		progressBar.css({
			'background': level3
		});
	} else if (ability < 90) {
		progressBar.css({
			'background': level4
		});
	} else {
		progressBar.css({
			'background': level5
		});
	}


}


//提交事件
var joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener('click', submitABI, false);

function submitABI() {
	console.clear();
	for (var key in ability) {
		console.log(key + "=" + ability[key]); //speed = xx
	}
}



//改变slider-selection的颜色
//$('#tech_abbs1 .slider-selection').css('background', 'rgb(120, 142, 207)');
//$('.slider-selection').css('background', 'rgb(120, 142, 207)');

//改变背景颜色
//$('#'+abilityName).css({'background':'#9900ff'});

/* 
 ** 【  slider方法 】**
 * 
 * 	var g1 = $('#G').setValue(50); --设置数值
 *	console.log(g1.getValue()); --获取数值
 * 
 * 
 */