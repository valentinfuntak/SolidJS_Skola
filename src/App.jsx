import styles from './App.module.css';
import Component from './MyComponent';
import Brojac from './Brojac';
import Brojac2 from './Brojac2';
import Login from './login';

{/*Komentar*/}

function App() {
  return (
    <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <div>Test</div>
    <Component/>
    <Brojac/>
    <Brojac2/>
    <Login/>
    </>
  );
}

export default App;
