import { useRouter } from "next/router";
import Head from 'next/head'
import { useState, useEffect } from 'react'
import useRouteUrlHistory from "./useTargetPage";
import { motion as m } from "framer-motion"

export default function Work({ pageProps, prevRoute, currentRoute }) {
  const router = useRouter();
  const { pathname } = router;
  const nextPageName = "/" + useRouteUrlHistory()

  const [focusedIndex, setFocusedIndex] = useState(0); // Track the index of the focused work experience

  const workExperienceData = [
    {
      companyName: "Avanade",
      jobTitle: "Software Engineer",
      employmentDates: "2019-2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem et mauris faucibus placerat."
    },
    {
      companyName: "Brain Institute",
      jobTitle: "Data Scientist",
      employmentDates: "2021-Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem et mauris faucibus placerat."
    },
    // Add more work experience entries here
  ];

  useEffect(() => {
    console.log("Target: " + nextPageName);
  }, []);

  const handleWorkExperienceClick = (index) => {
    setFocusedIndex(index);
  };

  return (
    <>
      <div className="bg-gray-800 flex min-h-screen py-2">
        <div className="w-1/4 bg-gray-900">
          <ul className="text-white p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
            {workExperienceData.map((experience, index) => (
              <li
                key={index}
                className={`mb-4 cursor-pointer ${index === focusedIndex ? 'font-bold' : ''}`}
                onClick={() => handleWorkExperienceClick(index)}
              >
                {experience.companyName}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 bg-gray-800">
          <m.div
            initial={{ x: (prevRoute == "/" ? "100%" : "-100%"), opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: (pathname == "/" ? "100%" : "-100%"), opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          >
            <Head>
              <title>Ryan Millares</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto max-w-prose px-4 pt-12">
              <div className="spacer" />
              <div className="spacer" />
              <div className="spacer" />

              <div className="text-white">
                <h1>
                  <span className="font-black text-5xl">Work</span>
                  <br />
                  <span className="text-3xl text-green-300">Experience</span>
                </h1>
                <br />
                <h2 className="text-1xl">Going to: {nextPageName}</h2>
              </div>

              <div className="spacer" />
              <div className="spacer" />

              <section className="py-12">
                <div className="container mx-auto max-w-4xl px-4 overflow-scroll">
                  {workExperienceData.map((experience, index) => (
                    <div
                      key={index}
                      className={`mb-8 `}
                    >
                      <h2 className="text-2xl font-bold mb-2">
                        {experience.companyName}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        {experience.jobTitle}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {experience.employmentDates}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {experience.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <style jsx global>{`
              html,
              body {
                overflow: hidden;
              }

              .spacer {
                height: 20px;
              }

              /* Custom scrollbar styles */
              ::-webkit-scrollbar {
                width: 8px;
              }

              ::-webkit-scrollbar-thumb {
                background-color: #4b5563;
                border-radius: 4px;
              }

              ::-webkit-scrollbar-track {
                background-color: #1f2937;
                border-radius: 4px;
              }
            `}</style>
          </m.div>
        </div>
      </div>
    </>
  );
}
