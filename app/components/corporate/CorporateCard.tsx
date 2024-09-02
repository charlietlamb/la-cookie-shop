import {Card, CardContent, CardHeader, CardTitle} from '~/components/ui/card';

export default function CorporateCard({
  title,
  image,
  content,
}: {
  title: string;
  image: string;
  content: string[];
}) {
  return (
    <Card className="mt-6 bg-white">
      <CardHeader>
        <CardTitle className="font-silk text-green uppercase">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:flex-row flex flex-col gap-6">
          <div className="md:w-1/3">
            <div className="aspect-square flex flex-col items-center justify-center w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
