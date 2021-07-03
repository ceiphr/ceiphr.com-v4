import * as React from "react"
import ActiveDirectory from "../../static/icons/activedirectory.svg"
import Ae from "../../static/icons/ae.svg"
import Ai from "../../static/icons/ai.svg"
import Ps from "../../static/icons/ps.svg"
import Android from "../../static/icons/android.svg"
import API from "../../static/icons/api.svg"
import Apple from "../../static/icons/apple.svg"
import Approval from "../../static/icons/approval.svg"
import Borderlands from "../../static/icons/borderlands.svg"
import Bot from "../../static/icons/bot.svg"
import Bug from "../../static/icons/bug.svg"
import Chrome from "../../static/icons/chrome.svg"
import CloudFirewall from "../../static/icons/cloudfirewall.svg"
import Code from "../../static/icons/code.svg"
import Console from "../../static/icons/console.svg"
import CSS from "../../static/icons/css.svg"
import Discord from "../../static/icons/discord.svg"
import Django from "../../static/icons/django.svg"
import Gatsby from "../../static/icons/gatsby.svg"
import GCP from "../../static/icons/gcp.svg"
import Git from "../../static/icons/git.svg"
import GitHub from "../../static/icons/github.svg"
import Google from "../../static/icons/google.svg"
import Heroku from "../../static/icons/heroku.svg"
import IDEA from "../../static/icons/idea.svg"
import IOS from "../../static/icons/ios.svg"
import IOSDev from "../../static/icons/iosdev.svg"
import Java from "../../static/icons/java.svg"
import JavaScript from "../../static/icons/javascript.svg"
import LeagueOfLegends from "../../static/icons/leagueoflegends.svg"
import Logs from "../../static/icons/logs.svg"
import Map from "../../static/icons/map.svg"
import Markdown from "../../static/icons/markdown.svg"
import Marvel from "../../static/icons/marvel.svg"
import Module from "../../static/icons/module.svg"
import Netlify from "../../static/icons/netlify.svg"
import Next from "../../static/icons/next.svg"
import Phone from "../../static/icons/phone.svg"
import Plugin from "../../static/icons/plugin.svg"
import Program from "../../static/icons/program.svg"
import Script from "../../static/icons/script.svg"
import Python from "../../static/icons/python.svg"
import ReactSVG from "../../static/icons/reactsvg.svg"
import Repo from "../../static/icons/repo.svg"
import Responsive from "../../static/icons/responsive.svg"
import RESTAPI from "../../static/icons/restapi.svg"
import Safari from "../../static/icons/safari.svg"
import Sass from "../../static/icons/sass.svg"
import Selenium from "../../static/icons/selenium.svg"
import Server from "../../static/icons/server.svg"
import SoftwareLicense from "../../static/icons/softwarelicense.svg"
import TailwindCSS from "../../static/icons/tailwindcss.svg"
import Testing from "../../static/icons/testing.svg"
import TypeScript from "../../static/icons/typescript.svg"
import Vercel from "../../static/icons/vercel.svg"
import VM from "../../static/icons/vm.svg"
import VR from "../../static/icons/vr.svg"
import VSCode from "../../static/icons/vscode.svg"
import Web from "../../static/icons/web.svg"
import WebDesign from "../../static/icons/webdesign.svg"

const iconClasses =
  "inline-block fill-current tablet:h-24 tablet:w-24 m-2 tablet:m-4 text-white dark:text-black"

interface allIcons {
  [name: string]: object
}

const Icons: allIcons = {
  activedirectory: (
    <ActiveDirectory className={iconClasses} key="Active Directory" />
  ),
  ae: <Ae className={iconClasses} key="Ae" />,
  ai: <Ai className={iconClasses} key="Ai" />,
  ps: <Ps className={iconClasses} key="Ps" />,
  android: <Android className={iconClasses} key="Android" />,
  api: <API className={iconClasses} key="API" />,
  apple: <Apple className={iconClasses} key="Apple" />,
  approval: <Approval className={iconClasses} key="Approval" />,
  borderlands: <Borderlands className={iconClasses} key="Borderlands" />,
  bot: <Bot className={iconClasses} key="Bot" />,
  bug: <Bug className={iconClasses} key="Bug" />,
  chrome: <Chrome className={iconClasses} key="Chrome" />,
  cloudfirewall: <CloudFirewall className={iconClasses} key="Cloud Firewall" />,
  code: <Code className={iconClasses} key="Code" />,
  console: <Console className={iconClasses} key="Console" />,
  css: <CSS className={iconClasses} key="CSS" />,
  discord: <Discord className={iconClasses} key="Discord" />,
  django: <Django className={iconClasses} key="Django" />,
  gatsby: <Gatsby className={iconClasses} key="Gatsby" />,
  gcp: <GCP className={iconClasses} key="GCP" />,
  git: <Git className={iconClasses} key="Git" />,
  github: <GitHub className={iconClasses} key="GitHub" />,
  google: <Google className={iconClasses} key="Google" />,
  heroku: <Heroku className={iconClasses} key="Heroku" />,
  idea: <IDEA className={iconClasses} key="IDEA" />,
  ios: <IOS className={iconClasses} key="IOS" />,
  iosdev: <IOSDev className={iconClasses} key="IOS Dev" />,
  java: <Java className={iconClasses} key="Java" />,
  javascript: <JavaScript className={iconClasses} key="JavaScript" />,
  leagueoflegends: (
    <LeagueOfLegends className={iconClasses} key="LeagueOfLegends" />
  ),
  logs: <Logs className={iconClasses} key="Logs" />,
  map: <Map className={iconClasses} key="Map" />,
  markdown: <Markdown className={iconClasses} key="Markdown" />,
  marvel: <Marvel className={iconClasses} key="Marvel" />,
  module: <Module className={iconClasses} key="Module" />,
  netlify: <Netlify className={iconClasses} key="Netlify" />,
  next: <Next className={iconClasses} key="Next" />,
  phone: <Phone className={iconClasses} key="Phone" />,
  plugin: <Plugin className={iconClasses} key="Plugin" />,
  program: <Program className={iconClasses} key="Program" />,
  script: <Script className={iconClasses} key="Script" />,
  python: <Python className={iconClasses} key="Python" />,
  reactsvg: <ReactSVG className={iconClasses} key="ReactSVG" />,
  repo: <Repo className={iconClasses} key="Repo" />,
  responsive: <Responsive className={iconClasses} key="Responsive" />,
  restapi: <RESTAPI className={iconClasses} key="REST API" />,
  safari: <Safari className={iconClasses} key="Safari" />,
  sass: <Sass className={iconClasses} key="Sass" />,
  selenium: <Selenium className={iconClasses} key="Selenium" />,
  server: <Server className={iconClasses} key="Server" />,
  softwarelicense: (
    <SoftwareLicense className={iconClasses} key="Software License" />
  ),
  tailwindcss: <TailwindCSS className={iconClasses} key="Tailwind CSS" />,
  testing: <Testing className={iconClasses} key="Testing" />,
  typescript: <TypeScript className={iconClasses} key="TypeScript" />,
  vercel: <Vercel className={iconClasses} key="Vercel" />,
  vm: <VM className={iconClasses} key="VM" />,
  vr: <VR className={iconClasses} key="VR" />,
  vscode: <VSCode className={iconClasses} key="VS Code" />,
  web: <Web className={iconClasses} key="Web" />,
  webdesign: <WebDesign className={iconClasses} key="Web Design" />,
}

export default Icons
