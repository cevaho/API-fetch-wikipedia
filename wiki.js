(function() {

	var wikid = document.querySelector("#wiki");
	var framer = document.querySelector("#framer");


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

										if(data[1].length==0){
													wikid.insertAdjacentHTML('beforeend', '<li>Pas de résultat pour cette recherche</li>');
										}
										else{
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

				    });/*end then function data*/


   }); /*end run addEventListener*/



})();
