import {motion, AnimatePresence} from 'framer-motion';
import {Card, CardContent, CardHeader, CardTitle} from '~/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {useState} from 'react';

export default function StoryTabs() {
  const [activeTab, setActiveTab] = useState('ingredients');
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 1.2}}
      className="bg-green md:py-16 w-full py-8 text-white"
    >
      <div className="padding-main">
        <h3 className="font-silk md:mb-6 md:text-3xl mb-4 text-2xl text-center">
          Our Process
        </h3>
        <Tabs
          defaultValue="ingredients"
          className="flex flex-col items-center w-full gap-2"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 gap-2 bg-green-600">
            <TabsTrigger
              value="ingredients"
              className="font-silk text-white data-[state=active]:bg-white data-[state=active]:text-dark text-base md:text-lg"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger
              value="crafting"
              className="font-silk text-white data-[state=active]:bg-white data-[state=active]:text-dark text-base md:text-lg"
            >
              Crafting
            </TabsTrigger>
            <TabsTrigger
              value="quality"
              className="hidden md:block font-silk text-white data-[state=active]:bg-white data-[state=active]:text-dark text-base md:text-lg"
            >
              Quality Control
            </TabsTrigger>
            <TabsTrigger
              value="quality"
              className="block md:hidden font-silk text-white data-[state=active]:bg-white data-[state=active]:text-dark text-base md:text-lg"
            >
              Quality
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.3}}
              className="w-full"
            >
              <TabsContent value="ingredients">
                <Card className="text-sand bg-white">
                  <CardHeader>
                    <CardTitle className="font-silk text-dark md:text-2xl text-xl">
                      Premium Ingredients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="md:flex-row md:gap-6 flex flex-col items-center gap-4">
                      <div className="aspect-square md:w-1/3 flex items-center justify-center w-full overflow-hidden">
                        <img
                          src="/images/cookie-bowl-tea.jpeg"
                          alt="Our Ingredients"
                          className="w-full rounded-none shadow-md"
                        />
                      </div>
                      <div className="text-dark">
                        <p className="md:text-lg mb-4 text-base font-light">
                          We believe that exceptional cookies start with
                          exceptional ingredients. Our team scours Europe for
                          the finest ingredients - from rich, French butter to
                          single-origin chocolates and locally sourced nuts and
                          fruits.
                        </p>
                        <p className="md:text-lg text-base font-light">
                          We work directly with farmers and suppliers who share
                          our passion for quality, ensuring that every
                          ingredient that goes into our cookies meets our
                          exacting standards. This commitment to sourcing the
                          best ingredients is what sets our cookies apart and
                          gives them their unique, irresistible flavor.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="crafting">
                <Card className="text-sand bg-white">
                  <CardHeader>
                    <CardTitle className="font-silk text-dark md:text-2xl text-xl">
                      Artisanal Craftsmanship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="md:flex-row md:gap-6 flex flex-col items-center gap-4">
                      <div className="aspect-square md:w-1/3 flex items-center justify-center w-full overflow-hidden">
                        <img
                          src="/images/cookie-mag-tea.jpeg"
                          alt="Our Crafting Process"
                          className="w-full rounded-none shadow-md"
                        />
                      </div>
                      <div className="text-dark">
                        <p className="md:text-lg mb-4 text-base font-light">
                          At La Cookie Shop, we believe that baking is an art
                          form. Our skilled bakers combine time-honored
                          techniques with innovative approaches to create
                          cookies that are not just delicious, but also visually
                          stunning.
                        </p>
                        <p className="md:text-lg text-base font-light">
                          Each cookie is carefully crafted by hand, ensuring
                          that every batch meets our high standards. From
                          precisely measuring ingredients to perfecting the bake
                          time, our artisans pay attention to every detail. This
                          meticulous process is what transforms simple
                          ingredients into extraordinary cookies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="quality">
                <Card className="text-sand bg-white">
                  <CardHeader>
                    <CardTitle className="font-silk text-dark md:text-2xl text-xl">
                      Rigorous Quality Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="md:flex-row md:gap-6 flex flex-col items-center gap-4">
                      <div className="aspect-square md:w-1/3 flex items-center justify-center w-full overflow-hidden">
                        <img
                          src="/images/cookies-mag.jpeg"
                          alt="Quality Control"
                          className="w-full rounded-none shadow-md"
                        />
                      </div>
                      <div className="text-dark">
                        <p className="md:text-lg mb-4 text-base font-light">
                          At La Cookie Shop, quality is not just a goal; it's
                          our obsession. Every batch of cookies undergoes
                          rigorous quality control checks to ensure they meet
                          our high standards.
                        </p>
                        <p className="md:text-lg text-base font-light">
                          Our team of expert tasters evaluates each cookie for
                          appearance, texture, and flavor. Only cookies that
                          pass our strict criteria make it to our shelves. This
                          unwavering commitment to quality is why our customers
                          trust us to deliver perfection in every bite.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
}
