# Commencer avec les API

## Outils
- [Postman](https://www.getpostman.com/) -> Pour jouer avec les API
- [JSONVIEW](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr) -> voir le JSON correctement dans chrome

## Avant Propos

L'objectif de cette séquence pédagogique est de vous laisser découvrir les API par vous-mêmes. Des indices seront bien évidemment glissés ça et là dans les exercices pour orienter vos recherches.

## Exercice de test 1

Grâce à cette URL https://project-622bb.firebaseio.com/BeCode.json affichez toutes les informations recevables de cette API.    
Faites bien la différence entre synchrone et asynchrone.

## Exercice de test 2

Utiliser cette URL dans votre navigateur ou dans Postman afin de faire des appels dans l'API de wikipedia et de faire des recherches.
https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=terre ou https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=terre

- [documentation](https://www.mediawiki.org/w/api.php?action=help&modules=opensearch)

## Exercice wikinside.html

Utiliser la même API. Au lieu de faire la recherche via votre navigateur ou Postman, faites la recherche à l'aide d'un input dans votre HTML. Au submit, faites afficher les résultats de votre recherche dans votre HTML dans un iframe.

Suggestion de présentation (comme sur les emballages) :

**Homepage**
![](PWA-Desktop-Homepage.png)    
**Et au clic, avec l'iframe avec le contenu de Wikipedia**    
![](PWA-Desktop-Iframe.png)

## Exercice onkeyup.html

Créer une fonctionnalité qui permette de faire une recherche instantanée avec un buffer. Bertrand appelle "buffer" le fait de lancer la recherche vers le serveur uniquement lorsqu'on n'a rien tapé dans l'input après quelques temps (par exemple deux secondes). Ca doit afficher les propositions de résultats, un peu comme quand vous vous aprêtez à faire une recherche google. D'office, ça sera réalisé en asynchrone.

En gros, faites en sorte que ça ressemble à quand vous faites une recherche avec Google.

## BONUS

Faites que ça soit joli. En utilisant un framework CSS par exemple.




