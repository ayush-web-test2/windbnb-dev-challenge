import "./BoxItem.css"
import { AiFillStar } from "react-icons/ai"

export default function BoxItem({ item }) {
    return (
        <div className="box_item">

            <img src={item?.photo} />

            <div className="box_item_info">
                <h2>{item?.superHost && <span>SUPER HOST</span>}  {item?.type} . {item?.beds} beds</h2>
                <p><AiFillStar />  {item?.rating}</p>
            </div>

            <p>{item?.title}</p>

        </div>
    )
}
