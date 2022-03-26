import React, { Component } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

export class Class extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  onChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.value === "") {
      alert("두 수를 입력하세요.");
      return;
    } else if (this.state.first * this.state.second === parseInt(this.state.value)) {
      alert("정답입니다.");
      this.setState({
        result: "정답입니다.",
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
      });
      this.inputRef.focus();
    } else if (this.state.first * this.state.second !== parseInt(this.state.value)) {
      alert("오답입니다.");
      this.setState({
        result: "오답입니다.",
        value: "",
      });
      this.inputRef.focus();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.first} * {this.state.second}
        </div>
        <Form onSubmit={this.onSubmitForm}>
          <Input
            inputRef={this.onRefInput}
            name={"value"}
            type={"number"}
            placeholder={"정답을 입력"}
            value={this.state.value}
            onChange={this.onChangeForm}
          />
          <Button type="submit">입력</Button>
        </Form>
        {this.state.first * this.state.second === parseInt(this.state.value) ? <h5>{this.state.result}</h5> : <h5>{this.state.result}</h5>}
        {this.state.result && <h1>{this.state.result}</h1>}
      </React.Fragment>
    );
  }
}

export default Class;
