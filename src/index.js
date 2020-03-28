import './styles.css'
import { createStore } from "./createStore";
import {rootReduser} from "./redux/rootReducer";

const store = createStore(rootReduser, 0);

const counter = document.getElementById('counter');
const themeBtn = document.getElementById('theme');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});
subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
});
asyncBtn.addEventListener('click', () => {

});
themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark');
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.toString();
});

store.dispatch({type: 'INIT'});

