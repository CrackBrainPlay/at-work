const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Stas' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Pasha' },
        { id: 6, name: 'Dima' }],
    massagesData: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'How are you?' },
        { id: 4, text: 'Why do you not answer me?' }],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                massagesData: [...state.massagesData, { id: state.massagesData.length + 1, text: newMessage }]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
}

// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

// export const onMessageChangeActionCreator = (text) =>
// ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     newText: text
// })
export const addMessage = () => ({ type: ADD_MESSAGE })

export const onMessageChange = (text) =>
({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default messagesReducer;