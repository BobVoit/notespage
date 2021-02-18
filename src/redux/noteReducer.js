import { notesAPI } from '../api/api';

const SET_NOTES = 'SET_NOTES';
const SET_ONE_NOTE = 'SET_ONE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const SET_COUNT_NOTES = 'SET_COUNT_NOTES';
const SET_DATE_LAST_TODO = 'SET_DATE_LAST_TODO';

let initialState = {
    notes: [],
    countNotes: null,
    dateLastNote: '',
}


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES: {
            return {
                ...state,
                notes: action.notes
            }
        }
        case SET_ONE_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.noteId)]
            }
        }
        case SET_COUNT_NOTES: {
            return {
                ...state,
                countNotes: action.countNotes
            }
        }
        case SET_DATE_LAST_TODO: {
            return {
                ...state,
                dateLastNote: action.date
            }
        }
        default:
            return state;
    }
}

// action creators

export const setNotes = (notes) => ({
    type: SET_NOTES,
    notes
})

export const setOneNote = (note) => ({
    type: SET_ONE_NOTE,
    note
})

export const deleteNoteFromState = (noteId) => ({
    type: DELETE_NOTE,
    noteId
})

export const setCountNotes = (countNotes) => ({
    type: SET_COUNT_NOTES,
    countNotes
})

export const setDateLastTodo = (date) => ({
    type: SET_DATE_LAST_TODO,
    date
})

// thunks

export const addNote = (id, title, message) => async (dispatch) => {
    let response = await notesAPI.addNote(id, title, message);
    let data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(setOneNote(data));
    }
}

export const getAllNotes = (id) => async (dispatch) => {
    let response = await notesAPI.getAllNotes(id);    
    let data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(setNotes(data));
    }
}


export const deleteNote = (noteId) => async (dispatch) => {
    let response = await notesAPI.deleteNote(noteId);
    if (response.data.result === 'ok') {
        dispatch(deleteNoteFromState(noteId));
    }
}

export const getCountNotes = (id) => async (dispatch) => {
    let response = await notesAPI.getCountNotes(id);
    let { result, data } = response.data;
    if (result === 'ok') {
        dispatch(setCountNotes(data)); 
    }
}

export const getDateLastNote = (id) => async (dispatch) => {
    let response = await notesAPI.getDataLastNote(id);
    let { result, data } = response.data;
    if (result === 'ok') {
        dispatch(setDateLastTodo(data)); 
    }
}

export const getStats = id => dispatch =>{
    dispatch(getCountNotes(id));
    dispatch(getDateLastNote(id));
}

export default notesReducer;