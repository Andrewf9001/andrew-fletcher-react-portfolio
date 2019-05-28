import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCampground
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faCampground);
};

export default Icons;
