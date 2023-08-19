import Head from 'next/head'
import { motion as m } from "framer-motion"
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import useRouteUrlHistory from './useTargetPage';
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated';
import projectData from '../data/Projects.JSON'


export default function Projects({ pageProps, prevRoute, currentRoute }) {
    const router = useRouter();
    const { pathname } = router;

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#1a202c',
            borderColor: '#1a202c',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'rgb(52 211 153)' : '#1a202c',
            color: '#f7fafc',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#f7fafc',
        }),
    };
    const skillOptions = [
        { value: 'Java', label: 'Java' },
        { value: 'C++', label: 'C++' },
        { value: 'Python', label: 'Python' },
        { value: 'Javascript', label: 'JavaScript' },

        { value: 'C#', label: 'C#' }
    ]
    const settingOptions = [
        { value: 'Professional', label: 'Professional' },
        { value: 'Academic', label: 'Academic' },
        { value: 'Personal', label: 'Personal' },
        { value: '', label: 'All Settings' }
    ]
    const [skillsSelected, setSkillsSelected] = useState([]);
    const [settings, setSettings] = useState([])
    const [projectList, setProjectList] = useState([])
    const handleSkillsChange = (selected) => {
        setSkillsSelected(selected);
    };
    const handleSettingsChange = (selected) => {
        setSettings([selected]);
    };

    const animatedComponents = makeAnimated();
    const [isMobile, setIsMobile] = useState(false);

    function filterProjects(unfilteredProj) {
        let projs = unfilteredProj
        console.log(projs)
        console.log(settings)
        if (skillsSelected.length > 0) {
            projs = projs.filter(proj => proj.skills.some(skill => skillsSelected.map(skill => skill.value).includes(skill)));
        }

        if (settings.length > 0 && settings[0].value) {
            projs = projs.filter(proj => settings.map(setting => setting.value).includes(proj.setting));

        }
        return projs
    }
    function displaySearch() {
        if (!isMobile)
            return false
        else {
            return true
        }
    }


    useEffect(() => {
        //console.log(optionSelected)
        setProjectList(filterProjects(projectData)) // change to filter function later
        console.log(projectData)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Listen for window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        //console.log(projectList)
    }, [skillsSelected, settings])
    return (
        <>
            <div className="bg-gray-900 flex min-h-screen py-2">
                {
                    isMobile ? (


                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.0, ease: "easeOut" }}

                            className="fixed top-10 left-0 min-w-[25vw] max-w-[25vw] z-10"
                        >
                            <div className="mt-16">

                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                >
                                    +
                                </button>

                                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="hidden sm:block sm:w-1/4 bg-gray-900"
                >

                </m.div>
                                <div className="bg-gray-800 rounded-tr-lg rounded-br-lg sm:rounded-lg min-w-[25vw] max-w-[25vw] p-4 mr-5"
                                style = {{display: "inherit"}}
                                >
                                    <h1 className="text-white">Filter by Setting</h1>
                                    <br />
                                    <span
                                        className="d-inline-block grow"
                                        data-toggle="popover"
                                        data-trigger="focus"
                                        data-content="Select setting"
                                    >
                                        <Select
                                            options={settingOptions}
                                            closeMenuOnSelect={true}
                                            hideSelectedOptions={false}
                                            components={animatedComponents}
                                            onChange={handleSettingsChange}
                                            allowSelectAll={true}
                                            styles={customStyles}
                                            value={settings}
                                            className="w-100"
                                        />
                                    </span>
                                    <br />
                                    <h1 className="text-white">Filter by Skills</h1>
                                    <br />
                                    <span
                                        className="d-inline-block grow"
                                        data-toggle="popover"
                                        data-trigger="focus"
                                        data-content="Select setting"
                                    >
                                        <Select // Updated component name
                                            options={skillOptions}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={true}
                                            components={animatedComponents}
                                            onChange={handleSkillsChange}
                                            allowSelectAll={true}
                                            styles={customStyles}
                                            value={skillsSelected}
                                            className="w-100"
                                        />
                                    </span>
                                    <br />
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
                                    >
                                        Search
                                    </button>
                                </div>

                            </div>

                        </m.div >

                    ) : (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.0, ease: "easeOut" }}


                            className="min-w-[25vw] max-w-[25vw]"
                        >
                            <div className="ml-4 fixed">
                                <div className="bg-gray-800 rounded-tr-lg rounded-br-lg sm:rounded-lg min-w-[25vw] max-w-[25vw] p-4 mr-5">
                                    <h1 className="text-white">Filter by Setting</h1>
                                    <br />
                                    <span
                                        className="d-inline-block grow"
                                        data-toggle="popover"
                                        data-trigger="focus"
                                        data-content="Select setting"
                                    >
                                        <Select
                                            options={settingOptions}
                                            closeMenuOnSelect={true}
                                            hideSelectedOptions={false}
                                            components={animatedComponents}
                                            onChange={handleSettingsChange}
                                            allowSelectAll={true}
                                            styles={customStyles}
                                            value={settings}
                                            className="w-100"
                                        />
                                    </span>
                                    <br />
                                    <h1 className="text-white">Filter by Skills</h1>
                                    <br />
                                    <span
                                        className="d-inline-block grow"
                                        data-toggle="popover"
                                        data-trigger="focus"
                                        data-content="Select setting"
                                    >
                                        <Select // Updated component name
                                            options={skillOptions}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={true}
                                            components={animatedComponents}
                                            onChange={handleSkillsChange}
                                            allowSelectAll={true}
                                            styles={customStyles}
                                            value={skillsSelected}
                                            className="w-100"
                                        />
                                    </span>
                                    <br />
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
                                    >
                                        Search
                                    </button>
                                </div>

                            </div>


                        </m.div >
                    )
                }

                <div className="bg-gray-900 ml-8 min-w-[100vw] sm:min-w-[65vw] max-w-[100vw] block">
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



                            <section className="py-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
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
                                            <ul className="word-highlight text-gray-400 text-sm">
                                                {
                                                    project.description.map((point, itemIndex) => (
                                                        <li key={itemIndex}>{point}</li>
                                                    ))
                                                }
                                            </ul>

                                        </div>
                                    ))}
                                </div>
                            </section>
                        </main>


                    </m.div>
                </div>
            </div >
            <style jsx global>{`
   
            html, body {
                overflow-x: hidden;
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
        </>
    );
}