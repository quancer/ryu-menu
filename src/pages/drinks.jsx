import Header from "./components/Header";
import Foods from "./components/Foods";
import { useState } from "react";

export default function Home() {
    const [language, setLanguage] = useState(true);

  return (
    <div className="max-w-[800px] m-auto">
      
      <Header change={setLanguage} lan={language} page={"drinks"}/>
      <div className="py-5">
        <img src="./drink1.jpeg" alt="" className="px-2 py-1"/>
        <img src="./drink2.jpeg" alt="" className="px-2 py-1" />
        <img src="./drink3.jpeg" alt="" className="px-2 py-1" />
        <img src="./drink4.jpeg" alt="" className="px-2 py-1" />
      </div>
    </div>
  );
}
