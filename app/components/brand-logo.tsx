import Image from "next/image";

type BrandLogoProps = {
  variant: "header" | "footer";
};

const sizes = {
  header: {
    desktop: "h-[4.05rem] w-auto",
    mobile: "h-[3.375rem] w-[3.375rem]",
    desktopImage: "58px",
    mobileImage: "54px",
  },
  footer: {
    desktop: "h-14 w-auto",
    mobile: "h-12 w-12",
    desktopImage: "50px",
    mobileImage: "48px",
  },
};

export default function BrandLogo({ variant }: BrandLogoProps) {
  return (
    <>
      <Image
        src="/images/logo-principal-web.png"
        alt="La Casa del Cosito"
        width={657}
        height={735}
        sizes={sizes[variant].desktopImage}
        className={`hidden object-contain md:block ${sizes[variant].desktop}`}
      />
      <Image
        src="/images/isotipo-cosito.png"
        alt="La Casa del Cosito"
        width={560}
        height={560}
        sizes={sizes[variant].mobileImage}
        className={`object-contain md:hidden ${sizes[variant].mobile}`}
      />
    </>
  );
}
