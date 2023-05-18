import Head from 'next/head'
import { motion as m } from "framer-motion"
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import useRouteUrlHistory from './useTargetPage';
import Select, { components } from 'react-select'
import projectData from '../data/Projects.JSON'


export default function Projects({ pageProps, prevRoute, currentRoute }) {
    const router = useRouter();
    const { pathname } = router;
    const nextPageName = "/" + useRouteUrlHistory()
    const options = [
        { value: 'java', label: 'Java' },
        { value: 'c++', label: 'C++' },
        { value: 'python', label: 'Python' },
        { value: 'javascript', label: 'JavaScript' },

        { value: 'c#', label: 'C#' }
    ]
    const [optionSelected, setOptionSelected] = useState(null);
    const [projectList, setProjectList] = useState([])
    const handleChange = (selected) => {
        setOptionSelected(selected);
    };
   

    const Option = (props) => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };


    useEffect(() => {
        //console.log(optionSelected)
        setProjectList(projectData) // change to filter function later
        //console.log(projectList)
    }, [projectData])
    return (
        <>
            <div className="bg-gray-900 flex min-h-screen py-2">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="bg-gray-900"
                    style = {{maxWidth: "25vw", minWidth: "25vw", display: "block"}}
                >
                    <div className="ml-4" style={{ position: "fixed" }}>
                        <div className="bg-gray-800 rounded-lg p-4 mr-5" style = {{maxWidth: "25vw", minWidth: "25vw"}}>
                            <h1>Filter by different skills</h1>
                            <br/>
                            <span
                                className="d-inline-block grow"
                                data-toggle="popover"
                                data-trigger="focus"
                                data-content="Select skills"
                            >
                                <Select // Updated component name
                                    options={options}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={true}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                    className = "w-100"
                                />
                            </span>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
                            >
                                Search
                            </button>
                        </div>

                    </div>


                </m.div >
                <div className="bg-gray-900 ml-8" style = {{minWidth: "50vw", maxWidth: "50vw", display: "block"}}>
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

                        <main className="container mx-auto px-4 pt-12">


                            <div className="text-white">
                                <h1>
                                    <span className="text-3xl text-green-300">All Projects</span>
                                </h1>
                                <br />
                            </div>

                            <div className="spacer" />
                            <div className="spacer" />

                            <section className="py-12">
                                <div className="container mx-auto max-w-4xl px-4">
                                    {projectList.map((project, index) => (
                                        <div
                                            key={index}
                                            className={`mb-8 workbox px-2 py-2 rounded transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-800 duration-100`}
                                        >
                                            <h2 className="text-2xl font-bold text-white mb-2">
                                                {project.name}
                                            </h2>
                                            <p className="text-gray-400 text-sm">
                                                {project.company}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {project.setting}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {project.description}
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
            </div >
        </>
    );
}