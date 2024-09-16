import styles from './App.module.css';
import Component from './MyComponent';

{/*Komentar*/}

function App() {
  return (
    <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <div>Test</div>
    <Component/>
    </>
  );
}

export default App;
