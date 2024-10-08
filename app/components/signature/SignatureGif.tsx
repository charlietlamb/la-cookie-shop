import MuxPlayer from '@mux/mux-player-react';
import {cn} from '~/lib/utils';

export default function SignatureGif({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'shadow-basePink w-full overflow-hidden rounded-none',
        className,
      )}
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
    </div>
  );
}
