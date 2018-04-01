import React from 'react';
import { add_todo } from '../../actions/actions';
import { connect } from 'react-redux';

export const AddTodo = ({addtodo}) => {
    let inputText;

    return (
    <div>
        <input type='text' placeholder='A new task' ref={node => inputText = node}/>
        {' '}
        <button onClick={() => {
            if (inputText.value === '') {
                return;
            }
            addtodo(inputText.value);
            inputText.value = '';
        }}>Add a new todo</button>
    </div>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtodo: (text) => {
            dispatch(add_todo(text));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);

