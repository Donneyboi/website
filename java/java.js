$(document).ready(function () {
$('.categrory').show();
$('.chart').hide();
$('.user').hide();


$('.c').on('click',function () {
$('.categrory').show();
$('.chart').hide();
$('.user').hide();
})


$('.cc').on('click',function () {
$('.categrory').hide();
$('.chart').show();
$('.user').hide();
})



$('.u').on('click',function () {
$('.categrory').hide();
$('.chart').hide();
$('.user').show();
})

$('.men').hide();
$('.woman').hide();
$('.kid').hide();

$('.seemen').on('click', function () {
$('.men').show(1000);
$('.woman').hide(1000);
$('.kid').hide(1000);

})


$('.seewoman').on('click', function () {
$('.men').hide(1000);
$('.woman').show(1000);
$('.kid').hide(1000);

})


$('.seekid').on('click', function () {
$('.men').hide(1000);
$('.woman').hide(1000);
$('.kid').show(1000);

})


$('.backman').on('click', function () {
	$('.men').hide(1000)
})

$('.backwoman').on('click', function () {
	$('.woman').hide(1000)
})

$('.backkid').on('click', function () {
	$('.kid').hide(1000)
})



$('.shirt').show();
$('.trouser').hide();
$('.shoe').hide();


$('.s').on('click', function () {
$('.shirt').show(1000);
$('.trouser').hide(1000);
$('.shoe').hide(1000);
})



$('.t').on('click', function () {
$('.shirt').hide(1000);
$('.trouser').show(1000);
$('.shoe').hide(1000);
})


$('.ss').on('click', function () {
$('.shirt').hide(1000);
$('.trouser').hide(1000);
$('.shoe').show(1000);
})

$('.hiddenform').hide();
$('.hiddenformopen').on('click',function () {
$('.hiddenform').show(1000);
})

$('.hiddenformback').on('click',function () {
$('.hiddenform').hide(1000);
})


$('.shiping').hide();                                                 
$('.shippingopen').on('click',function () {
$('.shiping').show(1000);
})

$('.shipingback').on('click',function () {
$('.shiping').hide(1000);
})


$('.payment').hide();
$('.showpayment').on('click',function () {
$('.payment').show(1000);
})

$('.closepayment').on('click',function () {
$('.payment').hide(1000);
})


$('.atm').hide();
$('.showatm').on('click',function () {
$('.atm').show(1000);
})

$('.closeatm').on('click',function () {
$('.atm').hide(1000);
})
$('.cdetalie').show(1000);
$('.showclothedetale').on('click', function () {
$('.cdetalie').show(1000);
})

$('.closecdetalie').on('click',function () {
$('.cdetalie').hide(1000);
})


})