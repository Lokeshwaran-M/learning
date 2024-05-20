import { useState } from "react";
import { Card } from "./blocks/cards.jsx";

function App() {
  const [count, setCount] = useState(0);


  return (
    <div >
      <div>
        <Card />
        <Card />
        <Card
          header="Dynamic Header"
          p="Dynamic Paragraph"
          imageUrl="https://example.com/image.png"
        />
        <Card
          header="Dynamic Header"
          p="Dynamic Paragraph"
          imageUrl="https://example.com/image.png"
        />
      </div>
    </div>
  );
}

export default App;
shell