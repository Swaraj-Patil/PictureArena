import Image from 'next/image'
import React from 'react'
import landingImage from '@/public/media/landing-image.png'
import PlayButton from '@/public/media/play-button.svg'
import { Button, Carousel, DeviceCard, FAQ, FreeTrial, PlanCard, ToggleButton, Typography } from '@/app/_components'
import { PlayIcon } from '@heroicons/react/24/solid'
import actionBanner1 from '@/public/media/banner-action1.svg'
import actionBanner2 from '@/public/media/banner-action2.svg'
import actionBanner3 from '@/public/media/banner-action3.svg'
import actionBanner4 from '@/public/media/banner-action4.svg'
import actionBanner5 from '@/public/media/banner-action5.svg'
import mobileIcon from '@/public/media/mobile-icon.svg'
import tabletIcon from '@/public/media/tablet-icon.svg'
import smartTvIcon from '@/public/media/smart-tv-icon.svg'
import laptopIcon from '@/public/media/laptop-icon.svg'
import consoleIcon from '@/public/media/console-icon.svg'
import headsetIcon from '@/public/media/headset-icon.svg'

const categoriesData = [
  {
    name: 'Action',
    img: actionBanner1,
  },
  {
    name: 'Adventure',
    img: actionBanner2,
  },
  {
    name: 'Comedy',
    img: actionBanner3,
  },
  {
    name: 'Drama',
    img: actionBanner4,
  },
  {
    name: 'Horror',
    img: actionBanner5,
  },
  {
    name: 'Action',
    img: actionBanner1,
  },
  {
    name: 'Adventure',
    img: actionBanner2,
  },
  {
    name: 'Comedy',
    img: actionBanner3,
  },
  {
    name: 'Drama',
    img: actionBanner4,
  },
  {
    name: 'Horror',
    img: actionBanner5,
  },
  {
    name: 'Action',
    img: actionBanner1,
  },
  {
    name: 'Adventure',
    img: actionBanner2,
  },
  {
    name: 'Comedy',
    img: actionBanner3,
  },
  {
    name: 'Drama',
    img: actionBanner4,
  },
  {
    name: 'Horror',
    img: actionBanner5,
  },
  {
    name: 'Action',
    img: actionBanner1,
  },
  {
    name: 'Adventure',
    img: actionBanner2,
  },
  {
    name: 'Comedy',
    img: actionBanner3,
  },
  {
    name: 'Drama',
    img: actionBanner4,
  },
  {
    name: 'Horror',
    img: actionBanner5,
  },
]

const devicesData = [
  {
    name: 'Smartphone',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: mobileIcon,
  },
  {
    name: 'Tablet',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: tabletIcon,
  },
  {
    name: 'Smart TV',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: smartTvIcon,
  },
  {
    name: 'Laptops',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: laptopIcon,
  },
  {
    name: 'Gaming Consoles',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: consoleIcon,
  },
  {
    name: 'VR Headsets',
    description: 'PictureArena is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: headsetIcon,
  },
]

const faqs = [
  {
    question: 'What is PictureArena?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How much does PictureArena cost?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What content is available on PictureArena?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How can I watch PictureArena?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How do I sign up for PictureArena?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What is the PictureArena free trial?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How do I contact PictureArena customer support?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What are the PictureArena payment methods?',
    answer: 'PictureArena is a streaming service that allows you to watch movies and shows on demand.',
  },
]

const plans = [
  {
    name: 'Basic Plan',
    description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    rates: {
      monthly: 9.99,
      yearly: 89.99
    }
  },
  {
    name: 'Standard Plan',
    description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
    rates: {
      monthly: 12.99,
      yearly: 149.99
    }
  },
  {
    name: 'Premium Plan',
    description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
    rates: {
      monthly: 14.99,
      yearly: 169.99
    }
  },
]

const HomePage = () => {
  return (
    <div className='bg-black-08 font-manrope text-white'>
      <div>
        <Image
          priority
          src={landingImage}
          alt='Landing Image'
        />
      </div>

      <div className='absolute z-1 top-0 left-0 w-full h-screen flex items-center justify-center'>
        <div className=''>
          <Image
            src={PlayButton}
            alt='Play Button'
            width={360}
          />
        </div>

      </div>

      <div className='flex flex-col items-center -mt-10'>
        <p className='font-bold text-5xl mb-6'>The Best Streaming Experience</p>
        <p className='text-grey-60 text-md w-[900px] text-center mb-12'>PictureArena is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With PictureArena, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <Button
          label='Start Watching Now'
          icon={PlayIcon}
        />
      </div>

      <div className='px-20 pt-44 pb-36'>
        <Carousel
          title='Explore our wide variety of categories'
          description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          items={categoriesData}
        />

        <div className='mt-36'>
          <Typography
            title='We Provide you streaming experience across various devices.'
            description='With PictureArena, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
          />

          <div className='flex flex-wrap gap-7 mt-16'>
            {devicesData.map((device, index) =>
              <DeviceCard
                key={index}
                name={device.name}
                description={device.description}
                icon={device.icon}
              />)}
          </div>
        </div>

        <div className="mt-36">
          <div className='flex items-center justify-between'>
            <Typography
              title='Frequently Asked Questions'
              description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about PictureArena."
            />

            <Button label='Ask a Question' fontSize={16} />
          </div>

          <div className='mt-16 grid grid-cols-2 gap-x-28 gap-y-10'>
            {faqs.map(({ question, answer }, index) =>
              <FAQ
                key={index}
                question={question}
                answer={answer}
                index={index + 1}
              />
            )}
          </div>
        </div>

        <div className="mt-36">
          <div className='flex items-center justify-between'>

            <Typography
              title="Choose the plan that's right for you"
              description='Join PictureArena and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
            />

            <ToggleButton
              items={['Monthly', 'Yearly']}
            />

          </div>

          <div className='mt-16 grid grid-cols-3 gap-x-7'>
            {plans.map((plan, index) => 
              <PlanCard
                key={index}
                name={plan.name}
                description={plan.description}
                rates={plan.rates}
              />
            )}
          </div>
        </div>

        <div className="mt-36">
          <FreeTrial />
        </div>
      </div>
    </div>
  )
}

export default HomePage