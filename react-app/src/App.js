import logo from './logo.svg';
import './App.css';
import {useState, usestate} from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={
        (e) => {
          e.preventDefault();
          props.onChangeMode();
        }
      }>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  const lis = [
  ];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/"+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id: 1, title: 'HTML', desc: 'HTML is ...'},
    {id: 2, title: 'CSS', desc: 'CSS is ...'},
    {id: 3, title: 'JavaScript', desc: 'JavaScript is ...'},
  ];
  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"/>
  }
  else if(mode === 'READ') {
    let title, desc = null;
    for (let i = 0; i < topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        desc = topics[i].desc;
      }
    }
    content = <Article title={title} body={desc}/>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}/>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
    }}/>
      {content}
    </div>
  )
}

export default App;
