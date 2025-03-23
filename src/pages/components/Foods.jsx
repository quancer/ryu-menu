import { useState } from "react";
import food from "../utils/foodData";
import FoodCard from "./FoodCard";
import foods from "../utils/data";
import { useLanguage } from "../context/LanguageContext";

export default function Foods({language}){
    const [selectedItem, setSelectedItem] = useState(null);
    // const [language, setLanguage] = useState(true);
    // let {language , changeLanguage} = useLanguage;
    let lan,ind;
    language ? lan ="mn" : lan="eng";
    language ? ind =0 : ind=1;
    let close = ["Хаах","Close"]
    // function changeLan(){
    //   setLanguage(!language);
    //   // changeLanguage();
    // }
    return <div>
      {/* <div><button onClick={changeLan}>{lan}</button></div> */}
      <div className="grid grid-cols-2 p-4 flex-wrap gap-3">
      {
        foods.map((data,index)=>{
          return <FoodCard key={index} i={ind} props={data} onOpen={setSelectedItem} />
        })
      }
      {selectedItem && (
      <dialog id="my_modal" className="modal modal-open">
        <div className="modal-box bg-[#181818] p-8 flex flex-col gap-3 rounded-xl">
          <div className="flex flex-col gap-4">
              <div className="flex justify-center gap-4">
                  <img src={selectedItem.pic} alt="" className="h-[200px] w-auto"/>
              </div>
              <div className="flex justify-between">
                  <h2 className="text-lg font-bold ">{selectedItem.name[ind]}</h2>
                  <h2 className="text-lg font-bold">{selectedItem.price+"₮"}</h2>
              </div>
              <p>{selectedItem.description[ind]}</p>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => setSelectedItem(null)}>
              {close[ind]}
            </button>
          </div>
        </div>
        <button className="bg-[#333] opacity-75 h-[100vh] absolute w-[100vw] z-[-1]" onClick={() => setSelectedItem(null)}>lol</button>
      </dialog>
    )}
    </div>
  </div>
}