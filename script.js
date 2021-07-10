document.querySelector('#find').addEventListener('click',function(e){


    e.preventDefault();
    var loan=document.getElementById('amount').value;
    var interestRate=document.getElementById('ir').value;
    var time=document.getElementById('time').value;


    var noOfMonths=time*12;
    var monthlyRate=interestRate/(12*100);
    var oneplusR=Math.pow(1+monthlyRate,noOfMonths);
    var denominator=oneplusR-1;
    var emi=(loan*monthlyRate*(oneplusR/denominator)).toPrecision(5);
    var totalAmt=noOfMonths*parseFloat(emi);
    var totalInt=Math.floor(totalAmt-loan);

var payableEmi=document.querySelector('.emi');
var payableamount=document.querySelector('.total_interest');
var payableInt=document.querySelector('.total_amount');

payableEmi.innerHTML=parseFloat(emi);
payableamount.innerHTML=parseFloat(totalAmt);
payableInt.innerHTML=parseFloat(totalInt);

//for chart

var pietotal=parseFloat(totalAmt)+parseFloat(totalInt);
var piePayableloan=(parseFloat(totalAmt)/pietotal)*360;
var piePayablelInt=(parseFloat(totalInt/pietotal)*360);

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "EMI Calculator pie Chart"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y:piePayablelInt, label: "Interest to be paid"},
            {y:piePayableloan,label: "Loan to be paid"},
		
		]
	}]
});
chart.render();

})