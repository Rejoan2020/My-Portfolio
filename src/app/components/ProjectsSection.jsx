'use client';

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: 'Electronic Gadget Shop',
        description: 'An ecommerse site having necessary features.',
        url: "/images/projects/Homepage.jpg",
        tag: ['All','Web' ],
        gitUrl : "https://github.com/Rejoan2020/Electronic-gadget-shop",
        liveUrl : "/"
    },
    {
        id: 2,
        title: 'Text-Editor',
        description: 'A basic desktop text-editor having necessary features.',
        url: "/images/projects/texteditor.jpg",
        tag: ['All','Others'],
        gitUrl : "https://github.com/Rejoan2020/Text_editor_with_tkinter",
        liveUrl : "/"
    },
    {
        id: 3,
        title: 'TodoList',
        description: 'Todo list management',
        url: "/images/projects/todo.PNG",
        tag: ['All','Web'],
        gitUrl : "https://github.com/Rejoan2020/TodoList-with-RESTapi?tab=readme-ov-file",
        liveUrl : "/"
    },
    
]

const ProjectsSection = () => {
    const [tag,setTag] = useState("All");
    const handleTagChange = (newTag)=>{
        setTag(newTag)
    }
    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    );

    return (
        <section id = 'projects' className='text-white'>
            <h2 className='text-white text-center font-bold mt-4 text-4xl mb-4'>My projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'> 
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==='All'}/>
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==='Web'}/>
                <ProjectTag onClick={handleTagChange} name="Others" isSelected={tag==='Others'}/>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=>(
                <ProjectCard
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.url}
                    gitUrl = {project.gitUrl}
                    previewUrl={project.liveUrl}
                />)
            )}</div>
        </section>
    )
}

export default ProjectsSection
