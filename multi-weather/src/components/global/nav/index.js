import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


export default class Nav extends Component { 
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
                   <input type="text" placeholder="Chicago, IL" />
                   <FontAwesomeIcon className="fa-search" icon={faSearch} />
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