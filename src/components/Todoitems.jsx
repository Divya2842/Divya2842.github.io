import styles from "./todoitems.module.css";
export default function Todoitems({ item, list, setList }) {
  function handledelete(item) {
    console.log("deleted item is", item);
    setList(list.filter((ditem) => ditem !== item));
  }
  function handleclick(name) {
    const newlist = list.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setList(newlist);
  }
  const linethrough = item.done ? styles.completed : "";
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitemname}>
        <span onClick={() => handleclick(item.name)} className={linethrough}>
          {" "}
          {item.name}{" "}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deletebutton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
