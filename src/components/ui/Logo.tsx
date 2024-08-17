import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/assets/Logo.png"}
          width={245.41}
          height={49.91}
          alt="Logo"
        />
      </Link>
    </>
  );
};

export default Logo;
