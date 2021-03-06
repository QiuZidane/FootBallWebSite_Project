<!-- /***************************
*
*   created by qiusd on 2016-03-13
*   cooperation xxx
*
*   1、index.html是主页面
*   2、导航按钮会将其他页面加载到index.html的<div class="middleDiv" id="middleDivDes"> 
*   3、其他页面样式参照welcomepage.html/welcomepage.css编写
*
*   ***球员属性页面***
*   
****************************  / -->
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<html>
	<head>
		<meta charset="utf-8">
		<title>足球大本营</title>

		<link href="../css/bootstrap/bootstrap-slider.css" rel="stylesheet">
		<link href="../css/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="../css/square/blue.css" rel="stylesheet">
		<script type="text/javascript" src="../js/third/jquery.min.js"></script>
		<script type="text/javascript" src="../js/third/bootstrap.min.js"></script>
		<script type='text/javascript' src="../js/third/bootstrap-slider.js"></script>
		<script type="text/javascript" src="../js/third/ajaxrequest.js"></script>
		<script type='text/javascript' src="../js/third/icheck.min.js"></script>

	</head>

	<body>
		<div class="middleDiv" id="middleDivDes">
			<!-- 说明 -->
			<div id="explainDiv"></div>
			<!-- 卡位用 -->
			<div id="chart_Div1">
				<!--头像-->
				<div id="userheadDiv"></div>
				<div id="userinfoDiv">
					<div id="usernameDiv">
						球员：<span id="usernameId">宁伟晓君</span>
					</div>
					<div id="departmentDiv">
						部门：<span id="departmentId">广州行政部</span>
					</div>
					<div id="ability">
						战力：<span id="abilityId">85</span>
					</div>
				</div>
				<!--highchart-->
				<div id="highchartDiv"></div>
			</div>

			<!-- 体质 -->
			<div id="bodeDiv">
				<div class="abbsBG">
					<div id="bodeDivtitle">体质</div>
					<div class="progress" id="bodeprogress">
						<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 52%;" id="body_abi_pg"></div>
					</div>
				</div>
				<div id="bodeabbsdiv">
					<div class="bodedesc">
						速度
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="bodeabbs1" id="bodeabbs1" data-slider-handle="round" />
					</div>

					<div class="bodedesc">
						强壮
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="bodeabbs2" id="bodeabbs2" data-slider-handle="round" />
					</div>

					<div class="bodedesc">
						体能
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="bodeabbs3" id="bodeabbs3" data-slider-handle="round" />
					</div>

					<div class="bodedesc">
						受伤抗性
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="bodeabbs4" id="bodeabbs4" data-slider-handle="round" />
					</div>
				</div>
			</div>

			<!-- 技术能力 -->
			<div id="tech_Div">
				<div class="abbsBG">
					<div id="tech_Divtitle">技术</div>
					<div class="progress" id="tech_progress">
						<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" id="tech_abi_pg"></div>
					</div>
				</div>
				<div id="tech_abbsdiv">
					<div class="tech_desc">
						传球
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="tech_abbs1" id="tech_abbs1" data-slider-handle="round" />
					</div>

					<div class="tech_desc">
						停球
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="tech_abbs2" id="tech_abbs2" data-slider-handle="round" />
					</div>

					<div class="tech_desc">
						盘带
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="tech_abbs3" id="tech_abbs3" data-slider-handle="round" />
					</div>

					<div class="tech_desc">
						头球
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="tech_abbs4" id="tech_abbs4" data-slider-handle="round" />
					</div>
				</div>
			</div>

			<!-- 特殊 -->
			<div id="spec_Div">
				<div class="abbsBG">
					<div id="spec_Divtitle">特殊</div>
					<div class="progress" id="spec_progress">
						<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" id="spec_abi_pg"></div>
					</div>
				</div>
				<div id="spec_abbsdiv">
					<div class="spec_desc">
						意志力
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="spec_abbs1" id="spec_abbs1" data-slider-handle="round" />
					</div>
					<div class="spec_desc">出勤率
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="spec_abbs3" id="spec_abbs3" data-slider-handle="round" />
					</div>
					<div class="spec_desc">团队意识
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="spec_abbs2" id="spec_abbs2" data-slider-handle="round" />
					</div>
				</div>
			</div>

			<!-- 卡位用 -->
			<div id="chart_Div2"></div>

			<!-- 进攻能力 -->
			<div id="attack_Div">
				<div class="abbsBG">
					<div id="attack_Divtitle">进攻</div>
					<div class="progress" id="attack_progress">
						<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" id="attack_abi_pg"></div>
					</div>
				</div>
				<div id="attack_abbsdiv">
					<div class="attack_desc">
						射门
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="attack_abbs1" id="attack_abbs1" data-slider-handle="round" />
					</div>

					<div class="attack_desc">
						跑位
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="attack_abbs2" id="attack_abbs2" data-slider-handle="round" />
					</div>

					<div class="attack_desc">
						创造力
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="attack_abbs3" id="attack_abbs3" data-slider-handle="round" />
					</div>

				</div>
			</div>

			<!-- 防守能力 -->
			<div id="defen_Div">
				<div class="abbsBG">
					<div id="defen_Divtitle">防守</div>
					<div class="progress" id="defen_progress">
						<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" id="defence_abi_pg"></div>
					</div>
				</div>
				<div id="defen_abbsdiv">
					<div class="defen_desc">
						抢断
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="defen_abbs1" id="defen_abbs1" data-slider-handle="round" />
					</div>

					<div class="defen_desc">
						盯人
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="defen_abbs2" id="defen_abbs2" data-slider-handle="round" />
					</div>

					<div class="defen_desc">
						防守站位
						<input type="text" class="sliderClass" value="" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="50" data-slider-id="defen_abbs3" id="defen_abbs3" data-slider-handle="round" />
					</div>
				</div>
			</div>
			<!-- 卡位用 -->
			<div id="chart_Div3">
				<div id="returnBtnDiv">
					<button type="button" class="btn btn-success btn-block btn-lg" id="returnBtn" onclick="document.location.href=localStorage.getItem('lastpage')">返 回</button>
				</div>
			</div>
			<div id="submitResultDesc"></div>
			<!-- middleDiv结束 -->
		</div>

		<!--自定义-->
		<link rel="stylesheet" type="text/css" href="../css/playerabi.css">
		<!--自定义-->
		<script type="text/javascript" src="../js/constants.js"></script>
		<script type="text/javascript" src="../js/playerabi.js"></script>

		<script type='text/javascript' src="../js/third/echarts.min.js"></script>

		<!--<script type='text/javascript' src="../js/third/highcharts.js"></script>
		<script type='text/javascript' src="../js/third/highcharts-more.js"></script>
		<script type='text/javascript' src="../js/third/grid-light.js"></script>-->

		<script type="text/javascript">
			<%
		String playername = request.getParameter("name");
		%>			
			AjaxPost("<%=playername%>"); //获取服务器端数据
			setSliderStatus(false); //禁止使用slider --> 该页面只能查看
		</script>
	</body>

	</html>