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
import {ModeToggle} from '@/components/global/mode-toggle'

import { pricingCards } from '@/constants/landing-page'
import Faq from '@/components/global/faq'

import Navbar from '@/components/global/navbar'
import { ArrowRightIcon} from 'lucide-react'
import Image from 'next/image'
import { BorderBeam } from '@/components/global/border.beam'
import Community from '@/components/global/community'
import Footer from '@/components/global/footer'
import Button from '@/components/cartoon/Button'
import {WobbleCardDemo} from '@/components/global/display-card'
import { StickyScrollRevealDemo } from '@/components/global/sticky-scroll'
export default function Home() {



  return (

    <main className="flex items-center justify-center flex-col bg-white  dark:bg-neutral-950 ">
      <Navbar

      />
      <section className="h-screen w-full bg-white dark:bg-neutral-950 !overflow-visible relative flex flex-col items-center antialiased bg-white dark:bg-neutral">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-32"></div>

        <div className="relative flex h-full  w-full  mt-36 flex-col items-center justify-center">




         
          <h1 className="text-4xl md:text-7xl xl:w-[60%]  text-center bg-clip-text text-transparent bg-gradient-to-t from-zinc-900 to-main  font-sans font-bold w-[90vw]">
          Get Your Blog Online with NexusFlow in Minutes

          </h1>
          <p className="text-md text-center  mb-5 text-gray-400 w-[50%] sm:w-[50%] lg:w-[50%] md:w-[57%] xl:w-[40%] ">
          A powerful, easy-to-use CMS built with Next.js and Supabase. Automate your work with this cutting-edge development tool for web
          </p>


          <form className='w-full max-w-lg mx-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-10'>
            <input type="email" placeholder="Enter your email" className='flex-1 p-2 rounded-md border-2 border-black dark:border-white' />
            <Button >Join the Waitlist</Button>
          </form>







          <div className='relative rounded-xl mt-10 shadow-xl '>



            <Image
              src="/banner.png"
              alt="Hero Image"
              width={1000}
              height={720}
              className="hidden w-[1000px] rounded-[inherit] border shadow-lg dark:block custom-image-size "
            />



            <Image
              src="/banner.png"
              alt="Hero Image"
              width={1000}
              height={720}
              className="block w-[1000px] rounded-[inherit] border  shadow-lg dark:hidden  custom-image-size"
            />


            <BorderBeam size={500} duration={8} delay={2} />


           
          </div>

          




        </div>
        



      </section>
{/* 
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
      </div> */}







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


{/* <StickyScrollRevealDemo /> */}

     <div className='flex flex-col items-center justify-center mt-32'>

     {/* <WobbleCardDemo /> */}

     </div>

  

      <Community />



      <Faq />


      {/* get started */}









      {/* footer */}
      <Footer />
 



     

    </main>
  )
}
