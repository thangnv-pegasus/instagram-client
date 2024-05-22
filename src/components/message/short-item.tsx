import Avatar from "../users/avatar";

const MessageItem = ({position = 'left'} : {position?: 'left' | 'right'}) => {
  return (
    <div className="py-2 px-5 transition-all ease-linear hover:bg-gray-150 cursor-pointer">
      <div className="flex items-center">
        <Avatar key={1} type="no-border" size="small" />
        <div className="text-sm pl-2">
          <p>Chii Nguyễn</p>
          <div className="flex items-center text-xs text-gray-550">
            <p>Nhanhhhh...</p>
            <p className="w-1 h-1 bg-gray-850 rounded-full mx-1"></p>
            <p>10 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
