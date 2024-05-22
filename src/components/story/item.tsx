import Image from "next/image";

const Item = () => {
  return (
    <>
      <div className="w-full h-16 relative bg-white cursor-pointer">
        <div className="border-gradient"></div>
        <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] bg-white rounded-full">
          <Image
            src={
              "https://placehold.it/200x200"
            }
            alt="image"
            fill
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              borderRadius: "50%",
              padding: "2px",
              zIndex: "100",
            }}
          />
        </div>
      </div>
      <p className="text-xs text-center mt-1">Chin.Db</p>
    </>
  );
};

export default Item;
