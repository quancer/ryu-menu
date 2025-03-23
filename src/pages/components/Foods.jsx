import { useState } from "react";

export default function Foods({ language }) {
  let foods = [
    {
      name: ["Үхрийн шарсан хавирга", "Dry Fry Beef Short Ribs"],
      pic: "./beef.png",
      price: 55000,
      category: "2rhool",
      description: [
        "үхрийн хавирга, эвэр чинжүү, брокколи, үрлэн помидор, ногоон ногооны салат, будаа, гар аргаар хийсэн АЗИ соус ",
        "beef short ribs, green chilli pepper, brocolli, cherry tomato, green lattuce salad, rice, hand made asain sous ",
      ],
    },
    {
      name: ["Авакадо салат", "Avacodo Salad"],
      pic: "./avacado.png",
      price: 18000,
      category: "Salad",
      description: [
        "Саладны навч, рокет навч, үрлэн помидор, огурцы, алмонд самар, хатаасан үзэм, авокадо, аньсны соус",
        "green lettuce, rocket lattuce, cherry tomate, cucumber, almond, dry raisin, avocado, lingonberry sous",
      ],
    },
    {
      name: ["Хавай пицца", "Hawai pizza"],
      pic: "./hawai.png",
      price: 45000,
      category: "pizza",
      description: [
        "гурил, соус, моццерелла, бекон, ананас, амталсан масло ",
        "pizza flour, hand made sous, mozzeralla, becon, pineapple, garlic butter",
      ],
    },
    {
      name: ["Яки нику", "Yakiiniku udon"],
      pic: "./Yaki_Niku.png",
      price: 25000,
      category: "2rhool",
      description: [
        "үхрийн мах, сонгино, будаа, өндөг, амталсан цагаан гаа, өндөг",
        "rice, beef, onion egg, sweet ginger, egg",
      ],
    },
    {
      name: ["Удон гоймонтой шөл", "Udon noodle"],
      pic: "./Udon_Noodle.png",
      price: 20000,
      category: "sholtei hool",
      description: [
        "удан ноймон, тахианы гуяны мах, юуцай, лууван, наруто өндөг",
        "udon noodle, chicken, pack choi, carrot, naruto egg",
      ],
    },
    {
      name: ["Яки удон", "Yakii udon"],
      pic: "./Yaki_Udon.png",
      price: 25000,
      category: "sholtei hool",
      description: [
        "удон гоймон, үхрийн мах, юуцай, лууван, наруто өндөг",
        "udon noodle, beff, pack choi, carrot, naruto egg",
      ],
    },
    {
      name: ["Халуун ногоотой, тахиан махтай пицца", "Chicken spicy pizza"],
      pic: "./Chicken-spicy-pizza.png",
      price: 45000,
      category: "pizza",
      description: [
        "гурил, соус, моццерелла, тахианы мах, чинжүү, халуун ногойтой соус, чинжүү, амталсан соус",
        "pizza flour, hand made sous, mozzeralla, chicken, jallapenho, spicy sous, harlic butter",
      ],
    },
    {
      name: ["Пеперони", "Pepperoni pizza"],
      pic: "./pepperoni-pizza.png",
      price: 45000,
      category: "pizza",
      description: [
        "гурил, соус, моццерелла, пепперони, амталсан масло",
        "pizza flour, hand made sous, mozzeralla, pepperoni, garlic butter",
      ],
    },
    {
      name: ["Маханд дурлагсад пицца", "Meat lovers pizza"],
      pic: "./Meat_Lovers.png",
      price: 45000,
      category: "pizza",
      description: [
        "гурил, соус, моццерелла, бекон, үхрийн мах, тахианы мах, хар олив, амталсан масло",
        "flour, hand made sous, mozzeralla, beef chicken, bacon, black oliver, garlic butter",
      ],
    },
    {
      name: ["Самгёбсал 2 хүнийх", "Samgyeopsal 2 person"],
      pic: "./Samgyeopsal.png",
      price: 50000,
      category: "2rhool",
      description: [
        "Гахайн мах, 2 төрлийн мөөг, сонгино, кимчи, будаа",
        "Samgyeopsal, green lattuce, 2 kind off mushroom, onion, kimchi samjan, rice",
      ],
    },
    {
      name: ["Самгёбсал 4 хүнийх", "Samgyeopsal 4 person"],
      pic: "./Samgyeopsal.png",
      price: 70000,
      category: "2rhool",
      description: [
        "Гахайн мах, 2 төрлийн мөөг, сонгино, кимчи, будаа",
        "Samgyeopsal, green lattuce, 2 kind off mushroom, onion, kimchi samjan, rice",
      ],
    },
    {
      name: ["Начо", "Nacho"],
      pic: "./Nacho.png",
      price: 18000,
      category: "Salad",
      description: [
        "тортилла гурил, болоньез соус, салса, 2 төрлийн маёо соус",
        "tortilla flour, blognese sous, salsa, mayo sous chilli mayo sous",
      ],
    },

    {
      name: ["Үхрийн хэлэн салат", "Beef Tongue salad"],
      pic: "./Beef_tongue_salad.png",
      price: 20000,
      category: "Salad",
      description: [
        "Салатны навч, рокет навч, үрлэн помидор, огурцы, үхрийн хэл, гүнждийн үртэй соус, бийф соус,",
        "green lettuce, rocket lettuce, cherry tomato, cucumber, beef tongue, beef sous, seasameseed sous hand made",
      ],
    },
    {
      name: ["Кацу карри", "Katsu curry"],
      pic: "./Katsu_curry.png",
      price: 25000,
      category: "2r hool",
      description: [
        "амталсан тахианы гуя, рокет навч, лемон, будаа, мисо шөл",
        "chiken, rocket lettuce, lemon, mayio sous, rice, miso soup",
      ],
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  // const [language, setLanguage] = useState(true);
  // let {language , changeLanguage} = useLanguage;
  let lan, ind;
  language ? (lan = "mn") : (lan = "eng");
  language ? (ind = 0) : (ind = 1);
  let close = ["Хаах", "Close"];
  let more = ["Дэлгэрэнгүй", "More"];
  // function changeLan(){
  //   setLanguage(!language);
  //   // changeLanguage();
  // }
  return (
    <div>
      {/* <div><button onClick={changeLan}>{lan}</button></div> */}
      <div className="grid grid-cols-2 p-4 flex-wrap gap-3">
        {foods.map((props, index) => {
          return (
            <div className="bg-[#181818] p-4 flex flex-col gap-3 rounded-xl">
              <div className="flex justify-center">
                <img src={props.pic} alt="" className="h-[100px] w-auto" />
              </div>
              <h1
                className="text-xl font-bold h-[55px] overflow-hidden
"
              >
                {props.name[ind]}
              </h1>
              <p>{props.description[ind].slice(0, 30) + "..."}</p>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={() => setSelectedItem(props)}>
                {more[ind]}
              </button>
            </div>
          );
        })}
        {selectedItem && (
          <dialog id="my_modal" className="modal modal-open">
            <div className="modal-box bg-[#181818] p-8 flex flex-col gap-3 rounded-xl">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center gap-4">
                  <img
                    src={selectedItem.pic}
                    alt=""
                    className="h-[200px] w-auto"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg font-bold ">
                    {selectedItem.name[ind]}
                  </h2>
                  <h2 className="text-lg font-bold">
                    {selectedItem.price + "₮"}
                  </h2>
                </div>
                <p>{selectedItem.description[ind]}</p>
              </div>
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedItem(null)}>
                  {close[ind]}
                </button>
              </div>
            </div>
            <button
              className="bg-[#333] opacity-75 h-[100vh] absolute w-[100vw] z-[-1]"
              onClick={() => setSelectedItem(null)}
            >
              lol
            </button>
          </dialog>
        )}
      </div>
    </div>
  );
}
