import Image from 'next/image';

export default function HeaderDecor() {
  return (
    <div className="m-auto my-4 sm:w-60 sm:h-16 md:h-8 relative">
      <Image
        src="//static/header-decor.svg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
