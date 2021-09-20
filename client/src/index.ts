import Vue from 'vue';
import App from './App.vue';
import router from './router';

const app: any = new Vue({
    router,
    components: { App },
    template: '<App/>',
    mounted(){
        console.log('Hello World 3');
    }    
}).$mount('#app');


