//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        //milestone 0:creazione array 
        return{
            //bonus 1:creazione array oggetti
            listaToDo:[
                {task:"fare sport",done:false},
                {task:"mangiare",done:false},
                {task:"dormire",done:false},
                {task:"fare esercizi Boolean",done:false},
            ],
           //milestone 1:creo data da collegare ad input
           dataInput:{
            task:"",
            done:false,
           },
        }
    }, methods:{
        /* milestone 1:scrivo funzione che al click 
        stampa il dato in console e lo pusha nell'array */
        //bonus 1: adatamento funzione ad array con object
        fBottoneAggiungi(){
            console.log(this.dataInput.task)
            this.listaToDo.push(this.dataInput)
            console.log(this.listaToDo)
            this.dataInput={
                task:"",
                done:true,
               }
        },
        /*milestone 2:scrivo funzione che al click 
        toglie l'indice selezionato */
        //bonus 1: al click non viene eliminato, ma cambia classe
        fXDone(i){
            //this.listaToDo[i]="";
            this.listaToDo[i].done=true;
        }

    }
}).mount("#app");