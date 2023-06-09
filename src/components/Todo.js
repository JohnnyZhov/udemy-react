function Todo(props) {
    function deleteHandler(){
        console.log(props.text);
    }
  return (
    <div className="">
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
