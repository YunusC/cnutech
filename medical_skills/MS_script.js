var name;
var dob;
var CC;
var CCchosen = 0;
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

var soreThroatQuestions = ["",
"Where does it hurt?", 
"When did it start?",
"Tell me how it began?",
"What were you doing when it began?",
"Have you been around anyone else recently? Have you been around anyone with strep throat?",
"Have you had a cough?",
"Have you had a fever and/or chills?",
"Has your voice changed?",
"Can you swallow OK?",
"How’s your appetite?", 
"How’s your energy level?",
"What’s happened since it started?",
"What’s going on now?",
"Relevant social history", "/Have you been around anyone ill with similar symptoms?", "/Have you had oral sex recently?", "/Do you smoke?",
"Relevant ROS:",
"Pulmonary", "/Do you have a cough?",
"Gastrointestinal" , "/Difficulty swallowing?", "/Pain with swallowing?", "/Do you experience heartburn?", "/Do you experience a bad taste in your mouth, perhaps at night?",
"Genitourinary(Ob/Gyn)", "/Pain with urination?", "/Vaginal discharge?", "/New sexual partner?",
"Neurologic", "/Have you had a headache?", "/Have you had neck pain?",
"Skin", "/Have you had a rash?"
]

var chiefComplaint2Questions = ["",
"What are the common risk factors?",
"How was the patient's health before incidence?",
"Onset, duration, and frequency of problem?",
"What are the anatomical structures involved?",
"Symptoms and severity: Scale from 1-10, continuous or intermittent",
"Quality of pain?",
"What makes it worse and what makes it better?",
"What are the associated symptoms?"]

var genQuestions = [
"Past medical history", "/Childhood illnesses", "/Adult illnesses", "/Accidents & Injuries",
"Past surgical history" ,"/Hospitalizations", "/Surgeries",
"Medications",
"Allergies/Immunizations",
"Social history", "/Smoking history", "/Alcohol history", "/Recreational drug use", "/Sexual history", "/Travel history", "/Employment history" ,
"Family History",
"Review of systems", "/Consitutional", "/HEENT" ,"/Heme/Lymph","/Pulmonary","/Cardiac","/Endocrine","/Gastrointestinal" ,"/Genutourinary(Ob/Gyn)","/Musculoskeletal" ,"/Neurologic","/Skin","/Psychiatric"];

var i = 0;
var j = -1;
var questions = [];

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
	if(!CCchosen)
	{
		var x = document.getElementById("question");
		x.innerHTML = "Please Choose a Chief Complaint";
		return;
	}
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
  if(!CC)
  {
  	document.getElementById("question").innerHTML = "Please Choose a Chief Complaint";
  	return;
  }
  document.getElementById("CCInput").remove();
  document.getElementById("CCButton").remove();
  document.getElementById("CC").innerHTML = "Chief Complaint: " + CC;
  document.getElementById("question").innerHTML = "";
  var information = [];
  if(CC == "Sore Throat")
  	information = soreThroatQuestions;
  if(CC == "Chief Complaint 2")
  	information = chiefComplaint2Questions;
  if(CC == "Chief Complaint 3")
  	information = [""];
  information = information.concat(genQuestions);
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
  CCchosen = 1;
}
