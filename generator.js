var name = document.getElementByTagName('input');
var name_test = prompt("Nom : ");
if(name)
{
	if(name===name_test)
	{
		alert("Boujour".name);
	}
	else
	{
		alert("Quoi? ".name." ou ".name_test." ?");
	}
}
