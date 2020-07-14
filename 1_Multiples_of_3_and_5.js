function euler() {
	let i = 999;
	let sum = 0;
  
	while (i > 0) {
	  if (Number.isInteger(i / 3) || Number.isInteger(i / 5)){
		sum += i;
		i--;
	  }
	  else
		i--;
	}
	return sum;
  }

 /* 
  Ma solution en Javascript:

 Pour trouver la somme de tous les multiples de 3 ou 5 en dessous de 1000, il suffit de check à partir de 999 (donc en dessous de 1000) avec Number.isInteger() en JS si le nombre
  divisé par 3 ou 5 est un entier, si c'est le cas on ajoute le nombre en question à la somme et on décrémente sinon on décrémente, et ce jusqu'à 0.

  */