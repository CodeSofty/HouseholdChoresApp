//This is to practice using objects. Here is an array of objects with a 'name' and 'what' key.

var chores = [
{
	Who: 'Steve',
	What: 'Mop the Kitchen'
},

{
	Who: 'Susan',
	What: 'Mop the Kitchen'
},

{ 
 Who: 'Steve',
 What: 'Clean the Bathroom'
},

{
	Who: 'Susan',
	What: 'Clean the Bathroom'
},

{
  Who: 'Steve',
  What: 'Clean the Living Room'
},

{ 
	Who: 'Susan',
	What: 'Clean the Living Room'
},

{
	Who: 'Everyone',
	What: 'Take a break today'
}

]

// This function chooses a random 'name' value and random 'what' value, then prints those to the document.

function printChores() {
	
var name = chores[Math.floor(Math.random() * chores.length)];
document.write ('<p>' + 'Who: ' + name.Who + '' + '</p>');
var task = chores[Math.floor(Math.random() * chores.length)];
document.write ('<p>' + 'Chore: ' + task.What + '' + '</p>');
}

// This calls the function
printChores()

/* I could have used a 2-dimensional array with a name and chore value and randomly selected from those indexes. 
 Or I could have done this the harder way and made 2 separate arrays one for names and one for the tasks and
 randomly generated an index from each to print to the document */
