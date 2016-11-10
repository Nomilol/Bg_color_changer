console.log('start');

(function(){
	var app = {
		init : function(){
			app.recupColorInput();
		},
		recupColorInput : function(){
			redValue = $('#red').val();
			greenValue = $('#green').val();
			blueValue = $('#blue').val();
			console.log(redValue, greenValue, blueValue);
		}
	}









	app.init();
})();