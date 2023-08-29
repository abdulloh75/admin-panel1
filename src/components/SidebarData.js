import React from 'react'
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io"

export const SIdebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: "Products",
    path: "/product",
    icon: <FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: "Messages",
    path: "/message",
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
    cName: 'nav-text'
  }
]
