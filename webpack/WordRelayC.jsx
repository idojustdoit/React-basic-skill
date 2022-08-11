const React = require("react");
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: "이도저도",
    result: "",
    value: "",
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: value,
        result: "정답",
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <div>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력하기</button>
          <div>{this.state.result}</div>
        </form>
      </div>
    );
  }
}
module.exports = WordRelay;
