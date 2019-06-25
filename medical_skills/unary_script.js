
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
	//document.getElementById("ques").innerHTML = b;
	document.getElementById("symptom_header").innerHTML = "Please Choose an Answer"
	document.getElementById("li0").innerHTML = "No";
	document.getElementById("li1").innerHTML = "Yes";
	document.getElementById("li2").innerHTML = "n/a";
	document.getElementById("li3").innerHTML = "n/a";
	document.getElementById("li4").innerHTML = "n/a";
}

function qT()
{

}

function qF()
{

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