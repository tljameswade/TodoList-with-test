import Link from '../presentational/link';
import { set_filter } from '../../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (text) => dispatch(set_filter(text))
    }
}

export default connect(null, mapDispatchToProps)(Link);
