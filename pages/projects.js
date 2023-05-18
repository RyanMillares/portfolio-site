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
    const skillOptions = [
        { value: 'java', label: 'Java' },
        { value: 'c++', label: 'C++' },
        { value: 'python', label: 'Python' },
        { value: 'javascript', label: 'JavaScript' },

        { value: 'c#', label: 'C#' }
    ]
    const settingOptions = [
        { value: 'professional', label: 'Professional'},
        { value: 'academic', label: 'Academic'},
        { value: 'personal', label: 'Personal'}
    ]
    const [skillsSelected, setSkillsSelected] = useState(null);
    const [settings, setSettings] = useState([])
    const [projectList, setProjectList] = useState([])
    const handleSkillsChange = (selected) => {
        setSkillsSelected(selected);
    };
    const handleSettingsChange = (selected) => {
        setSettings(selected);
    };
   

    const SettingsOption = (props) => {
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
    const SkillsOption = (props) => {
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
                    className="bg-gray-900 min-w-[25vw] max-w-[25vw] block"
                >
                    <div className="ml-4" style={{ position: "fixed" }}>
                        <div className="bg-gray-800 rounded-lg min-w-[25vw] max-w-[25vw] p-4 mr-5">
                            <h1 className = "text-white">Filter by Setting</h1>
                            <br/>
                            <span
                                className="d-inline-block grow"
                                data-toggle="popover"
                                data-trigger="focus"
                                data-content="Select setting"
                            >
                                <Select // Updated component name
                                    options={settingOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={true}
                                    components={{
                                        SettingsOption
                                    }}
                                    onChange={handleSettingsChange}
                                    allowSelectAll={true}
                                    value={settings}
                                    className = "w-100"
                                />
                            </span>
                            <br/>
                            <h1 className = "text-white">Filter by Skills</h1>

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
                                    components={{
                                        SkillsOption
                                    }}
                                    onChange={handleSkillsChange}
                                    allowSelectAll={true}
                                    value={skillsSelected}
                                    className = "w-100"
                                />
                            </span>
                            <br/>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
                            >
                                Search
                            </button>
                        </div>

                    </div>


                </m.div >
                <div className="bg-gray-900 ml-8 min-w-[65vw] max-w-[65vw] block">
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
                                            <p className="word-highlight text-gray-400 text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </main>

                        
                    </m.div>
                </div>
            </div >
        </>
    );
}