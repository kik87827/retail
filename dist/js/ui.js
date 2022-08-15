
document.addEventListener("DOMContentLoaded", function(){
	mainContent();
});

function mainContent(){
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