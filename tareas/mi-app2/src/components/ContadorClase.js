import React, {Component} from "react";

class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state = { count: 0};
    }

    render(){
        return (
            <div>
                <p>Usted ha clicleado {this.state.count}</p>
                <button onClick={()=>this.setState({ count: this.state.count + 1})}>Suma Funcional</button>
                <button onClick={()=>this.setState({ count: this.state.count - 1})}>Resta Funcional</button>
            </div>
        );
    }
}

export default CounterClass;