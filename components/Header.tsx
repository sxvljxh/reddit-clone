import Image from "next/image"

import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon
} from "@heroicons/react/outline"
import {
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon
} from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="flex bg-white shadow px-4 py-2 sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          className=""
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex items-center flex-1 space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10  border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      <div
        onClick={() => (session ? signOut() : signIn())}
        className="hidden cursor-pointer items-center lg:flex space-x-2 border border-gray-100 p-2"
      >
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="https://links.papareact.com/23l"
            objectFit="contain"
            layout="fill"
            className="opacity-75"
            alt=""
          />
        </div>
        <div className="flex-1 text-xs">
          <p className="text-gray-400 truncate">
            {session ? session?.user?.name : "Sign In"}
          </p>
        </div>
        {/* <p className="text-gray-400">{session ? 'Sign out':'Sign In'}</p> */}
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
}

export default Header
