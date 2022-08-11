$(function() {

	var windowWidth = $(window).width();

	/*-------------------------------------------------------------
	element
	-------------------------------------------------------------*/ 

	// table

	$("table.tblBasic tr th:first-child, table.tblBasic tr:first-child, table.tblBasic tr td:first-child").addClass("first");
	$("table.tblBasic tr th:last-child, table.tblBasic tr:last-child, table.tblBasic tr td:last-child").addClass("last");

	// lnb

	var imgCon = $('.imgCon').each(function() {
		var listNum = $(this).find('li').length;
		var imgClass = "num0"+listNum;
		$(this).addClass(imgClass);
	});

	// tab menu

	var tabMenu = $('.tabMenu').each(function() {
		var listNum = $(this).find('li').length;
		var tabClass = "num0"+listNum;
		$(this).addClass(tabClass);
	});

	// main tab

	var mainBoardTabList = $('#mainBody .community ul.tab li');
	var mainBoardCon = $('#mainBody .community .content');
	mainBoardTabList.each(function() {
		var index = $(this).index() + 1;
		$(this).children('a').click(function(e) {
			e.preventDefault();
			mainBoardTabList.removeClass('active');
			mainBoardCon.removeClass('active');
			$('#mainBody .community .content.c'+index).addClass('active');
			$(this).parent('li').addClass('active');
		});
	});

	// top

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){
			$('.goTop').show();
		} else{
			$('.goTop').hide();
		}
	});
	$('.goTop').click(function(){
		$('html, body').animate({scrollTop:0},400);
		return false;
	});


	/*-------------------------------------------------------------
	gnb & location
	-------------------------------------------------------------*/ 

	// location 

	if ( typeof thisLocation !== "undefined" ) {
		menuDepth1 = thisLocation[0] - 1;
		menuDepth2 = thisLocation[1] - 1;
		menuDepth3 = thisLocation[2] - 1;
		menuDepth4 = thisLocation[3] - 1;

		console.log(thisLocation);

		if ( menuDepth1 < 0 ) {
			$('body').addClass('main');
		}

		var gnbList = $(".gnb > ul > li");
		var gnbSubList = $(currentGnbList).find("ul.sub li");
		var lnbList = $(".bodySide > ul.sub > li");
		var currentGnbList = $(gnbList[menuDepth1]).addClass("active");
		var currentgnbSubList = $(gnbSubList[menuDepth2]).addClass("active");
		var currentLnbList = $(lnbList[menuDepth2]).addClass("active");
	};

	// gnb

	$('#header .gnb > ul.list').hover(function(){
		$('#header .gnb').addClass('active');
	}, function(){
		$('#header .gnb').removeClass('active');
	});

	// sitemap

	$('#header .sitemap a.menu').click(function(e){
		e.preventDefault();
		$('#header .sitemap').toggleClass('active');
		$('body').toggleClass('menuOn');
	});


	/*-------------------------------------------------------------
	sitemap
	-------------------------------------------------------------*/ 

	//open the side menu

	$('#header a.menu').on('click', function(e){
		e.preventDefault();
		$('#sitemap').addClass('active');
		$('body').addClass('noScroll');
	});

	//close the side menu

	$('#sitemap').on('click', function(e){
		if( $(e.target).is('#sitemap') || $(e.target).is('.close') ) {
			e.preventDefault();
			$('#sitemap').removeClass('active');
			$('body').removeClass('noScroll');
		}
	});

	/*-------------------------------------------------------------
	tabs
	-------------------------------------------------------------*/ 

	// tabs

	var tabs = $('.tabs ul').each(function() {
		var listNum = $(this).find('li').length;
		var tabClass = "num0"+listNum;
		$(this).addClass(tabClass);
	});

	// tabs + contents

	$('.tabs ul li').each(function() {
		var thisIndex = $(this).index();
		$(this).children('a').click(function(e) {
			e.preventDefault();
			var tabsList = $(this).closest('li').siblings('li');
			var contents = $(this).closest('.tabs').siblings('.content').children('.con');
			var thisTarget = contents.eq(thisIndex);
			console.log(thisTarget);
			tabsList.removeClass('active');
			$(this).parents('li').addClass('active');
			contents.removeClass('active');
			thisTarget.addClass('active');
		});
	})


	/*-------------------------------------------------------------
	layer popup
	-------------------------------------------------------------*/ 

	//open layerpop

	$('a.layerpopup').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('active');
	});

	$('.layerpop button.close').on('click', function(e){
		$('.layerpop').removeClass('active');
	});

});
