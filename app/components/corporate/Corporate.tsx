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

      <Tabs defaultValue="corporate-gifting" className="padding-main w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="corporate-gifting"
            className="font-silk md:hidden uppercase"
          >
            Gifting
          </TabsTrigger>
          <TabsTrigger
            value="corporate-gifting"
            className="font-silk md:block hidden uppercase"
          >
            Corporate Gifting
          </TabsTrigger>
          <TabsTrigger
            value="custom-branding"
            className="font-silk md:block hidden uppercase"
          >
            Custom Branding
          </TabsTrigger>
          <TabsTrigger
            value="custom-branding"
            className="font-silk md: uppercase"
          >
            Branding
          </TabsTrigger>
          <TabsTrigger value="events" className="font-silk uppercase">
            Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="corporate-gifting">
          <CorporateCard
            title="Corporate Gifting & Events"
            image="/images/cookies-mag.jpeg"
            content={[
              `Impress your clients, colleagues, and guests with the luxurious taste of La Cookie Shop. Our gourmet cookies make the perfect gift for corporate events, holiday celebrations, and special occasions, offering a sophisticated blend of indulgence and elegance that will leave a lasting impression.`,
              `Each of our cookies is thoughtfully crafted with the finest ingredients, ensuring that every bite reflects the exceptional quality and attention to detail that defines our brand. From classic flavors to unique, signature creations, our cookies are designed to delight and elevate any occasion.`,
            ]}
          />
        </TabsContent>
        <TabsContent value="custom-branding">
          <CorporateCard
            title="Custom Branding & Personalized Gift Boxes"
            image="/images/cookie-bowl.jpeg"
            content={[
              `Looking to make an even bigger impact? We offer custom branding options to ensure your corporate gifts are as unique as your business. Our personalized gift boxes allow you to showcase your brand while treating your recipients to an unforgettable experience. Choose from a range of cookie flavors and premium packaging options, all adorned with your company's logo, colors, and messaging, to create a gift that is as thoughtful as it is delicious.`,
              `Whether you're expressing gratitude to clients, celebrating milestones, or recognizing your team, our custom branding solutions ensure your gifts stand out and make a lasting impression.`,
            ]}
          />
        </TabsContent>
        <TabsContent value="events">
          <CorporateCard
            title="Sweet Additions to Your Events"
            image="/images/cookie-mag-tea.jpeg"
            content={[
              `La Cookie Shop's cookies are a standout addition to any corporate event, meeting, or celebration. From elegant cookie platters to custom-branded packaging for favors or giveaways, we offer a variety of options to enhance your event and leave a memorable impression on attendees.`,
              `Our cookies bring a touch of luxury and sophistication to any gathering, making them the perfect sweet treat for your next corporate function.`,
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
            src="/images/cookies-stack-mag.jpeg"
            alt="Let's Create Something Special Together"
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
            Let's Create Something Special Together
          </h2>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.9}}
            className="mb-4 text-lg font-light"
          >
            At La Cookie Shop, we believe in making every corporate gifting and
            event experience truly exceptional. Whether you need custom-branded
            cookies for a large company-wide event or a few tailored gift boxes
            for VIP clients, we're here to help.
          </motion.p>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 1.2}}
            className="text-lg font-light"
          >
            Contact us today at sales@lacookieshop.com to discuss how we can
            create a custom package, complete with your branding, that perfectly
            fits your vision and needs. Let us help you make your next corporate
            gift or event unforgettable with the elegance, indulgence, and
            personal touch of La Cookie Shop's gourmet cookies.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}
