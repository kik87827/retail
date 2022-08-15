
document.addEventListener("DOMContentLoaded", function(){
	mvFunc();
});

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