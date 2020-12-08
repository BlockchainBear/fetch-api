'use strict'

function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
        .catch(error => alert('something went wrong, try again later,'))
}
function displayResults(responseJson){
    console.log(responseJson)
    //replace existing image with new one
    $('.results-img').replaceWith(
        <img src ='${responseJson.message}' class='results-img'> </img>
            )

       $('.results').removeClass('hidden')
}
function watchForm(){
    $('form').submit(event => {
        event.preventDefault()
        getDogImage()
    })
}

$(function(){
    console.log('App loaded! Waiting for sumbit!')
    watchForm()
})


