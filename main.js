var api_key = '04a86ab529b55b53b900403b9530d0e05a753b7502b8eb1a7'

var app = new Vue({

    el: ".app",
    
    data(){
        return{
            word: "",
            data: [],
        }
    },

    methods: {
        getMeaning(word){
            fetch("http://api.wordnik.com/v4/word.json/" + word + "/definitions?api_key=" + api_key)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.data = json
            })
        }
    },

})