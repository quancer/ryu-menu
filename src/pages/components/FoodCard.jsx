import { useState } from "react";

export default function FoodCard({i,props, onOpen}){
    // const [selectedItem, setSelectedItem] = useState(null);
    let t = props.description[i];
    let c = t.slice(0,45);
    let more = ["Дэлгэрэнгүй","More"]
    return <div className="bg-[#181818] p-4 flex flex-col gap-3 rounded-xl">
        <div className="flex justify-center">
            <img src={props.pic} alt="" className="h-[100px] w-auto"/>
        </div>
        <h1 className="text-xl font-bold h-[55px] overflow-hidden
">{props.name[i]}</h1>
        <p>{c+"..."}</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => onOpen(props)}>{more[i]}</button>
    </div>
}


