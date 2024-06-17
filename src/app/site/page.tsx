import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import clsx from 'clsx'

const page = () => {
  return (
    <>
      <section className="h-full w-full pt-96 relative flex items-center justify-center flex-col">
        {/* grid */}

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <p className="text-center z-10">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Plura
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={600}
            width={600}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted !mb-64"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[60px]">
        <h2 className="text-4xl text-center mt-20 sm:!mt-20 lg:mt-20"> Choose what fits you right</h2>
        <h3 className="text-muted-foreground text-center mb-20 main-text">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </h3>
        <div className="flex justify-center gap-4 flex-wrap mt-6 mb-20">
          {pricingCards.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.title}
              className={clsx('w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.title === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  {card.price}
                </span>
                <span className="text-muted-foreground">
                  <span>/ {card.duration}</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricingCards
                    .find((c) => c.title === card.title)
                    ?.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2"
                      >
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href={`/agency/?plan=${card.priceId}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    {
                      '!bg-muted-foreground':
                        card.title !== 'Unlimited Saas',
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
          {/* <Card className={clsx('w-[300px] flex flex-col justify-between')}>
            <CardHeader>
              <CardTitle
                className={clsx({
                  'text-muted-foreground': true,
                })}
              >
                {pricingCards[0].title}
              </CardTitle>
              <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">$0</span>
              <span>/ month</span>
            </CardContent>
            <CardFooter className="flex flex-col  items-start gap-4 ">
              <div>
                {pricingCards
                  .find((c) => c.title === 'Starter')
                  ?.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-2"
                    >
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
              </div>
              <Link
                href="/agency"
                className={clsx(
                  'w-full text-center bg-primary p-2 rounded-md',
                  {
                    '!bg-muted-foreground': true,
                  }
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card> */}
        </div>
      </section>
    </>
  )
}

export default page