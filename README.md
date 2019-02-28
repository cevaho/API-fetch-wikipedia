# Commencer avec les API

## Outils
- [Postman](https://www.getpostman.com/) -> Pour jouer avec les API
- [JSONVIEW](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr) -> voir le JSON correctement dans chrome

## Avant Propos

L'objectif de cette séquence pédagogique est de vous laisser découvrir les API par vous-mêmes. Des indices seront bien évidemment glissés ça et là dans les exercices pour orienter vos recherches.

Grâce à cette URL https://project-622bb.firebaseio.com/BeCode.json affichez toutes les informations recevables de cette API.    
Faites bien la différence entre synchrone et asynchrone.

Utiliser cette URL dans votre navigateur ou dans Postman afin de faire des appels dans l'API de wikipedia et de faire des recherches.
https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=terre ou https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=terre

- [documentation](https://www.mediawiki.org/w/api.php?action=help&modules=opensearch)


## Exercice [wikinside.html](https://cevaho.github.io/API-fetch-wikipedia/wikinside.html)

Utiliser la même API. Au lieu de faire la recherche via votre navigateur ou Postman, faites la recherche à l'aide d'un input dans votre HTML. 
- Au submit, faites afficher les résultats de votre recherche dans votre HTML dans un iframe.
- Au clic sur une des réponse, changer l'affichage de l'iframe
- lors de l'inscription de la recherche, donner une liste de proposition
- lors du clic sur une proposition, afficher la réponse pour cette proposition


## Exercice [onkeyup.html](https://cevaho.github.io/API-fetch-wikipedia/onkeyup.html)

Créer une fonctionnalité qui permette de faire une recherche instantanée avec un buffer. Bertrand appelle "buffer" le fait de lancer la recherche vers le serveur uniquement lorsqu'on n'a rien tapé dans l'input après quelques temps (par exemple deux secondes). D'office, ça sera réalisé en asynchrone.


## BONUS

Faites que ça soit joli. En utilisant un framework CSS par exemple.




