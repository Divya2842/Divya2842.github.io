import { useState } from "react";
import Displayitem from "./Displayitem";
import Footer from "./Footer";
import Form from "./Form";

export default function Todolist() {
  const [list, setList] = useState([]);
  const completedtodos = list.filter((todo) => todo.done).length;
  const totaltodos = list.length;
  return (
    <div>
      <Form list={list} setList={setList} />
      <Displayitem list={list} setList={setList} />
      <Footer completedtodos={completedtodos} totaltodos={totaltodos} />
    </div>
  );
}
