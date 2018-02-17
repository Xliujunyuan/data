

$(function(){/* 下拉菜单 */
 		  $("#right").find("li>div").hide().parent().hover(
 		  function(){
 		  /*this是li*/
 		  $(this).addClass("rightulli")
 		  .children("div").addClass("navdiv").show()
 		  /*a*/
 		  .children().children().addClass("navdiva")
 		  /*nav*/
 		  .parent().parent()
 		  /*div*/
 		  .children().hover(function(){ 
 		  	
 		  	/*这个是li下的div元素的div*/
			
 				if($(this).prop("id")=='')
 				{		
 		  			$(this).css("background-color","#F5F5F5");
 		  		}
 		  },
 		  function(){
 		  if($(this).prop("id")==''){
 		  $(this).css("background-color","");
 		  }
 		  
 		  })
 		  }
 		  
 		  ,function(){$(this).removeClass("rightulli").children("div").hide()}
 		   
 		  );
 		  				
 		 $("#right").find("li").hover(function(){
 		 				$(this).children("a").css("color","red") 		
 		 },
 		 function(){
 		 				$(this).children("a").css("color","") 
 		 } 
 		 )})
 		  
 		
 	  		
 	  				$(function(){
 	  					
 	  					$(".f").children(".ntn").hide().parent().hover(
 	  							
 	  							function(){
 	  										
 	  								$(this).children("a").addClass("menunav").css("color","red").next().show();
 	  											
 	  							}
 	  							,
 	  							
 	  							function(){
 	  								
 	  								$(this).children("a").removeClass("menunav").css("color","");
 	  								$(this).children("div").hide();
 	  							}
 	  					)
 	  				})
 	  			  			
 	  				
 	  				$(function(){
 	  							
 	  							$(".one").each(
 	  									function(){
 	  										if($(this).children(".clear").prevAll("div").length==2)
 	  											{
 	  											
 	  											$(this).children(":nth-child(2)").addClass("oneson");
 	  											
 	  											}
 	  										
 	  									}
 	  							)
 	 	  					
 	  				})
 	  				
 	  				
 	  				
 	  				
 	  			/* 判断浏览器 */
 	  			/* 火狐 */
 	  			$(function(){
 	  				if($.browser.mozilla)   
 	  			{		
 	  					if($.browser.version>20)
 	  						{
 	  				 $(".one").css("margin","-5px 10px 0px 0px").children("a").css({"margin":"0px 10px 0px 0px","font-size": "12px",
 	  				"line-height": "13px"})
 	  						}
 	  					else{
 	  						$(".one").css("margin","-3px 10px 0px 0px").children("a").css({"margin":"0px 10px 0px 0px","font-size": "12px",
 	  		 	  				"line-height": "13px"})
 	  					}
 	  			}
 	  				
 	  				
 	  			
 	   
 	  			})			 
 	  			
 	  			
 	  		
 	  			
 	  			