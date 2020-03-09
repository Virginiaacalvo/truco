 

var eq1;
var eq2;
var puntos1;
var puntos2;
var mj;
$(document).ready(function(){







	function acumula(n){
		//acumular puntuacio 
				if (n==1){ puntos1++;            //falta imagenes
				}
				else{ 	puntos2++;	 			//falta imagenes					
				}
			}
	
		function agrega(eq,p){
			if (eq==1) {
				if (p>=0 && p<=5)   {
						$("#p11").attr("src",p+".png");                 
					}
					else if( p>5 && p<=10){
						p=p-5;
							$("#p12").attr("src",p+".png");  
					}
							else if( p>10 && p<=15){
								p=p-10;
								$("#p13").attr("src",p+".png");  
							}
								else if( p>15 && p<=20){
									p=p-15;
									$("#p14").attr("src",p+".png");  
								}
									else if( p>20 && p<=25){
										p=p-20;
										$("#p15").attr("src",p+".png"); 
									}
										else if ( p>25 && p<=30){
											p=p-25;
											$("#p16").attr("src",p+".png"); 
										}
			}
			
			
			
			else { if (p>=0 && p<=5)   {
				$("#p21").attr("src",p+".png");                 
			}
			else if( p>5 && p<=10){
				p=p-5;
					$("#p22").attr("src",p+".png");  
			}
					else if( p>10 && p<=15){
						p=p-10;
						$("#p23").attr("src",p+".png");  
					}
						else if( p>15 && p<=20){
							p=p-15;
							$("#p24").attr("src",p+".png");  
						}
							else if( p>20 && p<=25){
								p=p-20;
								$("#p25").attr("src",p+".png"); 
							}
								else if( p>25 && p<=30){
									p=p-25;
									$("#p26").attr("src",p+".png"); 
								}
									
	
				
			}
	
	
	
	
	
	
		}


	$("#a24").on("click",function(){
		mj=24;
		
	});

	$("#a30").on("click",function(){
		mj=30;
		
	});
	
	$("#iniciaJuego").on("click",function(){
		if (mj==undefined){alert("no se ha seleccionado un modo de juego capo")}
		else{
		 puntos1=0;
		 puntos2=0;  
		 eq1 = $("#eq1").val() 
		 eq2 = $("#eq2").val() ;
		 console.log("valor 1"+ eq1);
		 console.log("valor 2"+ eq2);
		 console.log("modo"+mj);
		 
		 $("#nombreEq1").val(eq1);
		 $("#nombreEq2").val(eq2);
		 $("#pag1").removeClass("visible").addClass("oculto");
		 $("#pag2").removeClass("oculto").addClass("visible"); 
		}
	});



	$("#sumaEq1").on("click",function(){
		var op = acumula(1);
		$("#puntaje1").val(op);
		console.log("punto1="+ puntos1);
		agrega(1,puntos1);
		if (puntos1>mj){
			
			reset();
			alert("EL GANADOR ES "+eq1) 
				}
	});

	$("#sumaEq2").on("click",function(){
		var op = acumula(2);
		$("#puntaje2").val(op);
		console.log("punto2="+ puntos2);
		agrega(2,puntos2);
		if (puntos2>=mj){
			alert("EL GANADOR ES "+eq2) 
			reset();
			
			}
	});


	$("#finJuego").on("click",function(){

			
			$("#pag2").removeClass("visible").addClass("oculto");
			$("#pag1").removeClass("oculto").addClass("visible");
			reset();
		});










	function reset(){
		puntos1=0;
		puntos2=0;
		mj=undefined;
		eq1=undefined;
		eq2=undefined;
		$("#pag2").removeClass("visible").addClass("oculto");
		$("#pag1").removeClass("oculto").addClass("visible");
			$("#p11").attr("src","0.png"); 
			$("#p12").attr("src","0.png"); 
			$("#p13").attr("src","0.png"); 
			$("#p14").attr("src","0.png"); 
			$("#p15").attr("src","0.png"); 
			$("#p16").attr("src","0.png"); 
			$("#p21").attr("src","0.png"); 
			$("#p22").attr("src","0.png"); 
			$("#p23").attr("src","0.png"); 
			$("#p24").attr("src","0.png"); 
			$("#p25").attr("src","0.png"); 
			$("#p26").attr("src","0.png"); 
	}
	









}); 
 