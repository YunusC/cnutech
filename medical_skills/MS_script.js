var name;
var dob;
var CC;
var counter = 0;
var ending = 0;
var hintOutputted = 0;
class info
{
	constructor(value)
	{
		this.question = value;
		this.hints = [];
	}
	
	getQuestion()
	{
		return this.question;
	}
	addHint(value)
	{
		this.hints.push(value);
	}
	getHint()
	{
		return this.hints;
	}
}

var information = ["",
"What are the common risk factors?",
"How was the patient's health before incidence?",
"Onset, duration, and frequency of problem?",
"What are the anatomical structures involved?",
"Symptoms and severity: Scale from 1-10, continuous or intermittent",
"Quality of pain?",
"What makes it worse and what makes it better?",
"What are the associated symptoms?",
"Past medical history: Childhood illnesses, adult illnesses, accidents & injuries",
"Past surgical history: Hospitalizations, surgeries",
"Medications",
"Allergies/Immunizations",
"Social History", "/Smoking History", "/Alcohol History", "/Recreational drug use", "/Sexual History", "/Travel history", "/Employment history" ,
"Family History",
"Review of systems", "/Consitutional", "/HEENT" ,"/Heme/Lymph","/Pulmonary","/Cardiac","/Endocrine","/Gastrointestinal" ,"/Genutourinary(Ob/Gyn)","/Musculoskeletal" ,"/Neurologic","/Skin","/Psychiatric"];

var i = 0;
var j = -1;
var questions = [];
while(i < information.length)
{
	if(information[i][0] == '/')
	{
		var length = information[i].length;
		var string = information[i].substring(1,length);
		questions[j].addHint(string);
	}
	else
	{
	let x = new info(information[i]);
	questions.push(x);
	j++;
	}
	i++;
}

function prev()
{
	if(counter <= 0)
		return;
	if(!ending)
	{
		counter--;
	}
	else
	{
		document.getElementById("endButton").remove();
		ending = 0;
	}
	document.getElementById("question").innerHTML = questions[counter].getQuestion();
	outputHint();
	hintOutputted = 0;
}

function next()
{
	if(counter >= questions.length - 1)
	{	
		end();
		return;
	}
	counter++;
	outputHint();
	hintOutputted = 0;
	document.getElementById("question").innerHTML = questions[counter].getQuestion();
}


function end()
{
	if(ending)
		return;
	document.getElementById("hint").remove();
	document.getElementById("question").innerHTML = "Completed Questioning"
	var l = document.createElement("div");
	l.setAttribute("id", "endButton");
	var h = document.createElement("button");
	h.innerHTML = "Proceed to Physical Examination";
	h.setAttribute("class", "buttons");
	h.setAttribute("onclick" , "window.location.href = 'physicalExam.html';")
	document.body.appendChild(l);
	l.appendChild(h);
  	ending = 1;
}

function outputHint()
{
	var x = document.getElementById("hint");
	if(x != null)
		x.remove();
	if(questions[counter].getHint() == 0)
	{
		return;
	}
	x = document.createElement("div");
	x.setAttribute("id", "hint");
	var t = document.createElement("button");
	t.setAttribute("class","buttons");
	t.innerHTML = "Show Hints";
	t.setAttribute("onclick", "hintButton()");
	x.appendChild(t);
	document.body.appendChild(x);
	return;
}

function hintButton()
{
	if(hintOutputted)
		return;
	var x = document.getElementById("hint");
	var ul = document.createElement("ul");
	var i = 0;
	while(i < questions[counter].getHint().length)
	{
		var li = document.createElement("li");
		li.innerHTML = questions[counter].getHint()[i];
		ul.appendChild(li);
		i++;
	}
	x.appendChild(ul);
	document.body.appendChild(x);
	hintOutputted = 1;
	return;
}

function namefunc()
{
    name = document.getElementById("nameInput").value;
    document.getElementById("nameInput").remove();
    document.getElementById("nameButton").remove();
    document.getElementById("name").innerHTML = "Name: "+name;
}

function dobfunc()
{
   dob = document.getElementById("dobInput").value;
   document.getElementById("dobInput").remove();
   document.getElementById("dobButton").remove();
   document.getElementById("dob").innerHTML = "Date of Birth: " + dob;
}

function CCfunc()
{
  CC = document.getElementById("CCInput").value;
  document.getElementById("CCInput").remove();
  document.getElementById("CCButton").remove();
  document.getElementById("CC").innerHTML = "Chief Complaint: " + CC;
}
