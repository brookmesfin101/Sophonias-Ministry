import Vue from 'vue';

var app = new Vue({
    el: 'app',
    render: h => h(app),
    mounted(){
        console.log('Hello World');
    }    
});


