import React from 'react'
const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyles = isSelected?"text-white bg-black-1000":"text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
    <button 
        className={`${buttonStyles} rounded-full border-2 py-2 px-4 border-blue-500 hover:border-white`}
        onClick={()=>onClick(name)}
    >{name}</button>
    )
}

export default ProjectTag
