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

function Create(props) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const title = event.target.form.title.value;
      const body = event.target.form.body.value;
      props.onCreate(title, body);
    }
  };
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
    <p><input type="text" name='title' placeholder='title'/></p>
    <p><textarea name='body' placeholder='Describe body'onKeyDown={handleKeyDown}/></p>
    <p><input type='submit' value='Create'></input></p>
    </form>
    </article>
}

function Update(props){
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const title = event.target.form.title.value;
      const body = event.target.form.body.value;
      props.onUpdate(title, body);
    }
  };
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
    <p><input type="text" name='title' placeholder='title' value={title} onChange={event=>{
      console.log(event.target.value);
      setTitle(event.target.value);
    }}/></p>
    <p><textarea name='body' placeholder='Describe body' value={body} onKeyDown={handleKeyDown} onChange={event=>{
      setBody(event.target.value);
    }}/></p>
    <p><input type='submit' value='Update'></input></p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title: 'HTML', body: 'HTML is ...'},
    {id: 2, title: 'CSS', body: 'CSS is ...'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is ...'},
  ]);
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"/>
  }
  else if(mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}/>
    contextControl=<>
    <li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li><input type='button' value="Delete" onClick={()=>{
      const newTopics = []
      for (let i=0; i<topics.length; i++) {
        if(topics[i].id !== id){
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}/></li>
    </>
  }
  else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}/>
  }
  else if(mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const newTopics =[...topics];
      const updatedTopic = {id:id, title:title, body:body};
      for(let i = 0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
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
      <ul>
        <li>
          <a href="/create" onClick={event=>{
            event.preventDefault(); // 이벤트의 기본 동작을 중단(여기서는 링크 이동)시키는 함수
            setMode('CREATE');
          }}>CREATE</a>
        </li>
        {contextControl}

      </ul>
    </div>
  )
}

export default App;