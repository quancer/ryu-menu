import Header from "./components/Header";
import Foods from "./components/Foods";
import { useState } from "react";

export default function Home() {
    const [language, setLanguage] = useState(true);

  return (
    <div className="max-w-[800px] m-auto">
      
      <Header change={setLanguage} lan={language} page={"food"}/>
      <Foods language={language}/>
    </div>
  );
}
