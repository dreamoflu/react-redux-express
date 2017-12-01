// import { setTimeout } from "timers";


let add = 'add';
let reduce = 'reduce';
export const reducer = (state = 0, action) => {   //Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
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

export const addNum = () =>{
    return {type:add}
}
export const reduceNum = () =>{
    return {type:reduce}
}

//异步函数
export const laterNum = () => {
    return fn => {
        setTimeout(()=>{
        fn(addNum())
        },2000)
    }
}