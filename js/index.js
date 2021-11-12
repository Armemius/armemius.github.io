class Block extends React.Component {
    render() {
        return (<div>
                    {this.props.children}
                </div>);
    }
}
ReactDOM.render(<Block>Sussy baka</Block>, document.getElementById("test"));