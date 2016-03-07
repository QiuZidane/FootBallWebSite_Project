/********************************
 *
 * 下面是Slider的JS，有空在研究JQ...
 *
 *********************************/

// 身体的SLIDER
var bodeabbs1 = $('#bodeabbs1').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var bodeabbs2 = $('#bodeabbs2').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var bodeabbs3 = $('#bodeabbs3').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var bodeabbs4 = $('#bodeabbs4').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');


// 技术的SLIDER
var tech_abbs1 = $('#tech_abbs1').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var tech_abbs2 = $('#tech_abbs2').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var tech_abbs3 = $('#tech_abbs3').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var tech_abbs4 = $('#tech_abbs4').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');


// 特殊能力的SLIDER
var spec_abbs1 = $('#spec_abbs1').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var spec_abbs2 = $('#spec_abbs2').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');

// 进攻能力的SLIDER
var attack_abbs1 = $('#attack_abbs1').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var attack_abbs2 = $('#attack_abbs2').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var attack_abbs3 = $('#attack_abbs3').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');

// 防守能力的SLIDER
var defen_abbs1 = $('#defen_abbs1').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var defen_abbs2 = $('#defen_abbs2').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');
var defen_abbs3 = $('#defen_abbs3').slider()
	.on('slide', GETPlayerAbilities)
	.data('slider');


//球员能力对象,记录所有的能力   
var ability = {
	//大项:
	totalabi: 60,
	body: 60,
	tech: 60,
	spec: 60,
	attack: 60,
	defence: 60,
	//细项:
	speed: bodeabbs1.getValue(), //速度
	strength: bodeabbs2.getValue(), //强壮
	stamina: bodeabbs3.getValue(), //体能
	health: bodeabbs4.getValue(), //受伤抗性
	pass: tech_abbs1.getValue(), //传球
	dift: tech_abbs2.getValue(), //停球
	pass1: tech_abbs3.getValue(), //盘带
	heading: tech_abbs4.getValue(), //头球
	minding: spec_abbs1.getValue(), //意志力
	workrate: spec_abbs2.getValue(), //出勤率
	shotting: attack_abbs1.getValue(), //射门
	offtheball: attack_abbs2.getValue(), //跑位
	creating: attack_abbs3.getValue(), //创造力
	def1: defen_abbs1.getValue(), //抢断
	def2: defen_abbs2.getValue(), //抢断
	def3: defen_abbs3.getValue() //抢断


}

function GETPlayerAbilities() {
	//需要重新获取
	ability.speed = bodeabbs1.getValue(), //速度
		ability.strength = bodeabbs2.getValue(), //强壮
		ability.stamina = bodeabbs3.getValue(), //体能
		ability.health = bodeabbs4.getValue() //受伤抗性


//	for (var key in ability) {
//		console.log(key + "=" + ability[key]); //speed = xx
//	}

	//	console.log(ability.speed);
	//  console.log(bodeabbs1.getValue());

};

//计算能力：
function calABI() {

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
var tech_abbs1 = document.getElementById("tech_abbs1");
$('#tech_abbs1 .slider-selection').css('background', 'rgb(120, 142, 207)');


/* 
 ** 【  slider方法 】**
 * 
 * 	var g1 = $('#G').setValue(50); --设置数值
 *	console.log(g1.getValue()); --获取数值
 * 
 * 
 */