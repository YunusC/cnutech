
var critical = [];
var locale = [];
var neckCritical = ["Mass presence", "Absess" , "Redness", "Discharge"];
var neckLocale = ["Upper" ,  "Middle", "Lower"];
var checkOutput = 0;
var bodyPart; //used to change body part header

function output()
{
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
	h0.innerHTML = "Inspection:";
	//var h1 = document.createElement("p");
	//h1.innerHTML = "Locations:";
	var a = document.createElement("a");
	var b = document.getElementById("pointersHeader");
	a.setAttribute("id","examPointers")
	b.appendChild(a);
	a.appendChild(h0);
	a.appendChild(ul0);
	//a.appendChild(h1);
	//a.appendChild(ul1);
	var header = document.getElementById("bodyPart");
	header.innerHTML = bodyPart;
}

function reset()
{
	resetExamPoints();
	document.getElementById("bodyPart").innerHTML = "Please Select a Body Part";
	var y = document.getElementById("bodypic");
	y.setAttribute("src","human_body2.jpg");
	y.setAttribute("width", "237");
	y.setAttribute("height","535");
	y.setAttribute("alt","Human Body");
	y.setAttribute("usemap","#bodymap");
}

function resetExamPoints()
{
	var x = document.getElementById("examPointers")
	if(x != null)
		x.remove();
	critical = [];
	locale = [];
}

function headfunc()
{
	resetExamPoints();
	var y = document.getElementById("bodypic");
	y.setAttribute("src","head2.jpg");
	y.setAttribute("usemap","#headmap");
	y.setAttribute("width","423");
	y.setAttribute("height","396");
	var x = document.getElementById("bodyPart");
	x.innerHTML = "Head/Please Choose a Body Part";
}

function headTop()
{
	resetExamPoints();
	bodyPart = "Head";
	output();
}

function ears()
{
	resetExamPoints();
	bodyPart = "Ears";
	output();
}

function eyes()
{
	resetExamPoints();
	bodyPart = "Eyes";
	output();
}
function neck()
{
	resetExamPoints();
	critical = neckCritical;
	locale = neckLocale;
	bodyPart = "Neck";
	output();
}

function mouth()
{
	resetExamPoints();
	bodyPart = "Mouth";
	output();
}

function nose()
{
	resetExamPoints();
	bodyPart = "Nose";
	output();
}
 
