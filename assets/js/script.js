
//On est prêt à interpréter du jquery
$(function(){
//j'ajoute un élément click sur mon bouton (id boutton)
// au click sur ce bouton tu affiche une alerte, grace à la fonction alert(),
// et dans cette alerte, on lui indique, ce qu'il doit afficher.
  $('#boutton').click(function(){
  alert('Bien jouer, tu sais appuyer sur un bouton...!!!');
  });
  $('#boutton2').click(function(){
  alert('Bien jouer, tu sais appuyer sur le bouton 2...!!!');
  });
});
