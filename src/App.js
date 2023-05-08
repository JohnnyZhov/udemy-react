import Modal from './components/Modal';
import Todo from './components/Todo';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Text 1"/>
      <Todo text="Text 2"/>
      <Todo text="Text 3"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
