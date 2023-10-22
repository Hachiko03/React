import { Age } from "./Age";

export function Welcome({ name = "Raúl", age }) {
  return (
    <div className="welcome">
          {/* name === "John" && age > 18 && age < 65 ?  */<p>Welcome, { name }!</p> }
          {/* age > 18 && age < 65 &&  */<Age age={age} />}
    </div>
  );
}
