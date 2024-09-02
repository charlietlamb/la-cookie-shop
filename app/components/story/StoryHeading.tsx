import {Separator} from '../ui/separator';

export default function StoryHeading() {
  return (
    <div className="padding-main w-full">
      <h2 className="font-silk text-dark text-5xl text-center uppercase">
        Our Story
      </h2>
      <Separator className="bg-dark w-1/3 mx-auto mt-4" />
    </div>
  );
}
