import logo from './logo.svg';
import './App.css';

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
        props.onChangeMode(event.target.id);
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
  const topics = [
    {id: 1, title: 'HTML', desc: 'HTML is ...'},
    {id: 2, title: 'CSS', desc: 'CSS is ...'},
    {id: 3, title: 'JavaScript', desc: 'JavaScript is ...'},
  ];
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('header');
      }}/>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}/>
      <Article title="Welcome" body="Hello, WEB!"/>
    </div>
  )
}

export default App;
