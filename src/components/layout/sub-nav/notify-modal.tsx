import UserNoti from "@/components/users/user-noti-follow";

const NotifyModal = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="pt-4 pl-6 pr-3 font-bold text-2xl my-3">Thông báo</h1>
      <p className="text-base pl-6 font-semibold my-2">Tháng này</p>
      <div className="flex-auto overflow-y-auto">
        <UserNoti />
      </div>
    </div>
  );
};

export default NotifyModal;
