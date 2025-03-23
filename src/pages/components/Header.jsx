import Link from "next/link";

export default function Header({ change, lan, page }) {
  let flag, food, drink, foodCss, drinkCss;
  if (page == "food") {
    foodCss = "text-white border-b-1 border-[white] px-2";
    drink = "text-white px-2";
  } else {
    drinkCss = "text-white border-b-1 border-[white] px-2";
    foodCss = "text-white px-2";
  }
  if (lan) {
    flag = "./mgl.png";
    food = "Хоол";
    drink = "Уух зүйлс";
  } else {
    flag = "./eng.png";
    food = "Food";
    drink = "Drinks";
  }

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/ryulogo.png" alt="" className="w-[20px]" />
          <div>
            <h1 className="font-bold text-xl">RYU</h1>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex justify-center gap-5">
            <Link className={foodCss} href={"/"}>
              {food}
            </Link>
            <Link className={drinkCss} href={"/drinks"}>
              {drink}
            </Link>
          </div>
          {/* <p className="text-l ">Food&Drink house</p> */}
          <div>
            <button onClick={() => change(!lan)}>
              <img src={flag} alt="" className="w-[40px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
