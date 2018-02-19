$(function(){

	var htmlchecked=false;
	var csschecked=false;
	var jschecked=false;
	
	var htmlAnswer=[];
	var cssAnswer=[];
	var jsAnswer=[];
	
	
    $("#btn_s").click(function(){
		$("#q1").show();
		$("#welcome").hide();
    });
	
	//email verification check 
	
	
	
	$("#btn_next").click(function(){
	
		var email = document.getElementById("email");
   		 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  
    if (!filter.test(email.value)){
       alert('Please provide a valid email address');   
       
		}else{
		$("#q2").show();
		$("#q1").hide();
		
		}
    });
	
	//email verification check 
	
	
	
	
	$("#btn_html").click(function(){
		
   $('input[name="likesHTML"]:checked').each(function() {
       htmlAnswer.push($(this).val());	
    });
		
	$("#q2").hide();	
	$("#q2a").show();
	
		
	console.log(htmlAnswer);
		htmlAnswer.forEach(function(value,index){
		console.log(value,index);	
		});	
	
	htmlchecked=true;
	
	$("#btn_snext").click(function(){
		
		$("#q2a").hide();
		$("#q2").show();
		if(htmlchecked == true && csschecked == true && jschecked == true ){
			$("#q3").show();
			$("#q2").hide();
	}
		
	});
		
	$("#btn_sprev").click(function(){
		$("#q2").show();
		$("#q2a").hide();
	});	
		
	});
					 
	
	
	
	
	$("#btn_css").click(function(){
		
			
$('input[name="likesCSS"]:checked').each(function() {
       cssAnswer.push($(this).val());	
    });
		
	$("#q2").hide();	
	$("#q2b").show();
		

	csschecked=true;
	
	$("#btn_pnext").click(function(){
		$("#q2b").hide();
		$("#q2").show();
		
		if(htmlchecked == true && csschecked == true && jschecked == true ){
			$("#q3").show();
			$("#q2").hide();
	}
	});
		
	$("#btn_pprev").click(function(){
		$("#q2").show();
		$("#q2b").hide();
	});	
		
	});
	
	
	
	$("#btn_js").click(function(){
	$('input[name="likesJS"]:checked').each(function() {
       jsAnswer.push($(this).val());	
    });			
		
	$("#q2").hide();	
	$("#q2c").show();
		

	jschecked=true;	
	
	$("#btn_jnext").click(function(){
		$("#q2c").hide();
		$("#q2").show();
		if(htmlchecked == true && csschecked == true && jschecked == true ){
			$("#q3").show();
			$("#q2").hide();
	}
	});
		
	$("#btn_jprev").click(function(){
		$("#q2").show();
		$("#q2c").hide();
		
	});	
		
	});
	
	
	var rhtml;
	var rcss;
	var rjs;
	
	$("#btn_rnext").click(function(){
		rhtml= $('input[name=rh]:checked').val();
		rcss= $('input[name=rc]:checked').val();
		rjs= $('input[name=rj]:checked').val();
		
		if($("input[name='rh']").is(':checked') && $("input[name='rc']").is(':checked')&& $("input[name='rj']").is(':checked')){
			$("#thanks").show();
			$("#q3").hide();
	}
	});
	
	$("#btn_rprev").click(function(){
		$("#q2").show();
		$("#q3").hide();
		
	});	
	
	
	$("#btn_view").click(function(){
		$("#q4").show();
		$("#thanks").hide();
		
		document.getElementById("str").innerHTML = rhtml;
		document.getElementById("cstr").innerHTML = rcss;
		document.getElementById("jstr").innerHTML = rjs;
		
		
		document.getElementById("ld").innerHTML = htmlAnswer.toString();
		document.getElementById("cld").innerHTML = cssAnswer.toString();
		document.getElementById("jld").innerHTML = jsAnswer.toString();
		
	});	
	
});
