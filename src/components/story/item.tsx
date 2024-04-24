import Image from "next/image";

const Item = () => {
  return (
    <>
      <div className="w-full h-16 relative bg-white">
        <div className="border-gradient"></div>
        <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] bg-white rounded-full">
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
