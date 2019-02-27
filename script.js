(function() {


	function loadJSON(callback) {

	    var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
	    	xobj.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);
		// Replace 'my_data' with the path to your file, true for asynchrone

	    	xobj.onreadystatechange = function () {
		  if (xobj.readyState == 4 && xobj.status == "200") {
		      // Required use of an anonymous callback as .open will NOT return a value
		      //but simply returns undefined in asynchronous mode
		    callback(xobj.responseText);
		  }
	    };

	    xobj.send(null);
	 }


	function init() {

				 loadJSON(function(response) {
				  		// Parse/transform JSON string into object
				   	var actual_JSON = JSON.parse(response);
						return actual_JSON;
				});/*end loadJSON*/


				//console.log(actual_JSON);
				var sectioner = document.getElementsByClassName("explain");
				//console.log(sectioner.length);
				var longer = Object.keys(actual_JSON).length;
				console.log(longer);

				for(i=0;i<longer;i++){
								var myArrayCase = actual_JSON[i];//console.log(myArrayCase);
								var myName ="<h4>"+myArrayCase.profile.firstname+" "+myArrayCase.profile.lastname+"</h4>";
								var myHistory = "<p>Son histoire :"+myArrayCase.history+"</p>";
								var myImage = "<img src='"+myArrayCase.image+"' width='100' >";
								var myWikilink = "<a href='"+myArrayCase.wiki+"'>wiki link</a>";
								var myBloc = myName + myHistory +"<br>"+ myImage+"<br>"+myWikilink;console.log(myBloc);
								//sectioner.insertAdjacentHTML("afterend", myBloc);
								//sectioner.appendChild(myBloc);
								sectioner.innerHTML=myBloc;
				}/*end for*/

	}/*end init*/

init();


})();
