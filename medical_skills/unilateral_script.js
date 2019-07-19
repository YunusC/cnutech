
var critical = [];
var locale = [];
var neckCritical = ["Mass presence", "Absess" , "Redness", "Discharge"];
var neckLocale = ["Upper" ,  "Middle", "Lower"];
var checkOutput = 0;
function output()
{
	if(checkOutput == 1)
		return;
	var i = 0;
	var ul0 = document.createElement("ul");
	ul0.setAttribute("id","symptoms");
	while(i < critical.length)
	{
		var x = document.createElement("li");
		x.appendChild(document.createTextNode(critical[i]));
		ul0.appendChild(x);
		i++;
	}
	i = 0;
	var ul1 = document.createElement("ul");
	ul1.setAttribute("id","locale");
	while(i < locale.length)
	{
		var x = document.createElement("li");
		x.appendChild(document.createTextNode(locale[i]));
		ul1.appendChild(x);
		i++;
	}
	var h0 = document.createElement("p");
	h0.innerHTML = "Symptoms:";
	var h1 = document.createElement("p");
	h1.innerHTML = "Locations:";
	var a = document.getElementById("examPointers");
	a.appendChild(h0);
	a.appendChild(ul0);
	a.appendChild(h1);
	a.appendChild(ul1);
	checkOutput = 1;
}

function neck()
{
	critical = neckCritical;
	locale = neckLocale;
	output();
}



function question()
{
	//document.getElementById("ques").innerHTML = b;
	document.getElementById("symptom_header").innerHTML = "Please Choose an Answer"
	document.getElementById("li0").innerHTML = "No";
	document.getElementById("li1").innerHTML = "Yes";
	document.getElementById("li2").innerHTML = "n/a";
	document.getElementById("li3").innerHTML = "n/a";
	document.getElementById("li4").innerHTML = "n/a";
}