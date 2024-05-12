import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function Credit(){
    return(
        <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <p className="text-xs px-2">© 2024 Roshan Drilling. All rights reserved.</p>
        <FontAwesomeIcon icon={faArrowUp} style={{width:'10px'}} />
      </div>
    </footer>
    )
}