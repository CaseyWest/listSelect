$(function() {
	$('input:checkbox').each(function(index) { $(this).attr('data-order', index); });

	var startIndex = -1;
	$('input:checkbox').on('click', function(event) {
		if(event.shiftKey) {
			var endIndex = $(this).attr('data-order');

			if(startIndex < endIndex) {
				$('input:checkbox').each(function(index) {
					if($(this).attr('data-order') > startIndex && $(this).attr('data-order') < endIndex) {
						$(this).prop("checked", true);
					}
				});
			} else {
				$('input:checkbox').each(function(index) {
					if($(this).attr('data-order') < startIndex && $(this).attr('data-order') > endIndex) {
						$(this).prop("checked", true);
					}
				});
			}
		} else {
			startIndex = $(this).attr('data-order');
			console.log('startIndex: ' + startIndex);
		}
	});

	$('#clearButton').click(function() {
		startIndex = -1;
		$('input:checkbox').each(function(index) { 
			$(this).prop('checked', false);
		});

		$('.message').addClass('hide');
		$('.message').html("");
	});

	$('#claimButton').click(function() {
		$('.message').removeClass('hide');

		var claimedWork = "";
		$('input:checkbox:checked').each(function(index) {
			claimedWork += $(this).attr('data-order') + ", ";
		});

		$('.message').append(claimedWork);
	})
});