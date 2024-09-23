import Todoitems from "./Todoitems";
import styles from "./displayitem.module.css";
export default function Displayitem({ list, setList }) {
  const sortedtodos = list
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <Todoitems item={item} key={item.name} list={list} setList={setList} />
      ))}
    </div>
  );
}
