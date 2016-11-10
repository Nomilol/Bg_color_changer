console.log('start');

(function(){
	var app = {

		init : function(){
			app.recupValueInput();

		},
		recupValueInput : function(){
			redValue = $('#red').val();
			greenValue = $('#green').val();
			blueValue = $('#blue').val();
			app.valueInputGreen();
			app.valueInputRed();
			app.valueInputBlue();
			console.log(redValue, greenValue, blueValue);

		},
		changeBodyColor : function(){
			
		},
		valueInputRed : function(){
			$('#red').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});

		},
		valueInputGreen : function(){
			$('#green').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});
		},
		valueInputBlue : function(){
			$('#blue').on('input', function(){
				$(this).next().text('--');
				var $set = $(this).val();
				$(this).next().text($set);
			});
		}
	}









	app.init();
})();