import { set } from "redux-loadings";

set('featureListOpen', false)

export const handleOpen = () => set('featureListOpen', true);

export const handleClose = () => set('featureListOpen', false);
