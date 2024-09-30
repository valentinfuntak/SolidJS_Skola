//Index efikasniji za složena polja
import { createSignal, For, Index } from "solid-js";

export default function Flow() {
   
    const [users, setUSers] = createSignal([        
        { id: "1213123", name: "Pero Perič"},
        { id: "2123123", name: "Ana Janič"},
        { id: "3213131", name: "Ivo Repić"},
        { id: "4523352", name: "Marko Sučić"},
    ]);



    return (
        <div>
            <ul>
                <For each = {users()}>
                    {
                        (user, i) => 
                            <li>
                                /{i} / {user.id}: {user.name}
                            </li>
                    }
                </For>
            </ul>
            <ul>
                <Index each = {users()}> 
                    {
                        (user, i) => 
                            <li>
                                /{i} / {user().id}: {user().name}
                            </li>
                    }
                </Index>
            </ul>
        </div>
    );
}
