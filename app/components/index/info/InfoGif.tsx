import {motion} from 'framer-motion';
import MuxPlayer from '@mux/mux-player-react';

export default function InfoGif() {
  return (
    <motion.div
      className="shadow-baseWhite lg:w-2/3 w-full overflow-hidden rounded-none"
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <MuxPlayer
        streamType="on-demand"
        playbackId="bQizv2WvxwWWVQiQI7AgALtYpejzA1lLDyBqD8tKoRQ"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
        autoPlay
        loop
        muted
      />
    </motion.div>
  );
}
