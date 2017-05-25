for(var i = 5; i <= 120; i += 5)
{
	console.log(i);
}

for(var i = 4096; i > 1; i = i/2 )
{
	console.log(i);
}

var presidents = ["George Washington", "Thomas Jefferson", "Barack Obama"];
for(i=0; i < presidents.length; i++)
{
	console.log(`President#${i+1} was ${presidents[i]}`)
}