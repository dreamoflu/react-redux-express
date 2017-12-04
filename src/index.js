import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer,addNum, reduceNum,laterNum} from './index.redux';
const reduxDevtools= window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(reducer,
    compose(applyMiddleware(thunk),
        reduxDevtools
        ));


const render= () =>{
    ReactDom.render(<App store={store} addNum={addNum} reduceNum={reduceNum} laterNum={laterNum}/>,document.getElementById('root'))
}
render()
store.subscribe(render)  //数据变化就执行render函数
