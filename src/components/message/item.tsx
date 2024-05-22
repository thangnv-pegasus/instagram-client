import Avatar from "../users/avatar";

const Message = ({
  position = "left",
  message = "message",
  avatarUrl = "",
}: {
  position?: "left" | "right";
  message: string;
  avatarUrl?: string;
}) => {
  return (
    <div
      className={`flex w-full my-2 items-center ${
        position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {position === "left" && <Avatar type="no-border" key={1} size="mini" />}
      <p
        className={`bg-gray-750 py-2 px-4 mx-2 text-sm max-w-96 ${
          position === "left"
            ? "rounded-tr-3xl rounded-br-3xl rounded-tl-lg rounded-bl-lg"
            : "rounded-tl-3xl rounded-bl-3xl rounded-tr-lg order-3"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default Message;
