
var inspect = [];
var test = [];

var headInspect = ["Scalp","Hair","Skull","Face"];
var headTest = [];

var eyesInspect = ["Sclera and conjectiva","Cornea and lens"];
var eyesTest = ["Pupillary reaction to light",
"Test for convergence",
"Assess extracular muscles/Six cardinal directions of gaze",
"Opthalmoscopic exam(Papilledema,Inspection of retina,red reflex)",
"Assess visual acuity",
"Static finger wiggle test" ,
"Kinetic red target test",
"Check for nystagmus"];

var earsInspect = ["Auricle" , "Ear canal and drum"];
var earsTest = [ "Auditory acuity", "Whispered voice test", "Tuning fork test (Weber Test, Rinne Test)"];

var noseInspect = ["Check anterior and inferior surfaces", "Check nasal vestibule and passages", "Examine the nasal mucosa"];
var noseTest = ["Nasal obstruction", "Palpate for sinus tenderness (Frontal sinuses Maxillary sinuses)"];

var mouthInspect = ["Mucosa, dry?",
"Check mucosa for ulcers",
"Look for erythema or discharge in back of throat",
"Check teeth for decay", 
"Symmetrical uvula",
"Tongue Deviation, ask to stick out tongue and move from side to side"];
var mouthTest = [];

var neckInspect = ["Check for deviation of trachea",
"Ask patient to swallow and check for upward and downward movement of crico-thyroid cartilage (more observable in males)",
"Check Lymph nodes, pre-auricular, post-auricular, occipital, mandibular, submental, cervical chain, supraclavicular"];
var neckTest = [];

var checkOutput = 0;
var bodyPart; //used to change body part header

function output()
{
	var i = 0;
	var ul0 = document.createElement("ul");
	ul0.setAttribute("id","symptoms");
	while(i < inspect.length)
	{
		var x = document.createElement("li");
		x.appendChild(document.createTextNode(inspect[i]));
		ul0.appendChild(x);
		i++;
	}
	i = 0;
	var ul1 = document.createElement("ul");
	ul1.setAttribute("id","test");
	while(i < test.length)
	{
		var x = document.createElement("li");
		x.appendChild(document.createTextNode(test[i]));
		ul1.appendChild(x);
		i++;
	}
	var h0 = document.createElement("p");
	h0.innerHTML = "Inspection:";
	var h1 = document.createElement("p")
	h1.innerHTML = "Test:";
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
	inspect = [];
	test = [];
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
	x.innerHTML = "Please Choose a Body Part";
}

function headTop()
{
	resetExamPoints();
	bodyPart = "Head";
	inspect = headInspect;
	test = headTest;
	output();
}

function ears()
{
	resetExamPoints();
	bodyPart = "Ears";
	inspect = earsInspect;
	test = earsTest;
	output();
}

function eyes()
{
	resetExamPoints();
	bodyPart = "Eyes";
	inspect = eyesInspect;
	test = eyesTest;
	output();
}
function neck()
{
	resetExamPoints();
	inspect = neckInspect;
	test = neckTest;
	bodyPart = "Neck";
	output();
}

function mouth()
{
	resetExamPoints();
	bodyPart = "Mouth";
	inspect = mouthInspect;
	test = mouthTest;
	output();
}

function nose()
{
	resetExamPoints();
	bodyPart = "Nose";
	inspect = noseInspect;
	test = noseTest;
	output();
}
 
