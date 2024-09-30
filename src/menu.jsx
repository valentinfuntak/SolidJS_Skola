import { createSignal, Match, Switch } from "solid-js";

export default function menu() {
    const [x, setX] = createSignal(0);

    setInterval(() => {
        setX(x() + 1 );
    }, 1000);

    return (
        <>
            <p>X = {x()}. </p>
            <Switch fallback={<p>X je između 5 i 10</p>}>
                <Match when={x() > 10}>
                    <p>X je veći od 10</p>
                </Match>
                <Match when={x() < 5}>
                    <p>X je veći od 10</p>
                </Match>
            </Switch>
        </>
    );
}