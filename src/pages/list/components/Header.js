
import * as Icon from "react-bootstrap-icons";

function Header() {
  return (
      <div className='header'>
          <div className='icon'>
              <Icon.AppIndicator  color='#377dff' size={28}/>
          </div>
          <div className='title'>Front</div>
      </div>
  );
}

export default Header;