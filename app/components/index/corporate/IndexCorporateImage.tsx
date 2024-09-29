import MuxPlayer from '@mux/mux-player-react';
import {motion} from 'framer-motion';

export default function IndexCorporateImage() {
  return (
    <motion.div
      className="shadow-baseWhite flex flex-col items-center justify-center w-full overflow-hidden rounded-none lg:max-h-[700px]"
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <MuxPlayer
        streamType="on-demand"
        playbackId="2oCb7VjBRYI00fMu5aoWtSM8FaA4TXNctL01sUz2KH00Pk"
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
