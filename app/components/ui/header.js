import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center p-4 bg-white">
      <Link href={"/"} className="w-30">
        <Image
          src={"/emotecare.png"}
          alt="Emote Care"
          width={300}
          height={10}
        />
      </Link>
    </div>
  );
}

export default Header;
