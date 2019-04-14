
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class Tree
{
	constructor(data)
	{
		this.root = new Node(data);
	}
}

function determinePath(answer, currentNode)
{	
	if(answer == true)
		return currentNode.right;
	else
		return currentNode.left;
}

function main()
{
	$("h3").text("Hello World!");
	console.log("cool beans");
}

function picture()
{
	document.getElementById("symptom_header").innerHTML = "Please Choose a Symptom"; 
	document.getElementById("li0").innerHTML = "Sore Throat";
	document.getElementById("li1").innerHTML = "B";
	document.getElementById("li2").innerHTML = "C";
	document.getElementById("li3").innerHTML = "D";
	document.getElementById("li4").innerHTML = "E";
}

function question()
{
	document.getElementById("ques").innerHTML = "Is There Pain Associated?"
	document.getElementById("symptom_header").innerHTML = "Please Choose an Answer"
	document.getElementById("li0").innerHTML = "Yes";
	document.getElementById("li1").innerHTML = "No";
	document.getElementById("li2").innerHTML = "n/a";
	document.getElementById("li3").innerHTML = "n/a";
	document.getElementById("li4").innerHTML = "n/a";
}
// main()
// {
// 	Tree banana("Begin Diagnosis?");
// 	var currentNode = banana.root;
// 	while(currentNode.left != null && currentNode.right != null)
// 	{
// 		console.log(currentNode.data);
// 		console.log('\n')
// 		currentNode = determinePath(answer, currentNode);
// 	}
// 	console.log("Diagnosis is");
// 	console.log('\n');
// 	console.log(currentNode.data);
// }