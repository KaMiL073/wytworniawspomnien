import Image from 'next/image';
import Link from 'next/link';

export default function OffertCarts({ offerts }) {
  const items = offerts.map(({ name, lead, src }) => (
    <div className="my-4 md:my-0">
      <Image
        src={src}
        alt="Picture of the author"
        width={653}
        height={368}
      />
      <div className="px-16">
        <h3>{name}</h3>
        <p>{lead}</p>
      </div>
    </div>
  ));

  return (
    <div className="grid md:grid-cols-2 gap-2">
      {items}
    </div>
  );
}
