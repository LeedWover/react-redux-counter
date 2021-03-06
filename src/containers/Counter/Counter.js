import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult, index) => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(index)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCounters.increment()),
        onDecrementCounter: () => dispatch(actionCounters.decrement()),
        onAddCounter: () => dispatch(actionCounters.add(10)),
        onSubtractCounter: () => dispatch(actionCounters.subtract(15)),
        onStoreResult: (result) => dispatch(actionResults.storeResult(result)),
        onDeleteResult: (index) => dispatch(actionResults.deleteResult(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);