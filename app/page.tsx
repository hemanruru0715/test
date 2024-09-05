import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'My Stats',
    },
    {
      action: 'link', 
      label: 'Share', 
      target: 'https://warpcast.com/~/compose?text=Check your Moxie stats. Frame by @hemanruru&embeds[]=https://jimin-cho.vercel.app/' 
    },
    // {
    //   action: 'tx',
    //   label: 'Send Base Sepolia',
    //   target: `${NEXT_PUBLIC_URL}/api/tx`,
    //   postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    // },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-1.png`,
    //aspectRatio: '1:1',
  },
  // input: {
  //   text: 'Tell me a story',
  // },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  metadataBase: new URL('https://hemanruru.vercel.app'),  // 기본 URL 설정
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
     images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
