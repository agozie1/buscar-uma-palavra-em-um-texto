var texto = prompt(

  "Digite um texto"

  )

var palavra = prompt(

  "Digite uma palavra para ser procurada na texto(Diferencia letra maiúscula de minúscula)"

  )

var busca = (

  texto.indexOf(palavra)

  )

if (busca != -1) {

  alert('palavra "'  + palavra +   '" encontrada no texto ')

}

else{

  alert("Palavra não encontrada na texto")

}
