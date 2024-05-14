//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        return{
            listaToDo:[
                "fare sport",
                "mangiare",
                "dormire",
                "fare esercizi Boolean",
            ],
           
        }
    }
}).mount("#app");