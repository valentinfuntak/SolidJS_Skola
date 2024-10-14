import styles from './App.module.css';
import Component from './MyComponent';
import Brojac from './Brojac';
import Brojac2 from './Brojac2';
import Login from './login';
import Flow from './flow';
import Menu from './menu';
import Dynamo from './Dynamo';
import Events from './events';
import Styles from './styles';
import Refs from './Refs';
import Spreads from './Spreads';
import Pwp from './pwp';
import Childern from './childern';

{/*Komentar*/}

function App() {
  return (
    <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <Childern/>

    {/*
    <Spreads/>
    <Pwp/>
    <div>Test</div>
    <Component/>
    <Brojac/>
    <Brojac2/>
    <Login/>
    <Flow/>
    <Menu/>
    <Dynamo/>
    <Events/>
    <Styles/>
    <Refs/>*/}
    </>
  );
}

export default App;
