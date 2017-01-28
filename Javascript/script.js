
function validNumber(fieldinput){
var unicode=fieldinput.charCode? fieldinput.charCode : fieldinput.keyCode;
if ((unicode!=8) && (unicode!=46)) { //if the key isn't the backspace key (which we should allow)
if (unicode<48||unicode>57) //if not a number
return false; //disable key press
}
}

$( document ).ready(function() {
 
  $('input#valAmount').on('mousemove change', function() { 
    $('input[name=amount]').val($(this).val()); 
});

$('input[name=amount]').on('change keyup', function() {
    $('input#valAmount').val($(this).val());
});

 $('input#valDuration').on('mousemove change', function() { 
    $('input[name=months]').val($(this).val()); 
});

$('input[name=months]').on('change keyup', function() {
    $('input#valDuration').val($(this).val());
});

 $('input#valAPR').on('mousemove change', function() { 
    $('input[name=apr]').val($(this).val()); 
	 $('#APR').text($(this).val());
    	
});

$('input[name=apr]').on('change keyup', function() {
    $('input#valAPR').val($(this).val());	
		 $('#APR').text($(this).val());
});

});

function calculate(){
	
	var amount= parseFloat(document.loandata.rangeInput1.value);
	var duration= parseFloat(document.loandata.rangeInput2.value);
	var apr= parseFloat(document.loandata.rangeInput3.value/100/12);
	
	 
	
		
	
    var monthly = (amount * apr / (1 - (Math.pow(1/(1 + apr), duration)))).toFixed(2);
	var totalPayment = (monthly*duration).toFixed(2);
	var interestAmount=totalPayment-amount;

		
	if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) 
		{       	
        document.getElementById('MonthlyRepayment').innerHTML = monthly;
		document.getElementById('TotalRepayment').innerHTML = totalPayment;
		document.getElementById('TotalInterest').innerHTML=interestAmount.toFixed(2);
	    }
	
	}
	
	
	
		
   