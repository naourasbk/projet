var produits={
				123:{"image":"./images/asus.png" ,
						"Nom":"asus x507",
						"description":"un écran de 15,6 pouces d'une définition de 1 920 x 1 080 pixels " ,
						"Prix":"3.400",
						},
				1234:
						{"image":"./images/hp.jpg" ,
						"Nom":"HP Omen",
						"description":"un processeur Intel i7 véloce, un look plaisant",
						"Prix":"8.200",
						},
				12345:
						{"image":"./images/lenovo.jpg" ,
						"Nom":"Lenovo Yoga 910",
						"description":"son affichage haute définition 4K et son environnement sonore totalement immersif viendront stimuler votre imagination." ,
					 "Prix":"7000	",
						}
				};
		


function exist(code){

	return(produits.hasOwnProperty(code));


}

function verif()
{

	var co="";
	var code=document.getElementById('code').value;
	if( !exist(code)){

co='<div class="alert alert-danger"  role="alert"><b> Invalid BarCode !</b></div>';

	}else{
		


		co='<div class="card border-danger mb-3" style="width: 20rem;border:2px solid red ;width:600px;margin-top:40px;" ><img class="card-img-top" src="'+produits[code]["image"]+'"alt="Card image cap"><div class="card-body"><h5 class="card-title"><i><font color="#e74c3c" size="6px">'+produits[code]["Nom"]+'</i></h5><p class="card-text"><b><font color="blue" size="18px">'+produits[code]["Prix"]+' DT</font></b></div></div>';

	}

	document.getElementById("affiche").innerHTML=co;


}