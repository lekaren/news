import { createStore, applyMiddleware } from "redux";
import { getArticles } from "./api/news";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
const initialState = {
  isLoading: true,
  general: "",
  sports: "",
  health: "",
  entertainment: "",
};
const sagaMiddleware = createSagaMiddleware();
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        isLoading: true,
      };
    case "DATAS":
      return {
        ...state,
        [action.category]: action.data,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
function* DataSaga(action) {
  try {
    const Datas = yield call(() => getArticles(action.category));
    yield put({
      type: "DATAS",
      data: Datas,
      isLoading: false,
      category: action.category,
    });
  } catch (e) {
    yield alert(e);
  }
}
function* rootSaga() {
  yield takeEvery("CLICK", DataSaga);
}
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);