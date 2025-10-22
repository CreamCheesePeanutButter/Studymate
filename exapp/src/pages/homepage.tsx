function myCheckBox() {
  return (
    <input
      type="checkbox"
      //   checked={isChecked}
      //   onChange={handleCheckboxChange}
    />
  );
}

export function Homepage() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h4>Welcome to the Homepage</h4>
      <ul>
        <li>{myCheckBox()}</li>
      </ul>
    </div>
  );
}
