import React from 'react';
import {motion} from 'framer-motion';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import CorporateCard from './CorporateCard';

export default function Corporate() {
  return (
    <div className="min-h-screen py-16">
      <motion.h1
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="font-silk text-dark mb-8 text-4xl text-center uppercase"
      >
        Corporate Events with La Cookie Shop
      </motion.h1>

      <motion.section
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.3}}
        className="padding-main md:flex-row flex flex-col items-start gap-12 mb-16"
      >
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.6, delay: 0.6}}
          className="md:w-1/3 w-full"
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/cookie-hand.jpg"
              alt="La Cookie Shop Corporate Events"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.9}}
          className="md:w-2/3 w-full"
        >
          <h2 className="font-silk text-green mb-4 text-3xl uppercase">
            Elevate Your Corporate Experience
          </h2>
          <p className="mb-4 text-lg font-light">
            At La Cookie Shop, we understand that corporate events are more than
            just meetings – they're opportunities to build relationships, foster
            creativity, and celebrate achievements. Our unique cookie
            experiences add a touch of sweetness to your corporate gatherings,
            making them memorable and engaging.
          </p>
          <p className="text-lg font-light">
            From team-building workshops to client appreciation events, we offer
            a range of services tailored to meet your corporate needs. Discover
            how our artisanal cookies can transform your next business event
            into an extraordinary experience.
          </p>
        </motion.div>
      </motion.section>

      <Tabs defaultValue="team-building" className="padding-main w-full">
        <TabsList className="md:grid-cols-3 grid w-full grid-cols-1">
          <TabsTrigger value="team-building" className="font-silk uppercase">
            Team Building
          </TabsTrigger>
          <TabsTrigger value="client-events" className="font-silk uppercase">
            Client Events
          </TabsTrigger>
          <TabsTrigger value="custom-branding" className="font-silk uppercase">
            Custom Branding
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team-building">
          <CorporateCard
            title="Cookie Crafting Workshops"
            image="/images/cookie-mag-tea.jpeg"
            content={[
              `Boost team morale and creativity with our interactive cookie crafting workshops. Led by our expert bakers, these sessions provide a fun and delicious way for your team to bond and collaborate.`,
              `Participants will learn the art of cookie decoration, fostering teamwork and communication skills while creating edible masterpieces. It's a sweet way to strengthen your team's connection and celebrate their achievements.`,
            ]}
          />
        </TabsContent>
        <TabsContent value="client-events">
          <CorporateCard
            title="Impress Your Clients"
            image="/images/cookies-mag.jpeg"
            content={[
              'Make your client meetings and appreciation events unforgettable with our gourmet cookie experiences. From elegant cookie and tea pairings to custom flavor creations, we offer unique ways to engage and delight your valued partners.',
              'Our professional staff can curate a selection of cookies that complement your event theme or client preferences, ensuring a memorable and tasteful impression that sets your business apart.',
            ]}
          />
        </TabsContent>
        <TabsContent value="custom-branding">
          <CorporateCard
            title="Branded Cookie Creations"
            image="/images/cookie-bowl.jpeg"
            content={[
              `Extend your brand's reach with our custom-branded cookies. Whether for trade shows, product launches, or corporate gifts, our skilled artisans can create cookies featuring your logo, company colors, or product designs.`,
              `These unique, edible branded items serve as delightful conversation starters and leave a lasting impression on clients and partners. Let us help you make your mark in the most delicious way possible.`,
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
