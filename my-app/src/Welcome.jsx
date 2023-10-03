import { Age } from "./Age";

export function Welcome({ name = "Raúl", age }) {
  return (
    <div>
          <p>Welcome, { name }!</p>
          {age > 18 && <Age age={age} />}
    </div>
  );
}
