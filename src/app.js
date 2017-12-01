import React,{Component} from 'react'
// import { addNum, reduceNum } from './index.redux'

class App extends Component{
    render(){
        const store = this.props.store;
        const Num= store.getState()
        return(
            <div>
             <h2>现在的数字{Num}</h2>
             <button onClick={()=>store.dispatch(this.props.addNum())}>增加</button>
             <button onClick={()=>store.dispatch(this.props.reduceNum())}>减少</button>
             <button onClick={()=>store.dispatch(this.props.laterNum())}>延迟</button>
            </div>
        )
    }
}

export default App