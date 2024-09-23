import { createSignal, Show } from "solid-js";

export default function Login() {
    const [loggedin, setLoggedin] = createSignal(false);
    const toggle = () => setLoggedin(!loggedin());

    return (
        <div>
            {/*{loggedin() && <button onClick={toggle}>Log out</button>}
        { !loggedin() &&<button onClick={toggle}>Log in</button>}*/}

        <Show when= {loggedin()}
            fallback = {button onClick={toggle}>Log in</button>}>
            <button onClick={toggle}>Log in</button>
        </Show>
        </div>
    );
}