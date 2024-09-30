//u e se sprema sve sto je spremljeno za taj event
import { createSignal, For, onCleanup, onMount } from "solid-js"
import { Dynamic } from "solid-js/web"

const Red = () => <p style="background-color: red;">Crvena</p>
const Blue = () => <p style="background-color: blue;">Plava</p>
const Green = () => <p style="background-color: green;">Zelena</p>
const Violet = () => <p style="background-color: violet;">Roza</p>

function  Something() {
    onMount( () => {
        console.log("Komponenta je stvorena!");
    });

    onCleanup ( () => {
        console.log("Komponenta je uništena!");
    });

    return(
        <div>
            <H1>I am something</H1>
        </div>
    )
}

const options = {
    red: Red,
    blue: Blue,
    green: Green,
    violet: Violet,
    something: Something
}

const keysAsArray = Object.keys(options); 

export default function Dynamo() {
    const [selected, setSelected] = createSignal("red");

    return (
        <div>
            <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
                {/*<option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>*/}
                {/*<For each={Object.keys(options)}></For>*/}
                <For each={keysAsArray}>              
                    {
                        (color) => <option value={color}>{color}</option>
                    }
                </For>
            </select>
            <Dynamic component={options[selected()]}></Dynamic>

        </div>
    )
}