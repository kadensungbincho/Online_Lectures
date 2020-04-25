package com.virtualpairprogrammers.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.virtualpairprogrammers.data.MenuDataService;
import com.virtualpairprogrammers.domain.MenuItem;

public class OrderReceivedServlet extends HttpServlet {
	
	public void doPost (HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		MenuDataService menuDataService = new MenuDataService();
		
		int maxId = menuDataService.getFullMenu().size();
		for (int i = 0; i <maxId; i++) {
			String quantity = request.getParameter("item_" + (i+1));
			 try  
			  {  
			    int q = Integer.parseInt(quantity);
			    if (q > 0) menuDataService.addToOrder(menuDataService.getItem(i), q);
			  }  
			  catch(NumberFormatException nfe)  
			  {  
			    //that's fine it just means there wasn't an order for this item 
			  }  
			  
		}
		
		Double total = menuDataService.getOrderTotal();
	
		HttpSession session = request.getSession();
		session.setAttribute("total", total);
		
		String redirectUrl = "/thankYou.html";
		redirectUrl = response.encodeURL(redirectUrl);
		response.sendRedirect(redirectUrl);
	}
}
