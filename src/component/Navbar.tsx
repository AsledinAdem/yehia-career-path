import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/profile_image.png";

const Navbar = () => {
  return (
    <div className="bg-slate-900 text-slate-500 w-full  py-3">
      <div className="flex items-center justify-between mx-auto max-w-250">
        <nav className="flex items-center space-x-5 px-5 ">
          <Link
            href="/"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/plan"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Plan
          </Link>
          <Link
            href="/opportunities"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Opportunities
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Dashboard
          </Link>
        </nav>
        <div className="px-5 object-fill  ">
          <Image
            src={profileImage}
            alt="profile image"
            width={40}
            className="rounded-full cursor-pointer border-2 border-slate-200/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
