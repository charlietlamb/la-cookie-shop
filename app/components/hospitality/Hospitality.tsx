import React from 'react';
import {motion} from 'framer-motion';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import HospitalityCard from './HospitalityCard';

export default function Hospitality() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <motion.h1
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="font-silk text-dark mb-8 text-4xl text-center uppercase"
      >
        Hospitality at La Cookie Shop
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
              src="/images/cookie-bowl-tea.jpeg"
              alt="La Cookie Shop Hospitality"
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
            Welcome to Our World of Sweetness
          </h2>
          <p className="mb-4 text-lg font-light">
            At La Cookie Shop, we believe that hospitality is about creating
            moments of joy and connection. From our cozy shop in Lisbon to our
            international presence, we strive to offer a warm, inviting
            atmosphere where everyone can indulge in the simple pleasure of a
            perfect cookie.
          </p>
          <p className="text-lg font-light">
            Our hospitality extends beyond just serving cookies. We create
            experiences, foster community, and spread happiness one sweet bite
            at a time. Explore our various offerings and discover how we can
            make your next event, gathering, or simple afternoon treat truly
            special.
          </p>
        </motion.div>
      </motion.section>

      <Tabs defaultValue="in-store" className="padding-main w-full">
        <TabsList className="md:grid-cols-3 grid w-full grid-cols-1">
          <TabsTrigger value="in-store" className="font-silk uppercase">
            In-Store Experience
          </TabsTrigger>
          <TabsTrigger value="events" className="font-silk uppercase">
            Events & Catering
          </TabsTrigger>
          <TabsTrigger value="corporate" className="font-silk uppercase">
            Corporate Gifting
          </TabsTrigger>
        </TabsList>
        <TabsContent value="in-store">
          <HospitalityCard
            title="A Cookie Haven in Lisbon"
            image="/images/cookie-mag-tea.jpeg"
            content={[
              'Step into our flagship store in the heart of Lisbon and be transported to a world of delightful aromas and warm hospitality.',
              'Enjoy our freshly baked cookies in a cozy atmosphere, paired with artisanal coffee or tea. Our knowledgeable staff is always ready to guide you through our unique flavors and share the stories behind our creations.',
            ]}
          />
        </TabsContent>
        <TabsContent value="events">
          <HospitalityCard
            title="Sweet Moments for Every Occasion"
            image="/images/cookie-hand.jpg"
            content={[
              "Make your event unforgettable with La Cookie Shop's catering services. From weddings to corporate gatherings, we offer customized cookie selections that will delight your guests.",
              'Our event packages include beautifully presented cookie platters, live cookie decorating stations, and even cookie and wine pairing experiences for a unique twist on your celebration.',
            ]}
          />
        </TabsContent>
        <TabsContent value="corporate">
          <HospitalityCard
            title="Elevate Your Corporate Gifting"
            image="/images/cookies-mag.jpeg"
            content={[
              'Show appreciation to your clients, partners, or employees with our premium corporate gifting options. Our beautifully packaged cookie assortments make for impressive and memorable gifts.',
              'We offer customization options, including branded packaging and personalized messages, to make your corporate gifts truly stand out. Let us help you strengthen your business relationships with a touch of sweetness.',
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
