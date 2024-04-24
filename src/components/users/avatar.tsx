import Image from "next/image";

const Avatar = ({ type }: { type: "border" | "no-border" }) => {
  return (
    <div className={`relative bg-white rounded-full ${type === 'border' ? 'w-11 h-11' : 'w-12 h-12'}`}>
      {type === "border" && <div className="border-gradient"></div>}
      <div
        className={`absolute rounded-full bg-white ${
          type === "border"
            ? "top-[2px] left-[2px] right-[2px] bottom-[2px] "
            : "top-0 left-0 right-0 bottom-0"
        }`}
      >
        <Image
          src={
            "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440"
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
            padding: type === "border" ? "2px" : "0px",
            zIndex: "100",
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
