import { createSignal, onMount, mergeProps } from "solid-js";

export default function Spreads (){
    
    const [name, setName] = createSignal();

    return(
        <>
            <Local greetinng = "Dobar dan" name = "Pero"/>
            <Local name = "Jozo"/>
            <Local greetinng = "Bogdaj"/>
            <Local name ={name()}/>

            <button onClick={() => setName("Jura")}>Promijeni ime</button>
        </> 
    )

    function Local(props){
        
        const merged = mergeProps({greeting: "Bok", name:"Ivan"},props);

        return(
            <h1>{merged.greeting} {merged.name}</h1>
        );
    }

}