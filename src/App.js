import React, { Fragment, useState } from "react";
import Spline from "@splinetool/react-spline";
import SCENE_OBJECT from "./scene.spline";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import mypic from "./assets/1647252505087.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { AnimatePresence, motion } from "framer-motion";


function App() {
  const [isActive, setIsActive] = useState(false);

  function btnClick() {
    window.open(
      "https://drive.google.com/file/d/1qto9KHaaBDzJ2HiWcZ1hHWjgKMe6elqg/view?usp=sharing"
    );
  }

  return (
    <>
      <AnimatePresence initial={false}>
        <div className="relative flex flex-col items-center justify-center w-screen min-h-screen pb-20 bg-primary">
          {/* Navbar */}
          <nav className="fixed inset-x-0 z-50 flex items-center justify-center w-full px-10 top-2">
            <div className="flex items-center w-full p-4 md:w-880 bg-navBar rounded-2xl">
              <p className="text-lg font-medium text-slate-200">Ajmal Shk.</p>
              <div className="items-center flex-1 hidden gap-6 ml-6 md:flex">
                <a
                  href="#home"
                  className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                >
                  Contact
                </a>
                <button
                  onClick={btnClick}
                  className="px-2 py-1 ml-auto text-base font-medium duration-100 ease-in-out border cursor-pointer text-textBase hover:text-slate-100 border-textBase rounded-xl hover:border-gray-200"
                >
                  Download
                </button>
              </div>

              <motion.div
                whileTap={{ scale: 0.5 }}
                className="block ml-auto cursor-pointer md:hidden"
                onClick={() => setIsActive(!isActive)}
              >
                <IoMenu className="text-2xl text-textBase" />
              </motion.div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: "0.1s", type: "spring" }}
                  className="fixed flex flex-col items-center gap-6 p-4 rounded-lg w-275 bg-navBar top-24 right-16 justify-evenly "
                >
                  <a
                    href="#home"
                    className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100"
                  >
                    Contact
                  </a>
                  <motion.a
                    whileTap={{ scale: 0.5 }}
                    onClick={btnClick}
                    className="px-2 py-1 text-base font-medium duration-100 ease-in-out border rounded-full cursor-pointer text-textBase hover:text-slate-100 border-textBase hover:border-gray-200"
                  >
                    Download
                  </motion.a>
                </motion.div>
              )}
            </div>
          </nav>
          <div className="relative " id="home">
            {/* <Spline
          scene={"https://my.spline.design/scene-4456b5de437334e00e51914ed8f71c86/"}
        /> */}
            <div className="w-full h-screen">
              <Spline className="w-full min-h-full" width={1890} scene={SCENE_OBJECT} />
            </div>
            <div className="absolute flex items-center justify-center w-full bottom-10">
              <div className="flex items-center justify-center p-4 shadow-md bg-zinc-900 rounded-3xl">
                <p className="text-textBase">Double Press and drag to orbit</p>
              </div>
            </div>
          </div>

          {/* Main Section */}

          <main className="w-[80%] mt-5 ">
            {/* About Section  */}
            <p className="flex items-center justify-center text-4xl text-gray-400 capitalize">
              About Me
            </p>
            <section
              className="grid w-full grid-cols-1 gap-4 my-8 md:grid-cols-2"
              id="about"
            >
              {/* image box */}
              <div className="flex items-center justify-center w-full h-420">
                <div className="relative bg-blue-500 rounded-full w-275 h-275">
                  <img
                    className="absolute object-cover w-full h-full rounded-full shadow-lg -right-5 top-5"
                    src={mypic}
                    alt=""
                  />
                </div>
              </div>
              {/* content Box */}
              <div className="flex flex-col items-center justify-center w-full md:px-24 sm:px-2 md:py-4">
                <p className="text-lg text-center text-textBase">
                  To succeed in an environment of growth and excellence and earn
                  a job which provides me job satisfaction and self-development
                  and help me achieve personal as well as organization goals. I
                  am very confident that i will be very helpful to your
                  organaisation
                </p>

                <motion.button
                  onClick={btnClick}
                  whileTap={{ scale: 0.8 }}
                  className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-500 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                >
                  <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full gorup-hover:bg-opacity-0">
                    Download
                  </span>
                </motion.button>
              </div>
            </section>

            {/* Timline Section */}

            <section className="flex flex-col items-center justify-center w-full">
              <p className="flex items-center justify-center mb-12 text-4xl text-gray-400 capitalize">
                Experience
              </p>
              <VerticalTimeline>
                {Experience &&
                  Experience.map((n) => (
                    <VerticalTimelineElement
                      key={n.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(29,30,37)",
                        color: "#888",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(29,30,37)",
                      }}
                      date={n.date}
                      iconStyle={{ background: "rgb(29,30,37)", color: "#888" }}
                      icon={n.iconsSrc}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {n.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {n.location}
                      </h4>
                      <p>{n.description}</p>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
            </section>

            {/* Project Section */}
            <p className="flex items-center justify-center mt-20 text-4xl text-gray-400 capitalize">
              Projects
            </p>
            <section
              className="flex flex-wrap items-center my-12 justify-evenly gap4"
              id="projects"
            >
              {Projects &&
                Projects.map((p) => (
                  <div
                    key={p.id}
                    className="m-4 border border-zinc-800 rounded-md p-2 min-w-[350px] md:max-w-[350px] hover:border-zinc-600 hover:border-2 duration-100 ease-in-out"
                  >
                    <p className="text-lg font-medium uppercase text-textBase">
                      {p.name.length > 25
                        ? `${p.name.slice(0, 25)}...`
                        : p.name}
                    </p>
                    <img
                      src={p.imageSrc}
                      alt=""
                      srcset=""
                      className="object-cover w-full h-full my-4 rounded-md "
                    />
                    <div className="flex justify-between flex-1 item-center">
                      <p className="text-lg text-gray-300 ">
                        Technologies
                        <span className="block text-sm text-gray-500">
                          {p.techs}
                        </span>
                      </p>
                      <a href={p.github} className="flex items-center">
                        <motion.div whileTap={{ scale: 0.5 }}>
                          <IoLogoGithub className="text-3xl cursor-pointer text-textBase" />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                ))}
            </section>

            {/* Contact Section  */}
            <section
              id="contact"
              className="flex flex-col items-center justify-center w-full my-24"
            >
              <p className="mb-6 text-4xl text-gray-400 capitalize">
                Connect with me
              </p>
              <div className="flex flex-wrap items-center justify-center w-full gap-4 my-4">
                {SocialLinks &&
                  SocialLinks.map((s) => (
                    <motion.a
                      whileTap={{ scale: 0.7 }}
                      id={s.id}
                      href={s.link}
                      className="flex items-center justify-center w-full gap-3 px-3 py-5 duration-100 ease-in-out border rounded-full cursor-pointer md:w-auto md:px-8 border-zinc-800 hover:borer-zinc-600 hover:border-zinc-400 hover:border-2"
                    >
                      {s.iconSrc}
                      <p className="text-lg text-textBase">{s.name}</p>
                    </motion.a>
                  ))}
              </div>
            </section>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
