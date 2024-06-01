import {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

export type AppDialogType = {
  closeDialog: () => void;
  openDialog: (data: AppDialogValueType) => void;
};

type AppDialogValueType = {
  title: string;
  description: string;
  content: ReactNode;
};

const AppDialog = forwardRef((props, modalRef) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalvalue, setModalValue] = useState<
    AppDialogValueType | undefined
  >();

  const openDialog = useCallback((modalData: AppDialogValueType) => {
    setModalValue(modalData);
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  useImperativeHandle(
    modalRef,
    () => ({
      closeDialog,
      openDialog,
    }),
    [closeDialog, openDialog],
  );

  return (
    <>
      {isOpen && (
        <motion.div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="rounded-lg bg-white p-3 w-full sm:max-w-[420px] gap-6 flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="uppercase font-bold">{modalvalue?.title}</span>
                <span className="text-xs text-gray-500">{modalvalue?.description}</span>
              </div>
              <div
                className="h-6 w-6 cursor-pointer"
                onClick={closeDialog}
              >
                <IoIosCloseCircleOutline className="h-full w-full" />
              </div>
            </div>
            <div>{modalvalue?.content}</div>
          </div>
        </motion.div>
      )}
    </>
  );
});

export default AppDialog;
