import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    
    Increment()
    {
        // this.state.count = this.state.count + 1;
        // Above line of code will not works AS :~
        // When the state will change UI will not be rendered that why
        //  UI won't be updated that's why
        // we should use setSate instead of reassigning the state but incrementing it
        // The only place where you can assign a value to this.state is contrcutor method
        // to change the value of state, In all the methods other than constructor,
        //  you have to use setState instead of reassigning the state 
        
        // this.setState({count: this.state.count + 1});
        // console.log(this.state.count);

        //  When you will console, you will get that console value of count is always 
        // 1 less that that of actuall count on UI, 
        // This is because call to setState are asynchronous
        // SO what is happening is that console.log is being called before the state is actually set
        // If you really want the updated count you have pass a callback in in setState as a 2nd parameter like this.state

        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     (()=>{
        //         console.log('Callback value of count is : ',this.state.count)
        //     })
        // );    
        // The above is not the best case result because if you will make more than 1 simultaneous calls it will not increase more thhan once due to asynchronous behaviour of the setState method
        // So the best method to implement that is the following : function
        this.setState(prevState =>({
            count : prevState.count+1
        }))
        
    }

    Double()
    {
        this.setState(prevState =>({
            count : prevState.count*2
        })) 
    }

    Reset()
    {
        this.setState(prevState =>({
            count : 0
        })) 
    }

    // NOTE : React make multiple group setState Call into a single setStaet call for better performance
    // for example if we execute the following function 
    // IncrementFiveTime(){
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    // }

    Decrement(){
        // this.setState({count: this.state.count - 1});
        // If you write the same above lines 5 time ideally yit should decrease the value by 5 times, but instead of doing this
        // It is changing it once, since in react Multiple group calls to setState is converted to single setState call for better performance
        // So the best way to achive it is to use the fowllowing lines of code
        this.setState(prevState =>({
            count : prevState.count-1
        }))

    }

    // IncrementFiveTime();
    render() {
        return (
            <div>
                <h1>Count</h1>
                <div className="curr-count">
                    <p>{this.state.count}</p>
                </div>
                <button onClick={()=>this.Increment()} className="count-btn"> Add </button>
                <button onClick={()=>this.Decrement()} className="count-btn"> Reduce </button>
                <button onClick={()=>this.Double()} className="count-btn"> Double </button>
                <button onClick={()=>this.Reset()} className="count-btn"> Reset </button>
            </div>
        )
    }
}

export default Counter;
