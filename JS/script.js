//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        //milestone 0:creazione array 
        return{
            //bonus 1:creazione array oggetti
            listaToDo:[
                {task:"fare sport",done:true},
                {task:"mangiare",done:true},
                {task:"dormire",done:true},
                {task:"fare esercizi Boolean",done:true},
            ],
           //milestone 1:creo data da collegare ad input
           dataInput:{
            testo:"",
            done:true,
           },
        }
    }, methods:{
        /* milestone 1:scrivo funzione che al click 
        stampa il dato in console e lo pusha nell'array */
        fBottoneAggiungi(){
            console.log(this.dataInput.testo)
            this.listaToDo.push(this.dataInput)
            console.log(this.listaToDo)
        },
        /*milestone 2:scrivo funzione che al click 
        toglie l'indice selezionato */
        fXToglie(i){
            this.listaToDo[i]="";
        }

    }
}).mount("#app");