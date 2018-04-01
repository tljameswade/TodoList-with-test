import Link from '../presentational/link';
import { set_filter } from '../../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => dispatch(set_filter(ownProps.text))
    }
}

export default connect(null, mapDispatchToProps)(Link);
