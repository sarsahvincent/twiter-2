import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailOpenIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="h-10 w-10 m-3"
        src="https://links.papareact.com/drq"
        alt="icon"
      />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={HashtagIcon} />
      <SidebarRow title="Notification" Icon={BellIcon} />
      <SidebarRow title="Messages" Icon={MailOpenIcon} />
      <SidebarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SidebarRow title="Lists" Icon={CollectionIcon} />
      <SidebarRow title="Sign In" Icon={UserIcon} />
      <SidebarRow title="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  )
}

export default Sidebar
