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
            At La Cookie Shop, we believe that the key to an extraordinary guest
            experience is in the details. Our luxurious cookies offer a simple
            yet impactful way to add an element of indulgence to your
            hospitality offering, creating unforgettable moments for your
            guests. Whether you're looking to enhance their stay with freshly
            baked cookies or add a touch of sweetness to minibars, we provide a
            turnkey solution tailored to your needs.
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
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="in-store"
            className="font-silk md:hidden uppercase"
          >
            Fresh
          </TabsTrigger>
          <TabsTrigger
            value="in-store"
            className="font-silk md:block hidden uppercase"
          >
            Freshly Baked on Premises
          </TabsTrigger>
          <TabsTrigger value="events" className="font-silk md:hidden uppercase">
            Events
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="font-silk md:block hidden uppercase"
          >
            Events & Catering
          </TabsTrigger>
          <TabsTrigger
            value="corporate"
            className="font-silk md:block hidden uppercase"
          >
            Corporate Gifting
          </TabsTrigger>
          <TabsTrigger
            value="corporate"
            className="font-silk md:hidden uppercase"
          >
            Corporate
          </TabsTrigger>
        </TabsList>
        <TabsContent value="in-store">
          <HospitalityCard
            title="Freshly Baked on Premises"
            image="/images/cookie-mag-tea.jpeg"
            content={[
              `Imagine welcoming your guests with the irresistible aroma of freshly baked cookies, straight from your kitchen. La Cookie Shop offers premium frozen cookie dough, crafted with the finest ingredients and shipped directly to your establishment. This allows you to bake our exquisite cookies on-site, ensuring each guest enjoys the warmth and freshness of a perfectly baked treat. It's a small gesture that leaves a lasting impression from the moment they arrive.`,
              `For a convenient yet indulgent option, our beautifully packaged, shelf-stable cookies are the perfect addition to your minibars. Each cookie is a gourmet creation, infused with flavors inspired by luxury and sophistication. Your guests can savor these artisanal treats at their leisure, adding a touch of elegance to their stay, whether they're enjoying them in their rooms or on the go.`,
              `There's no better way to make guests feel instantly welcome than with a complimentary cookie from La Cookie Shop. Each cookie is a testament to our commitment to quality, designed to offer a moment of indulgence that enhances your hospitality service. Whether provided at check-in or left as a thoughtful in-room gesture, our cookies elevate the guest experience, ensuring they feel pampered from the very start.`,
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

      <motion.section
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6}}
        className="padding-main md:flex-row flex flex-col items-center gap-12 mt-16"
      >
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/cookie-dark-tea.jpeg"
            alt="Partner with La Cookie Shop"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.6}}
          className="md:w-1/2 w-full"
        >
          <h2 className="font-silk text-green mb-4 text-3xl uppercase">
            Partner with La Cookie Shop
          </h2>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.9}}
            className="mb-4 text-lg font-light"
          >
            Show appreciation to your clients, partners, or employees with our
            premium corporate gifting options. Our beautifully packaged cookie
            assortments make for impressive and memorable gifts.
          </motion.p>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 1.2}}
            className="mb-4 text-lg font-light"
          >
            We offer customization options, including branded packaging and
            personalized messages, to make your corporate gifts truly stand out.
            Let us help you strengthen your business relationships with a touch
            of sweetness.
          </motion.p>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 1.5}}
            className="text-lg font-light"
          >
            Enhance your hospitality offering with the luxurious touch of La
            Cookie Shop's gourmet cookies. From boutique hotels to upscale
            resorts, our cookies fit seamlessly into any setting, helping to
            create lasting memories and positive reviews. Contact us at
            sales@lacookieshop.com to discover how we can help you deliver
            unforgettable guest experiences.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}
