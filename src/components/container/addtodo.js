import { add_todo } from '../../actions/actions';
import { connect } from 'react-redux';
import AddToDo from '../presentational/addtodo';

const mapDispatchToProps = (dispatch) => {
    return {
        addtodo: (text) => {
            dispatch(add_todo(text));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddToDo);

