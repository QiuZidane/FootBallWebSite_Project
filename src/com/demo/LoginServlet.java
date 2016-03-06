package com.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sun.management.counter.Variability;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=utf-8");
//		验密码是否正确即可
		if (request.getParameter("name").equals("zidane".toString())) {
			if (request.getParameter("password").equals("1234".toString())) {
				System.out.println("正确");						
				String jsonStr = ""
						+ "{\"speed\":\"90\","
						+ "\"tech\":\"86\"}";
				PrintWriter out = response.getWriter();
				out.flush();
				out.write(jsonStr.toString());
//				System.out.println("输出="+jsonStr.toString());	
				
				// loginFlag = 1
				HttpSession session = request.getSession();
				session.setAttribute("loginFlag", "1");
				session.setAttribute("username", "zidane");
				session.setMaxInactiveInterval(10);
			} else {
				System.out.println("密码错误");
			}
		} else {
			
			System.err.println("不存在用户名"+request.getParameter("name"));
			
		}

	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
