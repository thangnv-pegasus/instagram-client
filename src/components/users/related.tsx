import Image from "next/image";
import Link from "next/link";

interface IUser {
  avatar: string;
  name: string;
  id: Number;
}

const RelatedUser = ({ user }: { user: IUser }) => {
  return (
    <div className="flex justify-between items-center text-sm mb-1 py-1">
      <div className="flex items-center">
        <div className="w-fit rounded-full overflow-hidden border-[1px] border-solid border-gray-300">
          <Image
            src={user.avatar || 'https://placehold.it/100x100'}
            alt={user.name}
            width={52}
            height={52}
            className="block"
          />
        </div>
        <div className="pl-2 pr-4">
            <Link href={'/'} className="block leading-5 font-semibold text-sm">{user.name}</Link>
            <p className="text-xs text-gray-550">Gợi ý cho bạn</p>
        </div>
      </div>
      <Link
        href={"/"}
        className="block text-sky-600 transition-all text-xs ease-linear hover:text-gray-800"
      >
        Theo dõi
      </Link>
    </div>
  );
};


export default RelatedUser