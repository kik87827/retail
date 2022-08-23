
document.addEventListener("DOMContentLoaded", function(){
	mvFunc();
	mcBoardTab();
	linkageLeftBg();
	quickCircleLayer();
	boxToggle();
	formFunc();
	headerFunc();
	window.addEventListener("resize", () => {
		linkageLeftBg();
	},false);
});

function headerFunc(){
	let sitemapMenu = document.querySelectorAll("#sitemap li.gnbDropMenu > a");
	if(sitemapMenu.length===0){return;}
	sitemapMenu.forEach((element)=> {
		element.addEventListener("click",(e)=>{
			e.preventDefault();
			let currentTarget = e.currentTarget;
			let currentTargetParent = currentTarget.parentNode;

			currentTargetParent.classList.toggle("active");
		},false);
	})
}

function formFunc(){
	addDynamicEventListener(document.body, 'click', '.dropMenu', function (e) {
        e.preventDefault();
		console.log(e.target);
        e.target.closest(".dropMenu").classList.toggle("active");
    });
}

function mvFunc(){
	const main_contents = document.querySelector(".main_contents");
	const mv_fieldset_input = document.querySelector(".mv_fieldset_input");
	if(main_contents === null){return;}
	mv_fieldset_input.addEventListener("focus",(e) => {
		let curentTarget = e.currentTarget;
		let curentTargetParent = curentTarget.closest(".mv_fieldset");
		if(curentTargetParent !== null){
			curentTargetParent.classList.toggle("focus");
		}
	},false);
	mv_fieldset_input.addEventListener("focusout",(e) => {
		let curentTarget = e.currentTarget;
		let curentTargetParent = curentTarget.closest(".mv_fieldset");
		if(curentTargetParent !== null){
			curentTargetParent.classList.remove("focus");
		}
	},false);
}

function popularRankFunc(){
	let popularRank = null;
	const mc_popular_slide = document.querySelectorAll(".mc_popular_container .swiper-slide");
	if(mc_popular_slide.length<=1){return;}
	if(popularRank === null){
		popularRank = new Swiper(".mc_popular_container", {
			autoHeight : true,
			direction: "vertical",
			resistanceRatio: '0',
			allowTouchMove: false,
			loop : true,
			speed : 520,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
		});
	}else {
		popularRank.update();
	}
}

function consumerRankFunc(){
	let consumerRank = null;
	const mc_consumer_slide = document.querySelectorAll(".mc_consumer_container .swiper-slide");
	if(mc_consumer_slide.length<=1){return;}
	if(consumerRank === null){
		consumerRank = new Swiper(".mc_consumer_container", {
			autoHeight : true,
			direction: "vertical",
			resistanceRatio: '0',
			allowTouchMove: false,
			loop : true,
			speed : 520,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
		});
	}else {
		consumerRank.update();
	}
}

function mcbannerFunc(){
	let mc_banner_obj = null;
	const mc_banner_slide = document.querySelectorAll(".mc_banner_container .swiper-slide");
	if(mc_banner_slide.length<=1){return;}
	if(mc_banner_obj === null){
		mc_banner_obj = new Swiper(".mc_banner_container", {
			resistanceRatio: '0',
			allowTouchMove: false,
			loop : true,
			speed : 520,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.btn_banner_control.next',
				prevEl: '.btn_banner_control.prev',
			},
			pagination: {
				clickable: true,
				el: ".mc_banner_wrap .swiper-pagination",
			},
		});
	}else {
		mc_banner_obj.update();
	}
}

function linkageLeftBg(){
	const left_bg = document.querySelector(".mc_board_obj_wrap .left_bg");
	const mc_board_tabmenu_cols = document.querySelector(".mc_board_tabmenu_cols");
	let windowWid = 0;
	let mc_board_tabmenu_cols_pos = 0;
	let mc_board_tabmenu_cols_wid = 0;
	if(windowWid == window.innerWidth){return;}
	if(left_bg !== null){
		left_bg.style.removeProperty("width");
		mc_board_tabmenu_cols_pos = mc_board_tabmenu_cols.getBoundingClientRect().left;
		mc_board_tabmenu_cols_wid = mc_board_tabmenu_cols.getBoundingClientRect().width;
		left_bg.style.width = mc_board_tabmenu_cols_pos + mc_board_tabmenu_cols_wid-28 + "px";
	}
	windowWid = window.innerWidth;
}

function mcBoardTab(){
	const mc_board_tabmenu = document.querySelectorAll(".mc_board_tabmenu");
	if(mc_board_tabmenu.length){
		currentItem = document.querySelector(".mc_board_tabmenu_list > li.active");
		mc_board_tabmenu.forEach((element) => {
			element.addEventListener("click",(e) => {
				let currentTarget = e.currentTarget;
				let currentTargetContent = document.querySelector(currentTarget.getAttribute("href"));
				let currentTargetContentNot = siblings(currentTargetContent);
				let currentTargetParent = currentTarget.closest("li");
				let currentTargetParentNot = siblings(currentTargetParent);
				e.preventDefault();

				currentTargetContentNot.forEach( (elem,index) => {
					elem.classList.remove("active");
				});
				currentTargetParentNot.forEach( (elem,index) => {
					elem.classList.remove("active");
				});

				currentTargetContent.classList.add("active");
				currentTargetParent.classList.add("active");
			},false);
		});
	}
}

function quickCircleLayer(){
	const goTop = document.querySelector(".goTop");
	const quick_layer_wrap = document.querySelector(".quick_layer_wrap");
	const footer = document.querySelector("#footer");
	let footerHeight = footer !== null ? footer.scrollHeight : 0;
	let scrollTop = 0;
	
	window.addEventListener("scroll", (e) => {
		scrollTop = window.scrollY || window.pageYOffset;
		let document_obj = document.documentElement;
		let offset_pos = scrollTop + window.innerHeight;
		let height_value = document_obj.offsetHeight;
		// if(scrollTop >= height_value){
		// 	console.log('bottom');
		// }
		if(document_obj.scrollHeight - window.innerHeight <= scrollTop){
			if(goTop !== null){
				goTop.style.bottom = (footerHeight+40) + "px";
			}
			if(quick_layer_wrap !== null){
				quick_layer_wrap.style.bottom = footerHeight + "px";
			}
		}else{
			if(goTop !== null){
				goTop.style.bottom = "40px";
			}
			if(quick_layer_wrap !== null){
				quick_layer_wrap.style.bottom = "0px";
			}
		}
	},false);
}


function siblings(t) {
    var children = t.parentElement.children;
    var tempArr = [];

    for (var i = 0; i < children.length; i++) {
        tempArr.push(children[i]);
    }

    return tempArr.filter(function(e){
        return e != t;
    });
}


function queryDomCheck(target){
	let target_dom = document.querySelector(target) || document.querySelectorAll(target);
	if(target_dom === null || target_dom.length === 0){
		return null;
	}
}

function boxToggle(){
	const btn_boxtoggle = document.querySelector(".btn_boxtoggle");
	if(btn_boxtoggle === null){return;}
	btn_boxtoggle.addEventListener("click" , (e) => {
		e.preventDefault();
		let thisObj = e.currentTarget;
		let thisObjParent = thisObj.closest(".has_toggle");
		let target = thisObjParent.querySelector(".toggle_content");
		thisObj.classList.toggle("active");
		target.classList.toggle("active");
	},false);
}



function tabFunc(tab){
	
	const tabmenu = document.querySelectorAll(tab);

	tabmenu.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();
			let thisObj = e.currentTarget;
			let thisObjParent = thisObj.closest("li");
			let thisObjParentNot = siblings(thisObjParent);
			let thisTarget = document.querySelector(thisObj.getAttribute("href"));
			let thisTargetNot = null;
			console.log(thisTarget === undeinfed);
			if(thisTarget !== null || thisTarget !== undefined){
				thisTargetNot = siblings(thisTarget);
				thisTargetNot.forEach( (elem,index) => {
					elem.classList.remove("active");
				});
				thisTarget.classList.add("active");
			}
			thisObjParentNot.forEach( (elem,index) => {
				elem.classList.remove("active");
			});

			thisObjParent.classList.add("active");
		},false);
	});
}


function scrollTableFunc(){
	const table_fixed_zone_tr = document.querySelectorAll(".table_fixed_zone tbody tr");
	const table_scroll_zone = document.querySelector(".table_scroll_zone");
	const table_scroll_zone_tr = document.querySelectorAll(".table_scroll_zone tbody tr");
	
	let isDown = false;
	let startX;
	let scrollLeft;

	table_fixed_zone_tr.forEach((element,index) => {
		let trindex = index;
		let trelement = element;
		let maxHeight = Math.max(trelement.offsetHeight, table_scroll_zone_tr[index].offsetHeight);
		trelement.children[0].style.height = maxHeight + "px";
		table_scroll_zone_tr[trindex].children[0].style.height = maxHeight + "px";
	});
	table_scroll_zone.addEventListener("wheel", (e) => {
		let thisObj = e.currentTarget;
		let scrollLeftValue = thisObj.scrollLeft;
		e.preventDefault();
		thisObj.scrollLeft = scrollLeftValue + e.deltaY;
	},false);
	table_scroll_zone.addEventListener('mousedown', (e) => {
		isDown = true;
		table_scroll_zone.classList.add('active');
		startX = e.pageX - table_scroll_zone.offsetLeft;
		scrollLeft = table_scroll_zone.scrollLeft;
	});
	table_scroll_zone.addEventListener('mouseleave', () => {
		isDown = false;
		table_scroll_zone.classList.remove('active');
	});
	table_scroll_zone.addEventListener('mouseup', () => {
		isDown = false;
		table_scroll_zone.classList.remove('active');
	});
	table_scroll_zone.addEventListener('mousemove', (e) => {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - table_scroll_zone.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		table_scroll_zone.scrollLeft = scrollLeft - walk;
		console.log(walk);
	});
}


function tabmenuActiveFunc(target){
	let tabtarget = document.querySelectorAll(target);
	if(tabtarget.length===0 || tabtarget === undefined){return;}
	tabtarget.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();
			console.log(e.curentTarget)
		},false);
	});
}