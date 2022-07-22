import * as Icon from "react-bootstrap-icons";
import Avatar from "../icons/avater.png";

function IconGroups (){
    return  <ul className="groups">
        <li><Icon.Bell size={16}/></li>
        <li><Icon.AppIndicator size={16}/></li>
        <li><Icon.XDiamond size={16}/></li>
        <li><img className='avatar' src={Avatar}/></li>

    </ul>
}

export default IconGroups;

