function IsNumeric(n){
    return !isNaN(n);
} 

$(function(){
	
    $("#getit").click(function() {
    
        var numLow = 1;//$("#lownumber").val();
        var numHigh = 9;//$("#highnumber").val();
        
        var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
        
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
        
        if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
            $("#randomnumber").text(numRand);
        } else {
            $("#randomnumber").text("Careful now...");
        }
        
        return false;
    });
    
    $("input[type=text]").each(function(){
        $(this).data("first-click", true);
    });
    
    $("input[type=text]").focus(function(){
       
        if ($(this).data("first-click")) {
            $(this).val("");
            $(this).data("first-click", false);
            $(this).css("color", "black");
        }
        
    });
	
});

$(function(){
	
    $("#getedge").click(function() {
    
        var numLow = 1;//$("#lownumber").val();
        var numHigh = 4;//$("#highnumber").val();
        
        var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
        
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
        
        if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
            $("#randomnumber").text(numRand*2);
        } else {
            $("#randomnumber").text("Careful now...");
        }
        
        return false;
    });
    
    $("input[type=text]").each(function(){
        $(this).data("first-click", true);
    });
    
    $("input[type=text]").focus(function(){
       
        if ($(this).data("first-click")) {
            $(this).val("");
            $(this).data("first-click", false);
            $(this).css("color", "black");
        }
        
    });
	
});

$(function(){
	
    $("#getcorner").click(function() {
    
        var numLow = 1;//$("#lownumber").val();
        var numHigh =4;//$("#highnumber").val();
        
        var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
        
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
        
        if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
	    if (numRand==1){
            	$("#randomnumber").text(1);
	    }
	    if (numRand==2){
            	$("#randomnumber").text(3);
	    }
	    if (numRand==3){
            	$("#randomnumber").text(7);
	    }
	    if (numRand==4){
            	$("#randomnumber").text(9);
	    }
        } else {
            $("#randomnumber").text("Careful now...");
        }
        
        return false;
    });
    
    $("input[type=text]").each(function(){
        $(this).data("first-click", true);
    });
    
    $("input[type=text]").focus(function(){
       
        if ($(this).data("first-click")) {
            $(this).val("");
            $(this).data("first-click", false);
            $(this).css("color", "black");
        }
        
    });
	
});
