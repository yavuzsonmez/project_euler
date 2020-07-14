function euler() {
	var a = 0;
	var b = 1;
	var c = a + b;
	let sum = 0;
	
	while (c < 4000000) {
		c = a + b;
	  
		if (c % 2 === 0)
      			sum = sum + c;
    		a = b;
    		b = c;
	}
	return sum;
}

 /* 
  Ma solution en Javascript:

Pour trouver la somme des nombres pairs dans la suite de fibonacci (en considérant seulement les nombres inférieurs à 4000000 dans la suite), il suffit
de générer la suite en attribuant les deux derniers nombres à des variables et en ajoutant le résultat à la somme si celui-çi est pair.

  */
