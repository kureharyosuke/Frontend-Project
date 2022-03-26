import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  // const [number, setNumber] = useState({
  //   first: Math.ceil(Math.random() * 9),
  //   second: Math.ceil(Math.random() * 9),
  // });
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onChangeFromInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (first === "" || second === "") {
      alert("두 수를 입력하세요.");
      return;
    } else if (first * second === parseInt(input)) {
      alert("정답입니다.");
      setResult("정답입니다.");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setInput("");
    } else {
      alert("오답입니다.");
      setResult("오답입니다.");
      setInput("");
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        {first} X {second}
      </div>
      <Input type={"number"} placeholder={"숫자"} value={input} onChange={onChangeFromInput} />
      <Button type={"submit"}>submit</Button>
      {first * second === Number(input) ? <div>{result}</div> : <div>{result}</div>}
    </Form>
  );
};

GuGuDan.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default GuGuDan;
