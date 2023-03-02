import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHome, faList, faPerson } from '@fortawesome/free-solid-svg-icons';
import './component.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <FontAwesomeIcon icon={faHome} />
        <p>Home</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faPerson} />
        <p>Profile</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faList} />
        <p>Follow List</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faComment} />
        <p>Chat</p>
        </div>
    </div>
  )
}

export default Footer