import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHandshake, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


export default function Icon(){
    return(
        <div>
             <FontAwesomeIcon icon={faTools} size="1x" className="text-blue-300 text-2x"  />
        </div>
    )
}