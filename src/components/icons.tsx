import * as React from "react"
import Ae from "../../static/icons/ae.svg"
import Ai from "../../static/icons/ai.svg"
import Ps from "../../static/icons/ps.svg"
import Android from "../../static/icons/phone.svg"
import AndroidOS from "../../static/icons/android.svg"
import API from "../../static/icons/api.svg"
import Borderlands from "../../static/icons/borderlands.svg"
import Console from "../../static/icons/console.svg"
import CSS from "../../static/icons/css.svg"
import Django from "../../static/icons/django.svg"
import Gatsby from "../../static/icons/gatsby.svg"
import IDEA from "../../static/icons/idea.svg"
import IOS from "../../static/icons/ios.svg"
import Java from "../../static/icons/java.svg"
import JavaScript from "../../static/icons/javascript.svg"
import LeagueOfLegends from "../../static/icons/leagueoflegends.svg"
import Map from "../../static/icons/map.svg"
import Script from "../../static/icons/script.svg"
import Python from "../../static/icons/python.svg"
import ReactSVG from "../../static/icons/reactn.svg"
import Safari from "../../static/icons/safari.svg"
import Server from "../../static/icons/server.svg"
import TypeScript from "../../static/icons/typescript.svg"
import Web from "../../static/icons/web.svg"

const iconClasses =
  "inline-block fill-current tablet:h-24 tablet:w-24 m-2 tablet:m-4 text-white dark:text-black"

interface allIcons {
  [name: string]: object
}

const Icons: allIcons = {
  ae: <Ae className={iconClasses} key="Ae" />,
  ai: <Ai className={iconClasses} key="Ai" />,
  ps: <Ps className={iconClasses} key="Ps" />,
  phone: <Android className={iconClasses} key="Phone" />,
  android: <AndroidOS className={iconClasses} key="Android" />,
  api: <API className={iconClasses} key="API" />,
  borderlands: <Borderlands className={iconClasses} key="Borderlands" />,
  console: <Console className={iconClasses} key="Console" />,
  css: <CSS className={iconClasses} key="CSS" />,
  django: <Django className={iconClasses} key="Django" />,
  gatsby: <Gatsby className={iconClasses} key="Gatsby" />,
  idea: <IDEA className={iconClasses} key="IDEA" />,
  ios: <IOS className={iconClasses} key="IOS" />,
  java: <Java className={iconClasses} key="Java" />,
  javascript: <JavaScript className={iconClasses} key="JavaScript" />,
  leagueoflegends: (
    <LeagueOfLegends className={iconClasses} key="LeagueOfLegends" />
  ),
  map: <Map className={iconClasses} key="Map" />,
  script: <Script className={iconClasses} key="Script" />,
  python: <Python className={iconClasses} key="Python" />,
  reactn: <ReactSVG className={iconClasses} key="ReactSVG" />,
  safari: <Safari className={iconClasses} key="Safari" />,
  server: <Server className={iconClasses} key="Server" />,
  typescript: <TypeScript className={iconClasses} key="TypeScript" />,
  web: <Web className={iconClasses} key="Web" />,
}

export default Icons
