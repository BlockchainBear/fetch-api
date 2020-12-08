'use strict'

function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => consolelog(responseJson))
}

function watchForm(){
    $('form').sumbit(event => {
        event.preventDefault()
        getDogImage()
    })
}

$(function(){
    console.log('App loaded! Waiting for sumbit!')
    watchForm()
})