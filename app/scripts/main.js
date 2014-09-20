//Old method
$('.accordion p:nth-child(even)').hide();
  $('.accordion p:nth-child(odd)').click(function(){
    $('.accordion p:nth-child(even)').hide();
      $(this).next().show();
	});

//Class Method
// $('.tab').on('click', function () {
//   $(this).parent().removeClass('hidden').siblings().addClass('hidden');
// });