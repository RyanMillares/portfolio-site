import Head from 'next/head'
import { motion as m } from "framer-motion"
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import useRouteUrlHistory from './useTargetPage';



export default function Projects({ pageProps, prevRoute, currentRoute }) {
    const router = useRouter();
    const { pathname } = router;
    const nextPageName = "/" + useRouteUrlHistory()
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
        {
            companyName: "Brain Institute",
            jobTitle: "Data Scientist",
            employmentDates: "2021-Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem et mauris faucibus placerat."
        }, {
            companyName: "Brain Institute",
            jobTitle: "Data Scientist",
            employmentDates: "2021-Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem et mauris faucibus placerat."
        },
        // Add more work experience entries here
    ];

    useEffect(() => {

    })
    return (
        <>
            <div className="bg-gray-900 flex min-h-screen py-2">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="w-1/4 bg-gray-900"
                >
                    <div className="ml-4 flex justify-center items-center" style={{ position: "fixed" }}>
                        <div className="bg-gray-800 rounded-lg p-4">
                            <select
                                className="bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none"
                            >
                                <option value="">Select Category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
                            >
                                Search
                            </button>
                        </div>

                    </div>


                </m.div>
                <div className="w-3/4 bg-gray-900">
                    <m.div
                        initial={{ x: (prevRoute == "/work" || prevRoute == "/" ? "100%" : "-100%"), opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: (currentRoute == "/work" || currentRoute == "/" ? "-100%" : "100%"), opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                    >
                        <Head>
                            <title>Projects</title>
                            <link rel="icon" href="/favicon.ico" />
                        </Head>

                        <main className="container mx-auto max-w-prose px-4 pt-12">


                            <div className="text-white">
                                <h1>
                                    <span className="font-black text-5xl"></span>
                                    <br />
                                    <span className="text-3xl text-green-300">All Projects</span>
                                </h1>
                                <br />
                            </div>

                            <div className="spacer" />
                            <div className="spacer" />

                            <section className="py-12">
                                <div className="container mx-auto max-w-4xl px-4">
                                    {workExperienceData.map((experience, index) => (
                                        <div
                                            key={index}
                                            className={`mb-8 workbox px-2 py-2 rounded transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-800 duration-100`}
                                        >
                                            <h2 className="text-2xl font-bold text-white mb-2">
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