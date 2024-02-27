

function verificar(){

var data = new Date()
var ano = data.getFullYear()//fullyear serve para pegar os 4 digitos do ano

var inputAno = window.document.getElementById('inputAno')
var res = window.document.getElementById('res')
var idade = ano - Number(inputAno.value) 

var radioSex = document.getElementsByName('radio')

var img = document.createElement('img')//aqui vai criar um elemento img, diferente de criar o elelemento no html e chama-lo aqui no js
img.setAttribute('id', 'foto')//aqui vai colocar um atributo 'id' para 'foto' no img

if(inputAno.value.length == 0 || inputAno.value > ano){
    window.alert('ano inválido')
}


else{
    res.innerHTML = `idade calculada: ${idade}`

    var gênero = ''//aqui a variável ficou em aberto para ser puxada mais abaixo
    if(radioSex[0].checked){
            gênero = 'homem'
            if(idade >=0 && idade < 10){
            img.setAttribute('src', 'assets/menino.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'assets/jovemHomem.jpg')
            }
            else if(idade < 60){
            img.setAttribute('src', 'assets/adulto.jpg')
            }
            else{
                img.setAttribute('src', 'assets/idoso.jpg')
            }
     }
    
    else if(radioSex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'assets/menina.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'assets/jovemMulher.jpg')
            }
            else if(idade < 60){
            img.setAttribute('src', 'assets/adulta.jpg')
            }
            else{
                img.setAttribute('src', 'assets/idosa.jpg')
            }
    }
     
    res.innerHTML = `<strong>Detectado ${gênero} com ${idade} anos </strong>`
    res.appendChild(img)//apendechild adicona um elemento em baixo, que será o elemento img
    }













}