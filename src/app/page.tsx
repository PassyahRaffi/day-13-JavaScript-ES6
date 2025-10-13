import { object, name, age, array, first, second, third } from "@/utils/desturing";
import { sum, arrowFunction } from "@/utils/logic";

export default function Home() {
  return (
    <div className="container mx-auto my-20 grid gap-10">
      <div>
        <h2 className="text-lg font-bold">Arrow Function</h2>
        <pre className="italic">{arrowFunction}</pre>
        <p>a = 10</p>
        <p>b = 5</p>
        <p>console.log = {sum(10, 5)}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Destructuring Object</h2>
        <pre className="italic">{object}</pre>
        <p>name = Reva</p>
        <p>age = 22</p>
        <p>console.log name = {name}</p>
        <p>console.log age = {age}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Destructuring Array</h2>
        <pre className="italic">{array}</pre>
        <p>console.log first = {first}</p>
        <p>console.log second = {second}</p>
        <p>console.log third = {third}</p>
      </div>
    </div>
  );
}
