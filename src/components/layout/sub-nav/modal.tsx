import { IModal } from "@/types/modal";
import SearchModal from "./search-modal";
import MessageModal from "./message-modal";
import NotifyModal from "./notify-modal";
import { usePathname } from "next/navigation";

const Modal = ({ openModal }: { openModal: IModal }) => {
  return (
    <div className="absolute w-96 top-0 -right-[385px] shadow-modal bottom-0 z-50 bg-white border-r-[1px] border-solid border-gray-300 animate-slide-right transition-all rounded-r-2xl rounded-br-2xl">
      {openModal.searchModal === true && <SearchModal />}
      {/* {openModal.messageModal === true && <MessageModal />} */}
      {openModal.notifyModal === true && <NotifyModal />}
    </div>
  );
};

export default Modal;
