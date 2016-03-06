<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<title>Insert title here</title>
</head>
<body>
<!-- 读取session属性loginflag判断是否已登陆 1-已登录 0-未登录 -->
<%
	if (session.getAttribute("loginFlag") == "1" ){		
		/* System.out.println("已登录"); */
		pageContext.include("myabbs.html");		/* 跳转到个人属性页面 */
	} else {
		pageContext.include("login.html");		/* 跳转到登录页面 */
		/* session.setAttribute("loginFlag", "1");
		session.setMaxInactiveInterval(3);  */
	}		
%> 
</body>
</html>