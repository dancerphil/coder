import { getResults, set } from "redux-loadings";
import { handleFileNew } from "./files";

set('open', false)

set('name', '')

export const handleOpen = () => set('open', true);

export const handleClose = () => set('open', false);

export const handleSubmit = () => {
  const name = getResults('name')
  handleFileNew(name);
  handleClose();
};

export const handleChange = (e) => {
  set('name', e.target.value );
}

export const handleKeyDown = (e) => {
  if (e.keyCode === 13) { // Enter
    handleSubmit();
  }
}
