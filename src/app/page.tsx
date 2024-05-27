import Hero from 'components/hero'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CUBE',
}

export default function Home() {

  return (
    <>
          <Hero 
              title='CUBE'
              subtitle='アウトプットしていくサイト'
              imageOn
          />
    </>
  );
}
