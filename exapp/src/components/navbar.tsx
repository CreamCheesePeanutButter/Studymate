// import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <ul
      style={{
        margin: 0,
        width: "100%",
        listStyleType: "none", // remove dot form
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
        {/* <Link to="/"> */}
        <button
          style={{
            height: "100%",
            backgroundColor: "grey",
          }}
        >
          Home
        </button>
        {/* </Link> */}
      </li>
      <li
        style={{
          paddingLeft: "5%",
          //   paddingRight: "5%",
        }}
      >
        {/* <Link to="/about"> */}
        <button>About</button>
        {/* </Link> */}
      </li>
    </ul>
  );
}
