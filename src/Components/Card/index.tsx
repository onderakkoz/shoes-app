import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import calcDiscount from "../../Utils/calcDiscount";
import Badge from "./badge"

const Card = ({ item }: { item: Shoe }) => {
    return (
        <div className="flex flex-col justify-between">
            <div>
                <div className="bg-white rounded-[25px] lg:rounded-[28px] p-[10px] relative">
                    <Badge discount={item.discount} />
                    <img className="rounded-[24px] h-[350px]" src={item.picture[0]} />
                </div>

                <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
                    {item.name}
                </h2>
            </div>

            <Link
                to={`/detail/${item.id}`}
                className="bg-black text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-gray-600 text-center"
            >
                Ürünü Görüntüle -{" "}
                <span className={item.discount ? "text-yellow-500" : "text-white"}>
                    ${calcDiscount(item.price, item.discount)}
                </span>
                {item.discount && (
                    <span className="max-xl:hidden line-through text-yellow ps-2">
                        (${item.price})
                    </span>
                )}
            </Link>
        </div>
    );
};

export default Card;