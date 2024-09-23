import { createEffect, createSignal } from "solid-js"

export default function Brojac (){
    const[count,setCount] = createSignal(0); 
    //Za stvaranje siglana koristimo metodu create signal, vraća polje count koja je sama vrijednost signala 0, a druga je funkcija koja mijenja vrijednost, count je metoda koju zovemo kada zelimo citati vrijednost

    const doubleCount = () => count() *2;

    createEffect(() => {  
        console.log("Varijabla se promijenila na " + count());
        {/*if (count() >= 10) {
            setCount(0);
        }*/}
    });

    setInterval(() => {
        setCount(count() + 1);
    }, 1000);

    return(
        <div>
            Brojač: {count()} <br/>
            Dupli brojač: {doubleCount()}
        </div>
    )
}