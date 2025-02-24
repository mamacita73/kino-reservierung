import { useState } from 'react'

import React from "react";
import Saalliste from "./components/Saalliste";

function App() {
  const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Kino Reservierungssystem</h1>
            <Saalliste />
        </div>
    );
}

export default App
