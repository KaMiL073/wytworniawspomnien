import Image from 'next/image';

export default function HeaderDecor() {
  return (
    <div className="m-auto py-4 sm:w-60 md:w-80 h-16 relative">
      <Image
        src="//static/header-decor.svg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
