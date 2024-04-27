import { connect } from 'react-redux';
import SideBar from './SideBar';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;