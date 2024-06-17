import { ModeToggle } from '@/components/global/mode-toggle'
import { User } from '@clerk/nextjs/server'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  user?: User | null
}

const Navigation = ({ user }: Props) => {

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt="plur logo"
        />
        <span className="text-xl font-bold"> Plura</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href="/agency"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started
          </span>
        </Link>
        <MenuIcon className="md:hidden" />
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation
