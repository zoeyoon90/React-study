import { TodoItem } from './TodoItem'
import '../style/App.css'

function App() {
  const todos = ['리액트 기초 배우기', 'To-Do List 만들어보기']

  return (

    <div className='app-contaniner'>
      <h1 className='title'>오늘의 할 일</h1>

      <section className='input-section'>
        <input text='text' placeholder='새로운 할 일을 입력하세요'/>
        <button>추가</button>
      </section>

      <section className='list-section'>
        <ul className='todo-list'>
          {todos.map((todoText, index)=> (
            <TodoItem key={index} text={todoText}/>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
