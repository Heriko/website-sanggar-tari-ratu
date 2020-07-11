// event pada saat klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	$('html , body').animate({
	  scrollTop: elemenTujuan.offset().top - 40
	 });

	 e.preventDefault();﻿
});