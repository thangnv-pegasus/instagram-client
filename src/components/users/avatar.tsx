import Image from "next/image";

const Avatar = ({
  type,
  size = "normal",
  borderColor = "gradient",
}: {
  type: "border" | "no-border";
  size?: "normal" | "small" | "big" | "mini";
  borderColor?: "gradient" | "gray";
}) => {
  return (
    <div
      className={`relative bg-white rounded-full ${
        size === "big"
          ? "size-32"
          : size === "normal"
          ? "size-20"
          : size === "small"
          ? "size-12"
          : size === "mini"
          ? "size-8"
          : ""
      } `}
    >
      {type === "border" && borderColor === "gradient" && (
        <div className="border-gradient"></div>
      )}
      {type === "border" && borderColor === "gray" && (
        <div className="border-gray"></div>
      )}
      <div
        className={`absolute flex items-center justify-center rounded-full bg-white `}
      >
        <Image
          src={"https://placehold.it/200x200"}
          alt="image"
          width={120}
          height={120}
          style={{
            width: `${
              size === "big"
                ? "128px"
                : size === "normal"
                ? "56px"
                : size === "small"
                ? "48px"
                : "32px"
            }`,
            height: `${
              size === "big"
                ? "128px"
                : size === "normal"
                ? "56px"
                : size === "small"
                ? "48px"
                : "32px"
            }`,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            borderRadius: "50%",
            padding: type === "border" ? "2px" : "0px",
            margin: size === "small" ? "auto" : "0",
            zIndex: "50",
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
