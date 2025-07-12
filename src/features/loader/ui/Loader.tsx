import Image from 'next/image';
export const Loader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>
        <Image src="/loader.svg" alt="loader" width={50} height={50} />
      </p>
    </div>
  );
};
