$(function(){
		//메인 풀페이지


		$("#main_page").fullpage({
				links:["company","artist","playlist","News","Music_Brand"],
				anchors:["company","artist","playlist","News","Music_Brand"],
				menu:"#main_menu",
				'afterLoad': function(anchorLink, index){
					if(index == 1){
						$('.index-logo,.main1_img').addClass('bounceIn animated');

						
					}else{
						$('.index-logo,.main1_img').removeClass('bounceIn animated');
						$('.play-slider').css({"display":"block"});
					}

					if(index == 2){
						
						$('.main2_txt').addClass('mactive');
					}else{$('.main2_txt').removeClass('mactive');}
						  
					if(index == 3){
						$('.main3_txt').addClass('mactive');
					}else{$('.main3_txt').removeClass('mactive');}

					if(index == 4){
						$('.main4_txt').addClass('mactive');
					}else{$('.main4_txt').removeClass('mactive');}
					if(index == 5){
						$('.main4_txt').addClass('mactive');
					}else{$('.main4_txt').removeClass('mactive');}
				}
				
			});

		/*스크롤 상단메뉴*/
		/*var $menu = $(".menu_container");
		var $menuPos = $menu.offset().top;

		$(window).on("scroll",function(){
			var scrollY = window.pageYOffset;
			console.log(scrollY);
			if (scrollY > 0) {
				$(".menu_container").addClass("fixed fadeInDown animated");
				$(".").addClass("");
			}else{
				$(".menu_container").removeClass("fixed fadeInDown animated");
			}
		});*/
		//메뉴 토글
			
			$(".toggle").click(function(){
					$(".toggle").hide();
					$("#main_toggle").animate({right:0});
					$(".close-but").show();
					$(".lnew_title-wrap").addClass("active")
			});
			$(".close-but").click(function(){
				$(".close-but").hide();
				$("#main_toggle").animate({right:-2000});
				$(".toggle").show();
			});
			$(".toggle_menu ul li").click(function(){
				$(".close-but").hide();
				$("#main_toggle").animate({right:-2000});
				$(".toggle").show();
			});
				
			setInterval(function(){Button()},500);
	     	function Button(){
	     	$(".close-but").animate({"top":"2px"},500);
	     	$(".close-but").animate({"top":"8px"},500);	
			}
			
			$(".toggle_menu ul.toggle-gnb li a").hover(function(){
				$(this).addClass("active")
			},function(){
				$(this).removeClass("active")
			});
	});
