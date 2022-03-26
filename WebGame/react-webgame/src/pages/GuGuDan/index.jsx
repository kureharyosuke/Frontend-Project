import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const inputRef = useRef(null);

  const [gugudan, setGugudan] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  });

  const onChangeFromInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (first === "" || second === "") {
      alert("두 수를 입력하세요.");
      inputRef.current.focus();
      return;
    } else if (first * second === parseInt(value)) {
      alert("정답입니다.");
      setResult("정답입니다.");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      alert("오답입니다.");
      setResult("오답입니다.");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeFormInput2 = (e) => {
    setGugudan({
      ...gugudan,
      // value: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm2 = (e) => {
    e.preventDefault();
    if (gugudan.value === "") {
      alert("숫자를 입력하세요.");
      inputRef.current.focus();
      return;
    } else if (gugudan.first * gugudan.second === Number(gugudan.value)) {
      alert("정답입니다.");
      setGugudan({
        ...gugudan,
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        result: "정답입니다.",
        value: "",
      });
      inputRef.current.focus();
    } else {
      alert("오답입니다.");
      setGugudan({
        ...gugudan,
        result: "오답입니다.",
        value: "",
      });
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <div>
          {first} X {second}
        </div>
        <Input inputRef={inputRef} type={"number"} placeholder={"숫자"} value={value} onChange={onChangeFromInput} />
        <Button type={"submit"}>submit</Button>
        {first * second === Number(value) ? <div>{result}</div> : <div>{result}</div>}
      </Form>
      <Form onSubmit={onSubmitForm2}>
        <div>
          {gugudan.first} X {gugudan.second}
        </div>
        <Input
          inputRef={inputRef}
          type={"number"}
          placeholder={"숫자"}
          name={"value"}
          value={gugudan.value}
          onChange={onChangeFormInput2}
        />
        <Button type={"submit"}>submit</Button>
        {gugudan.first * gugudan.second === Number(gugudan.value) ? <div>{gugudan.result}</div> : <div>{gugudan.result}</div>}
      </Form>
    </>
  );
};

GuGuDan.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default GuGuDan;
