'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'

const AboutSection = () => {
  const [tab, setTab] = useState("Coding Contests");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  }
  const tabData = [
    {
      title: "Skills",
      id : "skills",
      content:(
        <ul className='text-blue-100'>
          <li><b className='text-blue-300'>Programming Languages : </b>C++, Python, JavaScript, Java.<br/></li>
          <li><b className='text-blue-300'>Frameworks & Libraries : </b>Django, Django REST Framework, RESTful Api, ReactJS, React Redux, NextJS.<br/></li>
          <li><b className='text-blue-300'>Others :</b> Vercel, Netlify, Postman, HTML, CSS, Bootstrap.<br/></li> 
        </ul>
      )
    },
    {
      Title: "Contest Participation",
      id: "Coding Contests",
      content:(
        <ol>
          <li> 
            <Link href='https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1050620602603679'>
            <b className='text-blue-300'>Meta Hacker Cup(2023): </b> 
            </Link>
            I placed among the top 20% in round 1 and participated in round 2.
          </li>
          <br/>
          <li> 
            <Link href='https://toph.co/contests/training/wlqd3kx/standings'>
            <b className='text-blue-300'>Google Code Jam Farewell Round A (April 2023): </b>
            </Link>
            I was able to Solved 3 problems out of 5.
          </li>
          <br/>
          <li> 
            <Link href='https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1050620602603679'>
            <b className='text-blue-300'>BRAC University Programming Contest 2022 (November 2022):
            </b>Our team standing was 7th out of 37 teams in the Senior category. 
            </Link>
          </li>
          <br/>
          <li> 
            <Link href='https://algo.codemarshal.org/contests/icpc-dhaka-22-preli/standingsWe%20got%203rd%20place%20in%20Brac%20University.%20(Team%20Name:%20BRACU_BugsAndErrors%20%5b%20Brac%20University%20%5d)%20https:/algo.codemarshal.org/contests/icpc-dhaka-22-preli/standings'>
            <b className='text-blue-300'>2022 ICPC Asia Dhaka Regional Online Preliminary Contest (February 2023): </b>
            </Link>
            We stood 3rd in BRAC University university.
          </li>
          <br/>
          <li> 
            <Link href='https://ieeextreme.org/ieeextreme-16-0-ranking/'>
            <b className='text-blue-300'>IEEEXtreme 16.0 (October 2022): </b>
            </Link>
            I ranked 9th in the country & 731st globally out of 6376 teams with solo Participation.
          </li>
          <br/>
        </ol>
      )
    },
    {
      Title: "Education",
      id: "Education",
      content:(
        <ol >
          <li>
            <b className='text-blue-300'>BSc. in Computer Science and Engineering from BRAC University</b>
              <li>
                <b>Duration : </b>4 Years (2019-2023).
              </li>
              <li>
                <b>CGPA : </b>3.19
              </li>
          </li>
          <br/>
          <li><b className='text-blue-300'>Completed HSC from Cambrian School & College</b></li>
          <li><b>Year : </b>2014-2016</li>
          <li><b>GPA: </b> 5</li>
          <br/>
          <li><b className='text-blue-300'>Completed SSC from Cambrian School & College</b></li>
          <li><b>Year : </b>2014-2016</li>
          <li><b>GPA: </b> 5</li>
          <br/>
        </ol>
      )
    },
    {
      Title: "Experience",
      id: "Experience",
      content:(
        <ol>
          <li><b className='text-blue-300'>B-JET(Bangladesh-Japan ICT Engineers’ Training Program)</b></li>
          <li><b className='text-white-300'>Role :</b> Trainee</li>
          <li><b className='text-white-300'>Duration : </b>5 months* (september 2023 - current)</li>
          <li><b className='text-white-300'>Description : </b>B-JET provides the Japanese language, business culture, and IT training to prepare for Japanese IT
          companies.</li>
        </ol>
      )
    }
  ]
  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src = "/images/ai.png" alt = "</>"height={500}width={500}
        className='flex rounded-xl'
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base lg:text-lg'>
          I am a Software Engineer, learning and contributing to projects as
          a Full Stack Web Developer. Currently, I am working with Django & Reactjs.
          I am more into problem-solving than developing projects. Till now 
          I have participated 200+ online and offline programming contests. I have
          solved around 1400+ problems in different online judges.I participated 
          several Intra/Inter University programming contests in BRAC University.
          I also participated in Google Code Jam, Meta Hacker Cup, IEEEXtreme etc.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={()=>handleTabChange("skills")} active = {tab==="skills"}>Skills</TabButton>
            <TabButton selectTab={()=>handleTabChange("Coding Contests")} active = {tab==="Coding Contests"}> Contests</TabButton>
            <TabButton selectTab={()=>handleTabChange("Education")} active = {tab==="Education"}>Education</TabButton>
            <TabButton selectTab={()=>handleTabChange("Experience")} active = {tab==="Experience"}>Experience</TabButton>
          </div>
          <div className='mt-8'>{tabData.find((t)=>t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
