package com.demo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.org.apache.xpath.internal.functions.Function;

/**
 * Servlet implementation class A3GetPlayerData
 */
@WebServlet("/A3GetPlayerData")
public class A3GetPlayerData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public A3GetPlayerData() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/html; charset=utf-8");
		String remotehost = request.getRemoteHost();
		System.out.println(remotehost+":请求所有球员数据");						
		String jsonStr = createData(10);

		PrintWriter out = response.getWriter();
		out.flush();
		out.write(jsonStr.toString());

	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	protected String createData(int totalplayers) {

		String playerDataJson = "{";
		for (int i = 0 ; i<totalplayers; i++) {
			String name = "player"+ i; 
			String department = "";
			if (i%6==0){
				department="广州测试部";
			} else if(i%2==0) {
				department="广州开发一部";
			}else if(i%3==0) {
				department="广州开发三部";
			}else if(i%5==0) {
				department="广州开发二部";
			}else{
				department="广州研发支持部";
			}
			playerDataJson += ""
					+ "\""+name+"\" : {" 					
					+ "\"speed\":\"81\","
					+ "\"strength\":\"61\","
					+ "\"stamina\":\"85\","
					+ "\"health\":\"91\","
					+ "\"passing\":\"85\","
					+ "\"touching\":\"85\","
					+ "\"dribbling\":\"85\","
					+ "\"heading\":\"75\","
					+ "\"minding\":\"90\","
					+ "\"rating\":\"90\","
					+ "\"teamwork\":\"80\","
					+ "\"shoot\":\"80\","
					+ "\"offtheball\":\"85\","
					+ "\"creativity\":\"85\","
					+ "\"taking\":\"60\","
					+ "\"marking\":\"40\","
					+ "\"positioning\":\"60\","
					+ "\"department\":\""+department+"\"},";
			
		}
		
		playerDataJson += ""
				+ "\"zidane\" : {" 
				+ "\"speed\":\"81\","
				+ "\"strength\":\"61\","
				+ "\"stamina\":\"85\","
				+ "\"health\":\"91\","
				+ "\"passing\":\"85\","
				+ "\"touching\":\"85\","
				+ "\"dribbling\":\"85\","
				+ "\"heading\":\"75\","
				+ "\"minding\":\"90\","
				+ "\"rating\":\"90\","
				+ "\"teamwork\":\"80\","
				+ "\"shoot\":\"80\","
				+ "\"offtheball\":\"85\","
				+ "\"creativity\":\"85\","
				+ "\"taking\":\"60\","
				+ "\"marking\":\"40\","
				+ "\"positioning\":\"60\","
				+ "\"department\":\"广州研发支持部\"}}";
			

		return playerDataJson;

	}

}
