class Com extends React.Component{
    constructor(props){
        super(props);
        this.state = {total : 0};
    }

    test(){
        this.setState({total: this.state.total + 1});
    }

    render(){
        return(
            <div>
                <button onClick={this.test.bind(this)}>Hello {this.state.total}</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Com></Com>, document.getElementById('root')
);