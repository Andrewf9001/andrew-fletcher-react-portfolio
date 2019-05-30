import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCampground,
  faEnvelopeOpenText,
  faMobile,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCampground,
    faEnvelopeOpenText,
    faMobile,
    faMapMarkedAlt
  );
};

export default Icons;
