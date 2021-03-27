$(document).ready(function() {
    $('.click').click(function() {
        // console.log('Button was clicked')
        $.get("https://random.dog/woof.json", function(res) {
            console.log(res)
            $('.img').html(`
                <img src=${res.url} alt="img" />`)
        })
        $.get("https://randomfox.ca/floof/", function(res) {
            console.log(res)
            $('.img2').html(`
            <img src=${res.image} alt="img" />`)
        })
    })
    $('.joke').click(function(){
        console.log('Clicked Jokes button')
        $.get("https://official-joke-api.appspot.com/jokes/programming/random", function(res) {
            console.log(res)
            $('.jokes').html(`
                <h4>Joke Type: ${res[0].type}</h4>
                <h4>${res[0].setup}</h4>
                <h4>${res[0].punchline}</h4>
            `)
        })
    })
    $('.tunes').click(function() {
        console.log("clicked tunes button")
        $.get("https://looney-toons-api.herokuapp.com/api/characters", function(res) {
            console.log(res)
            $('.tune').html(`
                <h4>${res.data[16].name}</h4>
                <img src=${res.data[16].img} alt=${res.data[16].name} />
            `)
        })
    })
})