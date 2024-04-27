import { connect } from 'react-redux';
import OutputMessages from './OutputMessages';

const mapStateToProps = (state) => {
    return {
        massagesData: state.messagesPage.massagesData
    }
}

const OutputMessagesContainer = connect(mapStateToProps)(OutputMessages);

export default OutputMessagesContainer;