import { createBrowserHistory } from 'history';
import { createStore } from "redux";

export const history = createBrowserHistory();
export const store = createStore(() => {}, {});