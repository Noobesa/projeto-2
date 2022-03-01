

$(function(){

		$('.mosaico .center .mosaico-1st').slick({
			centerMode:false,
			slidesToShow:6,
			arrow:false,
			responsive:[

			{breakpoint:768,
			 settings:{

				arrows:false,
				centermode:true,
				slidesToShow:3,} /*<--Chaves settings1*/ }, /*<--Chaves breakpoint1*/


			{breakpoint:580,
			 settings:{
			 	
			 	arrows:false,
			 	centerMode:true,
			 	slidesToShow:2,} /*<--Chaves settings2*/ }, /*<--Chaves breakpoint2*/ 


			{breakpoint:380,
			 settings:{
				
				arrows:false,
			 	centerMode:true,
			 	slidesToShow:1,} /*<--Chaves settings3*/ }, /*<--Chaves breakpoint3*/ 

			] /* <--responsive 1 */
			
		});


		$('.tratamentos .center').slick({
			centerMode:false,
			arrows:false,
			slidesToShow:3,
			infinite:false,
			responsive:[

			{breakpoint:768,
			 settings:{
			 	centerMode:false,
			 	dots:true,
			 	infinite:false,
			 	arrows:false,
			    slidesToShow:2,} /*<--Chaves settings4*/  },/*<--Chaves breakpoint4*/
			

			{breakpoint:480,
			 settings:{
			 	centerMode:false,
			 	arrows:false,
			 	dots:true,
			 	infinite:false,
			    slidesToShow:1,} /*<--Chaves settings5*/ },/*<--Chaves breakpoint5*/ 
			 

			]/* <--responsive 2 */

		});

		$('.depoimentos .center').slick({
			centerMode:false,
			arrows:false,
			dots:true,
			slidesToShow:1,
			infinite:false,
		});
})
