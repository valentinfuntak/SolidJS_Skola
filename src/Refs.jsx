export default function Refs() {
    let Ivo;

    function checkElement (){
        console.log(Ivo.innerHTML);
        
        const newElement = document.createElement("p");
        newElement.textContent = "Riba ribi grize rep!"
        Ivo.appendChild(newElement);
    }

    return (
        <>
            <div ref = {Ivo}>
                Tajna 
            </div>
            <button onClick={checkElement}>Reci mi</button>
        </>
    );
}