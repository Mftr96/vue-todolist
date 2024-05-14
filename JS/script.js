//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        //milestone 0:creazione array 
        return{
            listaToDo:[
                "fare sport",
                "mangiare",
                "dormire",
                "fare esercizi Boolean",
            ],
           //milestone 1:creo data da collegare ad input
           dataInput:"coap",
        }
        /* milestone 1:scrivo funzione che al click 
        stampa il dato in console e lo pusha nell'array */
        
    }, methods:{
        fBottone(){
            console.log(this.dataInput)
            this.listaToDo.push(this.dataInput)
        }
    }
}).mount("#app");