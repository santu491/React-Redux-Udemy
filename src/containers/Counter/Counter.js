import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        console.log("this.props.storedResults", this.props.storedResultsData)
        return (
            // <div>
            //     <CounterOutput value={this.props.counter} />
            //     <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
            //     <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
            //     <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
            //     <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            // </div>
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.countIncrement} />
                <CounterControl label="Decrement" clicked={this.props.countDecrement} />
                <CounterControl label="Add 10" clicked={this.props.countAdd} />
                <CounterControl label="Subtract 15" clicked={this.props.countSubstract} />
                <hr></hr>
                <button onClick={()=>this.props.storedResults(this.props.counter)}>Store Results</button>
                <ul>
                    {this.props.storedResultsData.map((res) => (

                        <li key={res.id} onClick={()=>this.props.deleteresults(res.id)}>{res.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        storedResultsData: state.result.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
        countDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        countAdd: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        countSubstract: () => dispatch({ type: actionTypes.SUBSTRACT, value: 15 }),
        storedResults: (value) => dispatch({ type:actionTypes.STORE_RESULTS,payload:value }),
        deleteresults:(id)=>dispatch({type:actionTypes.DELETE_RESULTS,id:id})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);