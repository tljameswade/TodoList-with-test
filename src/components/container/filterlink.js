import Link from '../presentational/link';
import { filter_todo } from '../../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => dispatch(filter_todo(ownProps.text))
    }
}

export default connect(null, mapDispatchToProps)(Link);
