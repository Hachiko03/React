import { Age } from "./Age";

export function Welcome({ name = "Raúl", age }) {
  return (
    <div>
          {name === "John" && age > 18 && age < 65 ? <p>Welcome, { name }!</p> : null}
          {age > 18 && age < 65 && <Age age={age} />}
    </div>
  );
}
