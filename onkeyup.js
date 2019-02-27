(function() { 

   var nameu = document.querySelector("#namer");
   // Init a timeout variable to be used below
   var timeout = null;
	
   // to get the user firstname clicking on the customize button
   nameu.addEventListener("keyup", function() {

		    // Clear the timeout if it has already been set.
		    // This will prevent the previous task from executing
		    // if it has been less than <MILLISECONDS>
		    clearTimeout(timeout);

		    // Make a new timeout set to go off in 800ms
		    timeout = setTimeout(function () {

			var searchName = document.querySelector("#namer").value;
	    		var wikid = document.querySelector("#wiki");
				wikid.innerHTML="";
	    		var framer = document.querySelector("#framer");
				framer.innerHTML="";
	    
  	    		var url =  "https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchName;
	    		var urlNoJson = "https://fr.wikipedia.org/wiki/"+searchName;
			console.log('Input Value:'+searchName);





			fetch(url)
		  	// Transform the data into json, extract json from response object given by the server
  		  	.then((resp) => resp.json())
		  	.then(function(data) {
			
					//console.log(data);
				
					// Map through the data and for each run the code below
		    			//return data.map(function(author) { 

							
							//console.log("nombre de branches : "+ data.length);

					if(data[1].length==0){
						wikid.insertAdjacentHTML('beforeend', '<li>Pas de résultat pour cette recherche</li>');
						}
					else{
						framer.insertAdjacentHTML('beforeend', '<iframe src="'+urlNoJson+'" width="100%" height="900"></iframe>');
						   for(i=0;i<data[1].length;i++){
							
							//console.log("nombre sous élément de i "+i+" egal "+ data[1].length);
								var partNom = "<h2>"+data[1][i]+"</h2>";
								var partDef = "<p>"+data[2][i]+"</p>";
								var partLink = "<span>"+data[3][i]+"</span>";
								var answer = partNom+" "+ partDef+" "+ partLink;
									console.log(answer);
								wikid.insertAdjacentHTML('beforeend', '<li>'+answer+'</li>');
							}
						}
			
		    });  

	}, 2000);

	    



	    

	
   });


})();
