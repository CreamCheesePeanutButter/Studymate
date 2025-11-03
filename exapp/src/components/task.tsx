export class Task {
  private _id: number;
  private _checked: boolean;
  private _title: string;
  private _description: string;
  readonly deadline: Date;

  constructor(
    id: number,
    checked: boolean,
    title: string,
    description: string,
    deadline: Date
  ) {
    this._id = id;
    this._checked = checked;
    this._title = title;
    this._description = description;
    this.deadline = deadline;
  }

  // Getter and Setter for id
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  // Getter and Setter for checked
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }

  // Getter and Setter for title
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    if (value.trim() === "") {
      throw new Error("Title cannot be empty");
    }
    this._title = value;
  }

  // Getter and Setter for description
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  // Getter for deadline (no setter because it's readonly)
  getDeadline(): Date {
    return this.deadline;
  }
  handleCheckboxChange(checked: boolean) {
    this._checked = checked;
  }
  // function return HTML file
  render() {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <input type="checkbox" id="task1" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.6",
          }}
        >
          <h3>{this.title}</h3>
          <p>{this.description}</p>
          <p>Deadline: {this.deadline.toDateString()}</p>
        </div>
      </div>
    );
  }
}
