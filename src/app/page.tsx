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

import TextShimmer from '@/components/global/animated-shiny-text'
import Button from '@/components/cartoon/Button'


import { pricingCards } from '@/constants/landing-page'
import Faq from '@/components/global/faq'

import Navbar from '@/components/global/navbar'
import { ArrowRightIcon, Check, LinkedinIcon, MailCheckIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import { BorderBeam } from '@/components/global/border.beam'
import Marquee from 'react-fast-marquee'
import Community from '@/components/global/community'

export default function Home() {



  return (

    <main className="flex items-center justify-center flex-col bg-white  ">
      <Navbar

      />
      <section className="h-screen w-full bg-white  dark:bg-neutral-950   !overflow-visible relative flex flex-col items-center  antialiased bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:42px_42px]">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 "></div>

        <div className="relative flex h-full  w-full  flex-col items-center justify-center">




          <TextShimmer className="inline-flex mt-24 mb-10 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="font-light text-sm text-black dark:text-white">✨ Introducing NexusFlow</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </TextShimmer>
          <h1 className="text-3xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-t from-zinc-900 to-main  font-sans font-bold">
            Automate Your Work With NexusFlow
          </h1>
          <p className="text-md text-center  mb-5 text-gray-400 ">
            powerful, easy-to-use development tool for web and mobile. automate your work.
          </p>







          <div className='relative rounded-xl shadow-xl'>

            <Image
              src="/banner.png"
              alt="Hero Image"
              objectFit="contain"
              width={1000}
              height={720}
              className="hidden w-[1000px] rounded-[inherit] border shadow-lg dark:block custom-image-size"
            />



            <Image
              src="/banner.png"
              alt="Hero Image"
              width={1000}
              height={720}
              className="block w-[1000px] rounded-[inherit] border  shadow-lg dark:hidden  custom-image-size"
            />


            <BorderBeam size={200} duration={12} delay={4} />


           
          </div>

          




        </div>
        



      </section>

      <div className="">
        <Marquee
          className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5"
          direction="right"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[35px] sm:w-[45px]"
                    src={'/neobrutalism-icons/star3.svg'}
                    alt="star"
                  />
                </div>
              )
            })}
        </Marquee>
      </div>







      {/* <section className="flex justify-center items-center flex-col gap-4 mt-10 bg-black">



        <div className="flex  justify-center gap-4 flex-wrap mt-6  bg-black">

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


      </section> */}

      <Community />



      <Faq />


      {/* get started */}









      {/* footer */}


      <section className="w-full p-10 border-t border-black[0.5] text-justify bg-white dark:bg-neutral-950  text-white dark:text-black">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col text-black dark:text-white">
            <h2 className="text-md text-gray-500 font-extrabold mb-4">lINKS</h2>
            <a href="/roadmap" className="hover:text-gray-300 transition-colors mb-2">Changelog</a>
            <a href="/features" className="hover:text-gray-300 transition-colors mb-2">Features</a>
            <a href="/pricing" className="hover:text-gray-300 transition-colors mb-2">Pricing</a>
          </div>
          <div className="flex flex-col  text-black dark:text-white">
            <h2 className="text-md text-gray-500 font-extrabold mb-4">SUPPORT</h2>
            <a href="/security" className="hover:text-gray-300 transition-colors mb-2">Security</a>
            <a href="/get-a-demo" className="hover:text-gray-300 transition-colors mb-2">Get a demo</a>
            <a href="/contact-us" className="hover:text-gray-300 transition-colors">Contact Us</a>
          </div>
          <div className="flex flex-col text-black dark:text-white">
            <h2 className="text-md text-gray-500 font-extrabold mb-4">LEGAL</h2>
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors mb-2">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-300 transition-colors mb-2">Terms of Use</a>
            <a href="/disclosure" className="hover:text-gray-300 transition-colors">Disclosure</a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between">
          <aside className="flex items-center gap-[2px]  text-black dark:text-white">
            <p className="text-2xl font-bold ">Nexus</p>
            <Image
              src="/logo.png"
              width={15}
              height={15}
              alt="fuzzie logo"
              className="shadow-sm bg-neutral-500"
            />
            <p className="text-2xl font-bold ">Flow</p>
          </aside>
          <div className="flex space-x-4  text-black dark:text-white">
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
          <p className="text-sm mt-4 md:mt-0  text-black dark:text-white">&copy; 2024 NexusFlow. All rights reserved.</p>
        </div>
      </section>



    </main>
  )
}
