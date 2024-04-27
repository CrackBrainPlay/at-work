import DialogItemNav from './DilogItemNav';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

const DilogItemNavContainer = connect(mapStateToProps)(DialogItemNav);

export default DilogItemNavContainer;