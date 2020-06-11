import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


export default class Nav extends Component {
    constructor(props) {
        super(props)
            
    }

componentDidMount = ()  => {
        // on press enter for search bar
        document.getElementById('search').addEventListener("keyup", (event) => {
            event.preventDefault();
            if (event.keyCode === 13) {
                this.props.changeCity();
            }
          })
}
render() {
    return (
       <nav>
           <ul className="nav-ul">
               <li className="nav-li">
                   <a className="nav-logo" href="/">
                       mw
                   </a>
               </li>
               <li className="nav-li">
                   <input id="search" type="text" placeholder="Chicago" />
                   <FontAwesomeIcon className="fa-search" icon={faSearch} onClick={() => this.props.changeCity()}/>
               </li>
               <li className="nav-li login-li">
                   <FontAwesomeIcon className="fa-user" icon={faUser} />
                   <a>Login</a>
               </li>
               <li className="mobile-login-li mobile">
                   <FontAwesomeIcon className="fa-user" icon={faUser} />
               </li>
           </ul>
       </nav>
    )
}
}