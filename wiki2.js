(function() {

	var wikid = document.querySelector("#wiki");
	var framer = document.querySelector("#framer");
	var inputer = document.querySelector("#namer");
	var quelleSource = "";

	inputer.insertAdjacentHTML('afterend', '<div id="bloqueur"><ul id="listing"></ul></div>');

  //traite les données en json depuis l'url
	function goDataJson(quelleSource){

		 			var searchName = document.querySelector("#namer").value;
		 			wikid.innerHTML="";
		 			framer.innerHTML="";

		 			var url =  "https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchName;
		 			var urlNoJson = "https://fr.wikipedia.org/wiki/"+searchName;

					fetch(url)
							    // Transform the data into json, extract json from response object given by the server
					  		  .then((resp) => resp.json())
							    .then(function(data) {
										//console.log(data);
										//console.log("nombre de branches : "+ data.length);

										if(quelleSource==="run"){
																							displayDataResult(data,urlNoJson);}
										if(quelleSource==="onInput"){console.log("go oninput");
																								displayResultLinkList(data);}
										console.log(data[1].length);

																				});/*end then function data*/
						//console.log(data);

	 }/*end goDataJson*/


	 function displayResultLinkList(data){
		 		console.log("go list link");
				var listingPresent = document.querySelector('#bloqueur #listing');
				listingPresent.innerHTML="";

				for(i=0;i<data[1].length;i++){
						 					 			//var idx = data[1][i];var idex = idx.replace(/\s+/g,'_');
														//console.log("idx "+idex);
						 								var listerNom = "<li id='"+i+"'>"+data[1][i]+"</li>";
						 										//console.log(answer);

						 								document.querySelector('#listing').insertAdjacentHTML('beforeend', listerNom);
														//document.getElementById(idex).setAttribute("number",i);
				}

				var liPropo = document.querySelectorAll("#listing li");

				for (const liPro of liPropo) {
						 	 	  					//console.log(liPro.id);
						 	 							liPro.addEventListener("click", function() {
						 	 	 																								 				//console.log("click");
						 	 	 																												var idier = liPro.id;
						 	 	 																												console.log("click li id = "+idier);
						 	 	 																												var newsrc = data[3][idier];//console.log(nwsrc);
																																				framer.innerHTML = "";
																																				wikid.innerHTML = "";
																																				framer.insertAdjacentHTML('beforeend', '<iframe id="dispays" src="'+newsrc+'" width="100%" height="900"></iframe>');
						 	 	 																												//displayer.setAttribute("src",newsrc);
																																				var partNom = "<h2>"+data[1][idier]+"</h2>";
																								 											 var partDef = "<p>"+data[2][idier]+"</p>";
																								 											 var partLink = "<span>"+data[3][idier]+"</span>";
																								 											 var answer = partNom+" "+ partDef+" "+ partLink;
																								 													 //console.log(answer);
																								 											 wikid.insertAdjacentHTML('beforeend', '<li id="'+i+'">'+answer+'</li>');

						 	 	 																											});/*end addEventListener*/
				}/*end for*/

	 }


	 //affiche le résultat après le clic sur le btn cherchez
	 function displayDataResult(data,urlNoJson){

					 if(data[1].length==0){
								 wikid.insertAdjacentHTML('beforeend', '<li>Pas de résultat pour cette recherche</li>');
					 }
					 else{console.log(data[1].length);
								framer.insertAdjacentHTML('beforeend', '<iframe id="dispays" src="'+urlNoJson+'" width="100%" height="900"></iframe>');
								for(i=0;i<data[1].length;i++){
											 var partNom = "<h2>"+data[1][i]+"</h2>";
											 var partDef = "<p>"+data[2][i]+"</p>";
											 var partLink = "<span>"+data[3][i]+"</span>";
											 var answer = partNom+" "+ partDef+" "+ partLink;
													 //console.log(answer);
											 wikid.insertAdjacentHTML('beforeend', '<li id="'+i+'">'+answer+'</li>');
								 } /*end for loop*/

					       liqueur(data);
		 		 	 } /*end else*/

	 }/*end displayDataResult*/

	 // affiche dans l'iframe le sujet du <li> cliqué
	 function liqueur(data){
 				var liClickLength = document.querySelectorAll("#wiki li").length;console.log(liClickLength);
 				var liClick = document.querySelectorAll("#wiki li");
 				var displayer = document.querySelector("#dispays");


 				for (const liker of liClick) {
 	  					//console.log(liker.id);
 							liker.addEventListener("click", function() {
 	 																								 				//console.log("click");
 	 																												var idier = liker.id;
 	 																												//console.log("click li id = "+idier);
 	 																												var newsrc = data[3][idier];//console.log(nwsrc);
 	 																												displayer.setAttribute("src",newsrc);
 	 																											});/*end addEventListener*/
 						}/*end for*/

 	 }/*end liqueur*/


   // to get the user firstname clicking on the customize button
   document.querySelector("#run").addEventListener("click", function() {
		 		 quelleSource = "run";
			   goDataJson(quelleSource);

   }); /*end run addEventListener*/

   inputer.addEventListener("input", function() {console.log("go input listener");
			 	quelleSource = "onInput";

				/*var bloqueurPresent = document.querySelector('#bloqueur');
				if (typeof(bloqueurPresent) == "undefined" || bloqueurPresent == null){
								console.log("hello bloqueur");
								inputer.insertAdjacentHTML('afterend', '<div id="bloqueur"><ul id="listing"></ul></div>');

				}
				else{
							 	console.log("linklist go end blok");
							 	//var bloqueur = document.querySelector('#bloqueur');
								//desactive un bloc existant pour eviter de les multiplier
							 	document.querySelector('.field').removeChild(bloqueur);
				}*/

			 	goDataJson(quelleSource);
   }); /*end inpouter addEventListener*/


})();
