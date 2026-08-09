'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'

const AboutSection = () => {
  const [tab, setTab] = useState("Coding Contests");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }
  const tabData = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className='text-blue-100'>
          <li><b className='text-blue-300'>Programming Languages : </b>JavaScript, C++, Python.<br /></li>
          <li><b className='text-blue-300'>Frameworks & Libraries : </b>ReactJs, NextJs, Django.<br /></li>
          <li><b className='text-blue-300'>Others :</b> MongoDB, HTML, CSS.<br /></li>
        </ul>
      )
    },
    {
      Title: "Contest Participation",
      id: "Coding Contests",
      content: (
        <ol>
          <li>
            <Link href='https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1050620602603679'>
              <b className='text-blue-300 hover:underline'>Meta Hacker Cup(2023): </b>
            </Link>
            Ranked in top 20% in round 1 and participated in round 2.
          </li>
          <br />
          <li>
            <Link href='https://toph.co/contests/training/wlqd3kx/standings'>
              <b className='text-blue-300 hover:underline'>Google Code Jam Farewell Round A (April 2023): </b>
            </Link>
            Solved 3 problems out of 5.
          </li>
          <br />
          <li>
            <Link href='https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1050620602603679'>
              <b className='text-blue-300 hover:underline'>BRAC University Programming Contest 2022 (November 2022):
              </b>Team standing was 7th out of 37 teams in the Senior category.
            </Link>
          </li>
          <br />
          <li>
            <Link href='https://algo.codemarshal.org/contests/icpc-dhaka-22-preli/standingsWe%20got%203rd%20place%20in%20Brac%20University.%20(Team%20Name:%20BRACU_BugsAndErrors%20%5b%20Brac%20University%20%5d)%20https:/algo.codemarshal.org/contests/icpc-dhaka-22-preli/standings'>
              <b className='text-blue-300 hover:underline'>2022 ICPC Asia Dhaka Regional Online Preliminary Contest (February 2023): </b>
            </Link>
            Ranked 3rd in BRAC University.
          </li>
          <br />
          <li>
            <Link href='https://ieeextreme.org/ieeextreme-16-0-ranking/'>
              <b className='text-blue-300 hover:underline'>IEEEXtreme 16.0 (October 2022): </b>
            </Link>
            Ranked 9th in Bangladesh & 731st globally out of 6376 teams with solo Participation.
          </li>
          <br />
        </ol>
      )
    },
    {
      Title: "Education",
      id: "Education",
      content: (
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
          <br />
          <li><b className='text-blue-300'>Completed HSC from Cambrian School & College</b></li>
          <li><b>Year : </b>2014-2016</li>
          <li><b>GPA: </b> 5</li>
          <br />
          <li><b className='text-blue-300'>Completed SSC from Cambrian School & College</b></li>
          <li><b>Year : </b>2014-2016</li>
          <li><b>GPA: </b> 5</li>
          <br />
        </ol>
      )
    },
    {
      Title: "Experience",
      id: "Experience",
      content: (
        <>
          <ol>
            <li><Link href={'https://www.linkedin.com/company/citrusai/'} className='hover:underline text-blue-300'>CitrusAI</Link></li>
            <li><b className='text-white-300'>Role :</b> AI Data Trainer (Software Engineer)</li>
            <li><b className='text-white-300'>Duration : </b>1 Year (March 2024 - March 2025)</li>
            <li><b className='text-white-300'>Description : </b>Contributed to LLM training by providing human-quality feedback and evaluations, with a particular focus on coding and software development tasks.</li>
            <li className='text-transparent'>blank</li>
            <li><Link href={'https://bjet.org/'} className='hover:underline text-blue-300 cursor-pointer'>B-JET(Bangladesh-Japan ICT Engineers’ Training Program)</Link></li>
            <li><b className='text-white-300'>Role :</b> Trainee</li>
            <li><b className='text-white-300'>Duration : </b>7 Months (September 2023 - March 2024)</li>
            <li><b className='text-white-300'>Description : </b>Learned Japanese language, business culture, and IT training</li>
          </ol>
        </>
      )
    }
  ]
  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/projects/programminglanguages.png" alt="</>" height={500} width={500}
          className='flex rounded-xl lg:h-400 lg:w-125'
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <div className='text-base lg:text-lg'>
            <p>I’m a Software Engineer focused on frontend and modern web development, particularly with React.js and Next.js. Over the past year, I’ve been building practical projects and strengthening my skills across the modern web development ecosystem.</p>

            <p> My foundation comes from competitive programming. During my time at BRAC University, I participated in 200+ online and offline programming contests and solved 1,400+ problems across various online judges, including competitions such as Google Code Jam, Meta Hacker Cup, and IEEEXtreme.</p>

            <p>I also worked with CitrusAI on Outlier freelance projects, contributing to AI training from March 2024 to April 2025. Between 2023 and 2024, I was a trainee at B-JET, where I learned the Japanese language and gained an understanding of Japanese business culture.</p>

            <p>Today, I’m focused on combining my problem-solving background with modern development skills to build clean, practical, and reliable software.</p>
          </div>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("Coding Contests")} active={tab === "Coding Contests"}> Contests</TabButton>
            <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}>Experience</TabButton>
          </div>
          <div className='mt-8'>{tabData.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
