var name;
var dob;
var MR;
var CC;
var counter = 0;
var ending = 0;
var ids = ["1" ,"2", "3"];
var questions = ["",
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
"Social History: Smoking History, Alcohol History, Recreational drug use, Sexual History, Travel history, Employment history" ,
"Family History",
"Review of systems: Consitutional, HEENT, Heme/Lymph, Pulmonary, Cardiac, Endocrine, Gastrointestinal, Genutourinary(Ob/Gyn), Musculoskeletal, Nuerologic, Skin, Psychiatric"];

function prev()
{
	if(counter <= 0)
		return;
	if(!ending)
		counter--;
	else
	{
		var i = 0;
		while(i < ids.length)
		{
			document.getElementById(ids[i]).remove();
			i++;
		}
		ending = 0;
	}
	document.getElementById("question").innerHTML = questions[counter];
}

function next()
{
	if(counter >= questions.length - 1)
	{	
		end();
		return;
	}
	counter++;
	document.getElementById("question").innerHTML = questions[counter];
}


function end()
{
	if(ending)
		return;
	document.getElementById("question").innerHTML = "Is the problem unilateral, bilateral, or systemic?"
	var i = 0;
	var a = [];
	while(i < ids.length)
	{
		a.push(document.createElement("button"));
		a[i].setAttribute("id",ids[i]);
		a[i].setAttribute("class", "buttons");
		i++;
	}
	a[0].setAttribute("target", "'_blank'");
	a[0].setAttribute("onclick","window.location.href = 'unilateral.html';");
	i = 1
	while(i < ids.length)
	{
		a[i].setAttribute("onclick","wrongChoice()");
		i++;
	}
	var b = []; 
	b.push(document.createTextNode("Unilateral"));
	b.push(document.createTextNode("Bilateral"));
	b.push(document.createTextNode("Systemic"));
  	i = 0;
  	while(i < ids.length)
  	{
		a[i].appendChild(b[i]);
  		document.body.appendChild(a[i]);
  		i++;
	}
  	ending = 1;
}

function wrongChoice()
{
	document.getElementById("question").innerHTML = "Should've chosen the other one";
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

function MRfunc()
{
  MR = document.getElementById("MRInput").value;
  document.getElementById("MRInput").remove();
  document.getElementById("MRButton").remove();
  document.getElementById("MR").innerHTML = "MR#: " + MR;
}

function CCfunc()
{
  CC = document.getElementById("CCInput").value;
  document.getElementById("CCInput").remove();
  document.getElementById("CCButton").remove();
  document.getElementById("CC").innerHTML = "Chief Complaint: " + CC;
}
/*
function test()
{
	var h = document.createElement("div");
	h.setAttribute("id",id[counter]);
    var t = document.createTextNode(questions[counter]);
  	h.appendChild(t);
  	document.body.appendChild(h);
 }

 function lit()
 {
 	document.getElementById("question").innerHTML = "cool beans";
 }
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var sore_throat = new Tree('Is there a fever?');
var currNode = sore_throat._root;
currNode.children[0] = new Node('Is it difficult to swallow liquids?')
currNode.children[1] = new Node('Have you had recent weight lost?')

function determinePath(answer, currentNode)
{	
	if(answer == true)
		return currentNode.right;
	else
		return currentNode.left;
}

function dob()
{
	var x = document.getElementById("dobInput").value;
 	document.getElementById("dobOutput").innerHTML = x;
}
 */
