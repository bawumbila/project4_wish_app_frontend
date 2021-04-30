import Form from './Form.js';

function Aside(props) {
    return (
      <aside>
        <Form handleAdd={props.handleAdd}/>
      </aside>
    );
}

export default Aside;
