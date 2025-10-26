export function NavBar() {
  return (
    <ul
      style={{
        margin: 0,
        width: "100%",
        listStyleType: "none",
        display: "flex",
        padding: "2%",
        background: "grey",
        color: "white",
      }}
    >
      <li
      // style={{
      //   paddingRight: "5%",
      // }}
      >
        <button>Home</button>
      </li>
      <li
        style={{
          paddingLeft: "5%",
          //   paddingRight: "5%",
        }}
      >
        <button>Add Task</button>
      </li>
    </ul>
  );
}
