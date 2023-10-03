import { Age } from "./Age";

export function Welcome({ name = "Raúl", age }) {
  return (
    <div>
          <p>Welcome, { name }!</p>
          {age && <Age age={age} />}
    </div>
  );
}
