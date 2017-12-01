import { createStore  } from 'redux'  //createStore这个函数，用来生成 Store。

let add = 'add';
let reduce = 'reduce';



const reducer = (state = 0, action) => {   //Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
                                         //Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
    switch (action.type) {
        case add:
            return state + 1
        case reduce:
            return state - 1
        default:
            return 10

    }
}
const store = createStore(reducer)  //createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。
const init = store.getState()  //获取state的数据
console.log(init)


const listener = () =>{
    console.log(store.getState())
}

store.subscribe(listener) //监听函数，数据变化就会执行函数


store.dispatch({type:add})  //派发事件，传递action

//console.log(store.getState())//派发事件后再次获取state数据