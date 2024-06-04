import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import clsx from 'clsx'
import Link from 'next/link'

import { ContainerScroll } from '@/components/global/container-scroll-animation'
import TextShimmer from '@/components/global/animated-shiny-text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { pricingCards } from '@/constants/landing-page'


import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'

import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { ArrowRightIcon, Check, LinkedinIcon, MailCheckIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import { BorderBeam } from '@/components/global/border.beam'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    
    <main className="flex items-center justify-center flex-col bg-neutral-950  ">
      <Navbar />
      <section className="h-screen w-full bg-white  dark:bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        
        <div className="relative flex h-full  w-full  flex-col items-center justify-center">


      
        
               <TextShimmer className="inline-flex mt-24 mb-10 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="font-light text-sm">✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
                <h1 className="text-3xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With NexusFlow
                </h1> 
                <p className="text-md text-center  mb-5 text-white/50">
                  powerful, easy-to-use development tool for web and mobile. automate your work.
                </p>
       
        
        
    
       
    

      <div className='relative rounded-xl shadow-xl'>

       <Image
        src="/banner.png"
        alt="Hero Image"
        objectFit="contain"
        //layout="responsive"
        width={1000}
        height={720}
        className="hidden w-[1000px] rounded-[inherit] border object-contain shadow-lg dark:block custom-image-size"
      /> 

      

      <Image
        src="/banner.png"
        alt="Hero Image"
      
        //layout="responsive"
        width={1000}
        height={720}
        className="block w-[1000px] rounded-[inherit] border object-contain shadow-lg dark:hidden  custom-image-size"
      />


        <BorderBeam size={200} duration={12} delay={4} />
      </div>


      

      </div>



     
      </section>
      
      {/* <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />  */}



      {/* WIP */}

      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold">Choose what fits you right</h2>
        <p className="text-center text-sm md:text-base lg:text-lg max-w-lg mx-auto text-white/50">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section> 

      <section>

    

        <div className="flex  justify-center gap-4 flex-wrap mt-6 ">

        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] bg-neutral-900 flex flex-col  justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription className="text-white/50">
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-white">{card.price}</span>
              <span className="text-white/50">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-white/50 gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2 text-white/50"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashboard?plan=${card.title}`}
                className="bg-[#f3d299] border-orange hover:bg-neutral-700 border-2 p-2 w-full text-center text-white font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>


      </section>

      <section className=" w-[80vw] items-start justify-start mb-10 text-white">

        <h1 className="text-4xl md:text-6xl text-center  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600  font-bold mt-16">Frequently Asked Questions</h1>
        

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
