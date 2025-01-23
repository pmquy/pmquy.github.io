"use client";

import { ArrowRight, CloseOutlined, CodeOutlined, Facebook, FeedOutlined, FormatQuote, GitHub, HeadsetMicOutlined, HomeOutlined, LinkedIn, LinkOutlined, ListOutlined, MailOutline, MenuOutlined, Person2Outlined, PhoneAndroidOutlined, PhotoLibraryOutlined, SentimentSatisfiedOutlined, X, YouTube } from '@mui/icons-material';
import Link from 'next/link';
import { HTMLProps, useEffect, useRef, useState } from 'react';

function Wrapper({ children, className }: HTMLProps<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current!.style.opacity = '0'
    ref.current!.style.transform = 'translateY(50px)'
    ref.current!.style.transition = 'all 1s'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ref.current!.style.opacity = '1'
          ref.current!.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1, rootMargin: '-50px' })

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [children])

  return <div className={className} ref={ref}>
    {children}
  </div>
}

function Home() {

  const data = ['Developer', 'Student', 'Freelancer',]
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [flag, setFlag] = useState(true)
  const ref = useRef(0)
  const eRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let t: NodeJS.Timeout
    if (flag) {
      t = setInterval(() => {
        ref.current++
        setText(data[index].substring(0, ref.current))
        if (ref.current === data[index].length) {
          clearInterval(t)
          eRef.current?.classList.add('animate-pulse')
          setTimeout(() => {
            setFlag(false)
            eRef.current?.classList.remove('animate-pulse')
          }, 2000)
        }
      }, 200)
    } else {
      t = setInterval(() => {
        ref.current--
        setText(data[index].substring(0, ref.current))
        if (ref.current === 0) {
          clearInterval(t)
          setTimeout(() => {
            setIndex((index + 1) % data.length)
            setFlag(true)
          }, 100)
        }
      }, 100)
    }
  }, [index, flag])


  return <div className='h-screen p-5 flex flex-col justify-center gap-5' style={{ backgroundImage: 'url(https://themewagon.github.io/iPortfolio/assets/img/hero-bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.7)' }}>
    <div className='font-bold text-5xl'>Pham Minh Quy</div>
    <div className='text-2xl'>I&apos;m <span style={{ textDecorationColor: "var(--primary)" }} className='underline underline-offset-8'>{text}</span><span ref={eRef} className='animate-pulse'>&#124;</span></div>
  </div>
}

function About() {
  return <div>
    <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
      <Wrapper><div className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>About</div></Wrapper>
      <Wrapper><div className='text-gray-800'>I&#39;m Pham Minh Quy, a full-stack developer with a passion for creating innovative and user-friendly applications. My goal is to build high-quality software that solves real-world problems and enhances user experiences.</div></Wrapper>
      <Wrapper>
        <div className='flex gap-10 max-lg:flex-col'>
          <img width={350} className='m-auto' src={"https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg"} alt=''></img>
          <div className='flex flex-col gap-5'>
            <div className='text-2xl font-bold'>Fullstack developer</div>
            <div className='text-gray-800'>A Full Stack Developer possesses comprehensive skills encompassing both front-end (user interface development) and back-end (logic and database development).</div>
            <div className='grid-cols-2 gap-5 grid max-sm:grid-cols-1'>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Birthday:</div>
                <div>30 Dec 2004</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Age:</div>
                <div>{(new Date(Date.now())).getFullYear() - 2004}</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Website:</div>
                <Link href='https://pmquy.github.io'>https://pmquy.github.io</Link>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Degree:</div>
                <div>Bachelor</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Phone:</div>
                <div>0971621458</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Email:</div>
                <div>pmquy204@gmail.com</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>City:</div>
                <div>Cau Giay, Ha Noi, Viet Nam</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Freelance:</div>
                <div>Available</div>
              </div>


            </div>
            <div className='text-gray-800'>I&#39;m a highly motivated and results-oriented individual with a strong work ethic and a collaborative spirit. I&#39;m always eager to learn new technologies and expand my skillset. I&#39;m currently available for freelance work. Feel free to contact me to discuss your project needs.</div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className='mt-32 justify-center gap-10 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 m-auto'>
          <div className='flex gap-5'>
            <SentimentSatisfiedOutlined sx={{ fontSize: "50px" }} style={{ color: 'var(--primary)' }} />
            <div>
              <div className='text-4xl font-bold'>200</div>
              <div className='text-gray-600 text-sm mt-3'><b>Happy Clients</b> consequuntur quae</div>
            </div>
          </div>
          <div className='flex gap-5'>
            <CodeOutlined sx={{ fontSize: "50px" }} style={{ color: 'var(--primary)' }} />
            <div>
              <div className='text-4xl font-bold'>12</div>
              <div className='text-gray-600 text-sm mt-3'><b>Projects</b> adipisci atque cum quia aut</div>
            </div>
          </div>
          <div className='flex gap-5'>
            <HeadsetMicOutlined sx={{ fontSize: "50px" }} style={{ color: 'var(--primary)' }} />
            <div>
              <div className='text-4xl font-bold'>100</div>
              <div className='text-gray-600 text-sm mt-3'><b>Hours Of Support</b> aut commodi quaerat</div>
            </div>
          </div>
          <div className='flex gap-5'>
            <SentimentSatisfiedOutlined sx={{ fontSize: "50px" }} style={{ color: 'var(--primary)' }} />
            <div>
              <div className='text-4xl font-bold'>10</div>
              <div className='text-gray-600 text-sm mt-3'><b>Hard Workers</b> rerum asperiores dolor</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
    <div className='bg-[#f4fafd] text-black px-5 py-16 flex flex-col gap-10'>
      <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Skills</Wrapper>
      <Wrapper className='text-gray-800'>My experience in developing and maintaining scalable web applications using React, Node.js, and Docker aligns perfectly with the requirements outlined in the job description.  My proficiency in these technologies, combined with my strong problem-solving skills, allows me to efficiently deliver high-quality software solutions.</Wrapper>
      <Wrapper className='grid grid-cols-2 max-md:grid-cols-1 text-sm gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Frontend</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Backend</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Database</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Docker</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Network</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Problem Solving</div>
            <div>70%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[70%]'></div>
          </div>
        </div>
      </Wrapper>
    </div>
  </div>
}

function Resume() {
  return <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Resume</Wrapper>
    <Wrapper className='text-gray-800'>Here is a brief overview of my professional experience and education background</Wrapper>

    <div className='flex gap-5 max-md:flex-col'>

      <div className='flex flex-col gap-5 basis-1/2'>
        <div className='text-2xl font-semibold'>Summary</div>
        <Wrapper className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Pham Minh Quy</div>
          <div className=' italic'>A passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. I am committed to delivering high-quality software solutions and continuously improving my skills.</div>
          <li>Cau Giay, Ha Noi, Viet Nam</li>
          <li>(+84) 971 621 458</li>
          <li>pmquy204@gmail.com</li>
        </Wrapper>

        <div className='text-2xl font-semibold'>Education</div>

        <Wrapper className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Bachelor Of Information Technology</div>
          <div className='ml-4 font-semibold text-sm'>2022 - Present</div>
          <div className=' italic'>University Of Engineering And Technology, VNU, Ha Noi</div>
          <div>Studying at UET has given me a strong foundation in IT. The curriculum covers both theory and practice, and the faculty is supportive. Through projects, I&#39;ve gained hands-on experience in software development and problem-solving, preparing me for the tech industry.</div>
          {/* <div className='py-4' />
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Bachelor Of Information Technology</div>
          <div className='ml-4 font-semibold text-sm'>2022 - Now</div>
          <div className=' italic'>University Of Engineering And Technology, VNU, Ha Noi</div>
          <div>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</div> */}
        </Wrapper>
      </div>

      <div className='flex flex-col gap-5 basis-1/2'>

        <div className='text-2xl font-semibold'>Professional Experience</div>
        <Wrapper className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Intern Fullstack Developer</div>
          <div className='ml-4 font-semibold text-sm'>2024 - Present</div>
          <div className=' italic'>Cau Giay, Ha Noi</div>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with the design team to implement user-friendly interfaces.</li>
          <li>Participated in code reviews and provided constructive feedback.</li>
          <li>Assisted in the integration of RESTful APIs.</li>
          <li>Debugged and resolved issues in existing applications.</li>
          {/* <div className='py-4' />
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Graphic design specialist</div>
          <div className='ml-4 font-semibold text-sm'>2017 - 2018</div>
          <div className=' italic'>Stepping Stone Advertising, New York, NY</div>
          <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
          <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
          <li>Recommended and consulted with clients on the most appropriate graphic design</li>
          <li>Created 4+ design presentations and proposals a month for clients and account managers</li> */}
        </Wrapper>
      </div>

    </div>

  </div>
}

function Portfolio() {

  const [option, setOption] = useState('all')

  const data = [
    {
      type: "web",
      name: "Facebook Clone",
      description: "The social network website",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831389/demon-slayer-1920x1080-17629_hnyiew.jpg",
      link: "https://facebook-clone-git-dev-pmquys-projects.vercel.app/",
      github: "https://github.com/pmquy/facebook",

    },
    {
      type: "web",
      name: "Tieminnhatho",
      description: "The shopping website",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831960/1935621_xuunuw.jpg",
      link: "https://www.tieminnhatho.com/",
      github: "https://github.com/pmquy/myshop",

    },
    {
      type: "app",
      name: "App 1",
      description: "App 1 description",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831383/shinobu-kocho-1920x1080-19754_m7za5j.jpg",
      link: "https://facebook-clone-git-dev-pmquys-projects.vercel.app/",
      github: "https://github.com/pmquy/facebook",

    },
    {
      type: "app",
      name: "App 1",
      description: "App 1 description",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831389/demon-slayer-1920x1080-17629_hnyiew.jpg",
      link: "https://facebook-clone-git-dev-pmquys-projects.vercel.app/",
      github: "https://github.com/pmquy/facebook",

    },
    {
      type: "app",
      name: "App 1",
      description: "App 1 description",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831389/demon-slayer-1920x1080-17629_hnyiew.jpg",
      link: "https://facebook-clone-git-dev-pmquys-projects.vercel.app/",
      github: "https://github.com/pmquy/facebook",

    }
  ]

  const [list, setList] = useState(data)

  useEffect(() => {
    if (option === 'all') {
      setList(data)
    } else {
      setList(data.filter(e => e.type === option))
    }
  }, [option])

  return <div className='bg-[#f4fafd] text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Portfolio</Wrapper>
    <Wrapper className='text-gray-800'>Check out some of my recent projects below. You can filter the projects by category using the buttons.</Wrapper>
    <div className='flex gap-5 justify-center mt-4'>
      {["all", "app", "web", "product", "book"].map(e => <div key={e} onClick={() => setOption(e)} className={`cursor-pointer uppercase text-sm select-none ${option === e ? 'text-[#149ddd]' : 'text-gray-800 hover:text-[#149ddd]'}`}>{e}</div>)}
    </div>
    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
      {list.map((e, i) => (
        <div className='relative overflow-hidden group' key={i}>
          <img className='group-hover:scale-110 group-hover:brightness-75 transition-all object-cover object-center' src={e.thumbnail}></img>
          <div className='group-hover:opacity-100 opacity-0 absolute top-2 left-2 p-1 px-2 rounded-md text-white text-sm bg-[#149ddd] transition-all'>{e.name}</div>
          <div className='group-hover:opacity-100 opacity-0 absolute bottom-2 left-1/2 -translate-x-1/2 text-white transition-all w-max '>{e.description}</div>

          <div className="flex gap-2 group-hover:opacity-100 opacity-0 absolute bottom-2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-max">
            <Link href={e.link} className='w-8 h-8 transition-all content-center rounded-full bg-white hover:bg-primary text-center'>
              <LinkOutlined />
            </Link>
            <Link href={e.github} className='w-8 h-8 transition-all content-center rounded-full bg-white hover:bg-primary text-center'>
              <GitHub />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
}

function Services() {

  const services = [
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "Web Design",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "System Design",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "Cloud Computing",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "DevOps",
      description: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "Backend",
      description: "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      icon: <MailOutline sx={{ fontSize: 30 }} />,
      name: "Frontend",
      description: "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Services</Wrapper>
    <Wrapper className='text-gray-800'>I offer a wide range of services to meet your needs. Whether you need a new website, a system design, cloud computing solutions, DevOps services, backend development, or frontend development, I have the skills and experience to deliver high-quality results. My goal is to provide innovative and efficient solutions that help you achieve your business objectives.</Wrapper>

    <Wrapper className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10'>
      {
        services.map((e, i) => (
          <div key={i} className='flex gap-5 group cursor-pointer'>
            <div className='w-16 h-16 shrink-0 border-2 border-primary group-hover:bg-white group-hover:text-primary text-white rounded-full bg-primary flex justify-center items-center'>{e.icon}</div>
            <div>
              <div className='font-bold group-hover:text-primary'>{e.name}</div>
              <div className='text-sm pt-2'>{e.description}</div>
            </div>
          </div>
        ))
      }
    </Wrapper>

  </div>
}

function Testimonials() {

  const data = [
    {
      name: "Saul Goodman",
      position: "Ceo & Founder",
      description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Sara Wilsson",
      position: "Designer",
      description: "Aut maiores voluptates amet et quis praesentium qui senda para. Eos ipsa est voluptates. Magnam dolores commodi suscipit.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-2.jpg"
    },
    {
      name: "Jena Karlis",
      position: "Store Owner",
      description: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-3.jpg"
    },
    {
      name: "Matt Brandon",
      position: "Freelancer",
      description: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-4.jpg"
    },
    {
      name: "John Larson",
      position: "Entrepreneur",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-5.jpg"
    },
    {
      name: "Pamela Adam",
      position: "Teacher",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-6.jpg"
    },
    {
      name: "Henry Smith",
      position: "Designer",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-7.jpg"
    },
  ]

  return <div className='bg-[#f4fafd] text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Testimonials</Wrapper>
    <Wrapper className='text-gray-800'>Here are some testimonials from my clients and colleagues:</Wrapper>
    <Wrapper className='flex gap-10 overflow-x-auto pb-10'>
      {data.map((e, i) => (
        <div key={i} className='flex flex-col shrink-0 gap-2 w-96 items-center'>
          <div className='text-gray-700 p-5 shadow-lg relative mb-6'>
            <FormatQuote sx={{ fontSize: 30 }} className='text-primary' style={{ transform: "rotateY(180deg)" }} />
            {e.description}
            <FormatQuote sx={{ fontSize: 30 }} className='text-primary' />
            <div className='border-t-[20px] border-x-[20px] border-t-white border-x-transparent absolute left-1/2 -translate-x-1/2 translate-y-full '></div>
          </div>
          <img className='w-24 h-24 rounded-full object-cover' src={e.image} alt=''></img>
          <div className='font-bold'>{e.name}</div>
          <div className='text-sm text-gray-500'>{e.position}</div>
        </div>
      ))}
    </Wrapper>
  </div>
}

function Contact() {
  return <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Contact</Wrapper>
    <Wrapper className='text-gray-800'></Wrapper>
    Feel free to reach out to me for any inquiries or collaborations. I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. You can contact me through the following methods:
    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>

      <Wrapper className='flex flex-col gap-10 p-10 shadow-lg'>
        <div className='text-2xl font-bold'>Contact Me</div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5 group'>
            <div className='w-8 h-8 shrink-0 border-2 border-primary group-hover:bg-white group-hover:text-primary text-white rounded-full bg-primary flex justify-center items-center'>
              <MailOutline fontSize='small' />
            </div>
            <div>
              <div className='font-bold group-hover:text-primary'>Email</div>
              <div>pmquy204@gmail.com</div>
            </div>
          </div>
          <div className='flex gap-5 group'>
            <div className='w-8 h-8 shrink-0 border-2 border-primary group-hover:bg-white group-hover:text-primary text-white rounded-full bg-primary flex justify-center items-center'>
              <PhoneAndroidOutlined fontSize='small' />
            </div>
            <div>
              <div className='font-bold group-hover:text-primary'>Call me</div>
              <div>0971621458</div>
            </div>
          </div>
          <div className='flex gap-5 group'>
            <div className='w-8 h-8 shrink-0 border-2 border-primary group-hover:bg-white group-hover:text-primary text-white rounded-full bg-primary flex justify-center items-center'>
              <HomeOutlined fontSize='small' />
            </div>
            <div>
              <div className='font-bold group-hover:text-primary'>Address</div>
              <div>Cau Giay, Ha Noi, Viet Nam</div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className='flex flex-col gap-10 p-10 shadow-lg'>
        <div className='text-2xl font-bold'>Message Me</div>
        <div className='flex flex-col gap-5'>
          <input className='border-2 border-primary p-2 rounded-md' placeholder='Name'></input>
          <input className='border-2 border-primary p-2 rounded-md' placeholder='Email'></input>
          <textarea className='border-2 border-primary p-2 rounded-md h-40' placeholder='Message'></textarea>
          <button className='bg-primary text-white p-2 rounded-md hover:bg-opacity-80'>Send Message</button>
        </div>
      </Wrapper>
    </div>
  </div>
}

function NavBar() {
  const [open, setOpen] = useState(false)
  return <div>
    <div className={`fixed top-2 right-2 max-xl:block hidden p-2 rounded-full bg-primary cursor-pointer z-10`}>
      {open ? <CloseOutlined onClick={() => setOpen(false)} /> : <MenuOutlined onClick={() => setOpen(true)} />}
    </div>
    <div className={`max-xl:fixed sticky h-screen ${open ? "max-xl:translate-x-0" : "max-xl:-translate-x-full"} max-xl:transition-all z-10 bg-background top-0`}>
      <div className={`p-5 max-w-[300px] flex flex-col gap-8 overflow-y-auto h-screen`}>
        <img src="https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg" className="h-28 w-28 rounded-full border-8 border-gray-800 self-center"></img>
        <div className="text-center font-bold text-2xl">Pham Minh Quy</div>
        <div className="flex gap-3 justify-center">
          <div className='icon'>
            <X fontSize="small" />
          </div>
          <Link href={'https://www.facebook.com/phamminhquy.204/'} className='icon'>
            <Facebook fontSize="small" />
          </Link>
          <Link href={"https://github.com/pmquy"} className='icon'>
            <GitHub fontSize="small" />
          </Link>
          <div className='icon'>
            <YouTube fontSize="small" />
          </div>
          <div className='icon'>
            <LinkedIn fontSize="small" />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <HomeOutlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#home'}>Home</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Person2Outlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#about'}>About</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <FeedOutlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#resume'}>Resume</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <PhotoLibraryOutlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#portfolio'}>Portfolio</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <ListOutlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#services'}>Services</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <SentimentSatisfiedOutlined style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#testimonials'}>Testimonials</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <MailOutline style={{ color: 'var(--primary)' }} />
          <Link onClick={() => setOpen(false)} href={'#contact'}>Contact</Link>
        </div>
      </div>
    </div>
  </div>
}

export default function Page() {

  return <div className="flex">

    <NavBar />

    <div className="w-full overflow-hidden">
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='resume'>
        <Resume />
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  </div>
}