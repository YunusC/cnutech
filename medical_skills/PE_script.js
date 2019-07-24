
var critical = [];
var locale = [];
var neckCritical = ["Mass presence", "Absess" , "Redness", "Discharge"];
var neckLocale = ["Upper" ,  "Middle", "Lower"];
var checkOutput = 0;
var bodyPart;

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
	var a = document.createElement("a");
	var b = document.getElementById("pointersHeader");
	a.setAttribute("id","examPointers")
	b.appendChild(a);
	a.appendChild(h0);
	a.appendChild(ul0);
	a.appendChild(h1);
	a.appendChild(ul1);
	var header = document.getElementById("bodyPart");
	header.innerHTML = bodyPart;
	checkOutput = 1;
}

function reset()
{
	document.getElementById("examPointers").remove();
	document.getElementById("bodyPart").innerHTML = "Please Select a Body Part";
	checkOutput = 0;
}

function neck()
{
	critical = neckCritical;
	locale = neckLocale;
	bodyPart = "Neck";
	output();
}