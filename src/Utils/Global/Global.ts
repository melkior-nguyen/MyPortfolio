import { AppDialogType } from "../../components/AppDialog/AppDialog";

export const Global = {
  appDialog: {
    modal: null as AppDialogType | null,
    set: (inputRef: AppDialogType) => {
      Global.appDialog.modal = inputRef;
    },
    get: () => Global.appDialog.modal,
  },
};
