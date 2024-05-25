import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import TextShimmer from '@/components/global/animated-shiny-text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'

import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { ArrowRightIcon, CheckIcon, LinkedinIcon, MailCheckIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import TopBanner from '@/components/global/banner'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    
    <main className="flex items-center justify-center flex-col bg-neutral-950  ">
      {/* <TopBanner /> */}
      <Navbar />
      <section className="h-screen w-full bg-white  dark:bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex  items-center flex-col ">
      <ContainerScroll
        titleComponent={
          <>
               <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="font-light text-2xl">✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With NexusFlow
                </h1>
          </>
        }
      >
        <Image
          src={`/banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      





        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      {/* WIP */}

      {/* <LampComponent /> */}

      <section className="mt-[-50px]  bg:bg-neutral-950 dark:bg-neutral-950 ">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center text-blue-500  flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var border border-white rounded-xl">
            <CardBody className="bg:bg-neutral-950  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-blue-500"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white  dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var border border-white rounded-xl">
            <CardBody className="bg-bg-neutral-950 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-blue-500"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white  dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var border border-white rounded-xl">
            <CardBody className="bg-bg-neutral-950 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-blue-500"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white  dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
      <section className=" w-[80vw] items-start justify-start mb-10 text-white">

        <h1 className="text-4xl md:text-6xl text-center  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold mt-16">Frequently Asked Questions</h1>
        

      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why should i use NexusFlow?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do you secure my data?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do i get started?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How does NexusFlow work?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>

      {/* get started */}
      <section className="mt-20 mb-20 bg-blue-500 w-[60vw] p-10 rounded-xl">
  <h1 className="text-4xl font-bold text-center mb-4">Ready to Dive In?</h1>
  <p className="text-xl text-center mb-8">Start your journey with us and enhance your workflow!</p>
  <div className="flex justify-center">
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started Now
    </button>
  </div>
</section>



     

      {/* footer */}


      <section className="w-full p-10 border-t border-black[0.5] text-justify bg-neutral-950 text-white">
  <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="flex flex-col">
      <h2 className="text-md text-white/50 font-extrabold mb-4">lINKS</h2>
      <a href="/roadmap" className="hover:text-gray-300 transition-colors mb-2">Changelog</a>
      <a href="/features" className="hover:text-gray-300 transition-colors mb-2">Features</a>
      <a href="/pricing" className="hover:text-gray-300 transition-colors mb-2">Pricing</a>
    </div>
    <div className="flex flex-col">
      <h2 className="text-md text-white/50 font-extrabold mb-4">SUPPORT</h2>
      <a href="/security" className="hover:text-gray-300 transition-colors mb-2">Security</a>
      <a href="/get-a-demo" className="hover:text-gray-300 transition-colors mb-2">Get a demo</a>
      <a href="/contact-us" className="hover:text-gray-300 transition-colors">Contact Us</a>
    </div>
    <div className="flex flex-col">
      <h2 className="text-md text-white/50 font-extrabold mb-4">LEGAL</h2>
      <a href="/privacy-policy" className="hover:text-gray-300 transition-colors mb-2">Privacy Policy</a>
      <a href="/terms-of-service" className="hover:text-gray-300 transition-colors mb-2">Terms of Use</a>
      <a href="/disclosure" className="hover:text-gray-300 transition-colors">Disclosure</a>
    </div>
  </div>
  <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between">
  <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold ">Nexus</p>
        <Image
          src="/logo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold ">Flow</p>
      </aside>
    <div className="flex space-x-4">
      <a href="/contact" className="hover:text-gray-300 transition-colors">
        <MailCheckIcon />
      </a>
      <a href="/linkedin" className="hover:text-gray-300 transition-colors">
        <LinkedinIcon />
      </a>
      <a href="/twitter" className="hover:text-gray-300 transition-colors">
        <Twitter />
      </a>
    </div>
    <p className="text-sm mt-4 md:mt-0">&copy; 2024 NexusFlow. All rights reserved.</p>
  </div>
</section>

   
     
    </main>
  )
}
