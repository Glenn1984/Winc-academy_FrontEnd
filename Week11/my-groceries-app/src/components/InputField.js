import React, {Component} from "react"

class InputField extends Component {
    state = {
        input: ""
    };

    render() {
        const onInput = e => {
            console.log("onInput event ", e)
            console.log("onInput event ", e.target.value)
            e.preventDefault();
            this.setState({
                input: e.target.value
            });
        };

        const onSubmit = event => {
            console.log("onSubmit event ",event)
            event.preventDefault();
            this.props.onSubmit(this.state.input);
            this.setState({
                input: ""
            });
        };

        return (
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Add groceries"
                    type="search"
                    onChange={onInput}
                    value={this.state.input}
                ></input>
                <button
                    type="submit"
                >
                    Add to list
                </button>
            </form>
        );
    };
};

export default InputField