import Link from "next/link";
import Image from "next/image";
const HomePageNavbar = () => {
  return (
    <>
      <div className="w-full  h-11 p-1 bg-[#DEE2E7] font-pop font-normal text[13px] leading-[19.5px] relative ">
        <nav className="w-full h-full flex items-center justify-between px-8 absolute left-0 right-0 top-0 bottom-0">
          <div className="w-12 h-12 rounded relative">
            <Link href={"/"}>
              <Image
                src={"/erlogobk.png"}
                fill
                alt="Logo"
                priority={true}
                quality={100}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </Link>
          </div>

          <div className="p-4  text-[#5552ff] flex items-center justify-center gap-24">
            <div className="flex items-center justify-center gap-5">
              <Link href={"/jobs"} className="px-2 py-1 text-[#00000099]">
                Referral Dashboard
              </Link>
              <Link href={"/login"} className="px-2 py-1 text-[#00000099]">
                Services
              </Link>
              <Link href={"/login"} className="px-2 py-1 text-[#00000099]">
                About us
              </Link>
              <Link href={"/login"} className="px-2 py-1 text-[#00000099]">
                FAQ's
              </Link>
            </div>

            <div className="flex items-center justify-center gap-1">
              <Link href={"/login"} className="px-2 py-1 text-[#00000099]">
                Login
              </Link>
              <Link
                href={"/signup"}
                className="px-2 py-1 border border-[#5552ff] rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-full h-6 bg-[#5552ff]"></div>
    </>
  );
};

export default HomePageNavbar;
