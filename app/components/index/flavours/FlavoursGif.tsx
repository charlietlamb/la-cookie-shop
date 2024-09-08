import MuxPlayer from '@mux/mux-player-react';
import {cn} from '~/lib/utils';

export default function FlavoursGif({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'shadow-basePink w-full overflow-hidden rounded-none',
        className,
      )}
    >
      <MuxPlayer
        streamType="on-demand"
        playbackId="CQ6abCeosXk7XbF4hN7hl1cvTgBkS00ofqHmcIWcJ2Gc"
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
