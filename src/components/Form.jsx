import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ list, setList }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handlesubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.form} onSubmit={handlesubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.forminput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter the task here"
        />
        <button className={styles.formbutton}>add</button>
      </div>
    </form>
  );
}
