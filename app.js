console.log('start');

(function(){
	var app = {

		init : function(){
			app.recupValueInput();
			app.listeners();
			
		},
		listeners : function(){
			$('.color').on('input',app.recupValueInput);
			
			
		},
		recupValueInput : function(){
			var redValue = $('#red').val();
			var greenValue = $('#green').val();
			var blueValue = $('#blue').val();
			$('body').css('backgroundColor','rgb('+redValue+', '+greenValue+','+blueValue+')');
			console.log(redValue, greenValue, blueValue);
			app.valueInput();

		},
		changeBodyColor : function(){
			
		},
		valueInput : function(){
			$('#red').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});

			$('#green').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});

			$('#blue').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});
		},
		changeColor : function(){

		}
	}









	app.init();
})();