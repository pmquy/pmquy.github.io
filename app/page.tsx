"use client";

import { ArrowRight, CloseOutlined, CodeOutlined, Facebook, FeedOutlined, FormatQuote, GitHub, HeadsetMicOutlined, HomeOutlined, Instagram, LinkedIn, LinkOutlined, ListOutlined, MailOutline, MenuOutlined, Person2Outlined, PhoneAndroidOutlined, PhotoLibraryOutlined, SentimentSatisfiedOutlined, X, YouTube } from '@mui/icons-material';
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
    }, { threshold: 0.5, rootMargin: '-200px' })

    if(ref.current) {
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

  const data = ['Developer', 'Freelancer', 'Photographer']
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
    <div className='text-2xl'>I'm <span style={{ textDecorationColor: "var(--primary)" }} className='underline underline-offset-8'>{text}</span><span ref={eRef} className='animate-pulse'>|</span></div>
  </div>
}

function About() {
  return <div>
    <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
      <Wrapper><div className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>About</div></Wrapper>
      <Wrapper><div className='text-gray-800'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div></Wrapper>
      <Wrapper>
        <div className='flex gap-10 max-lg:flex-col'>
          <img width={350} className='m-auto' src={"https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg"} alt=''></img>
          <div className='flex flex-col gap-5'>
            <div className='text-2xl font-bold'>Fullstack developer</div>
            <div className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
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
                <div>http://pmquy.github.io.com</div>
              </div>
              <div className='flex gap-2'>
                <ArrowRight style={{ color: 'var(--primary)' }} />
                <div className='font-semibold'>Degree:</div>
                <div>Master</div>
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
            <div className='text-gray-800'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</div>
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
      <Wrapper className='text-gray-800'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</Wrapper>
      <Wrapper className='grid grid-cols-2 max-md:grid-cols-1 text-sm gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Frontend</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Backend</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Database</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>Docker</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>System Design</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>AWS</div>
            <div>80%</div>
          </div>
          <div className="relative h-2 bg-gray-400">
            <div className='h-full absolute bg-[#149ddd] w-[80%]'></div>
          </div>
        </div>
      </Wrapper>
    </div>
  </div>
}

function Resume() {
  return <div className='bg-white text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Resume</Wrapper>
    <Wrapper className='text-gray-800'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</Wrapper>

    <div className='flex gap-5 max-md:flex-col'>

      <div className='flex flex-col gap-5 basis-1/2'>
        <Wrapper className='text-2xl font-semibold'>Summary</Wrapper>
        <div className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Brandon Johnson</div>
          <div className=' italic'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</div>
          <li>Portland par 127,Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </div>

        <Wrapper className='text-2xl font-semibold'>Education</Wrapper>

        <div className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Master of Fine Arts & Graphic Design</div>
          <div className='ml-4 font-semibold text-sm'>2015 - 2016</div>
          <div className=' italic'>Rochester Institute of Technology, Rochester, NY</div>
          <div>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</div>
          <div className='py-4' />
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Bachelor of Fine Arts & Graphic Design</div>
          <div className='ml-4 font-semibold text-sm'>2010 - 2014</div>
          <div className=' italic'>Rochester Institute of Technology, Rochester, NY</div>
          <div>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</div>
        </div>
      </div>

      <div className='flex flex-col gap-5 basis-1/2'>

        <Wrapper className='text-2xl font-semibold'>Professional Experience</Wrapper>
        <div className='flex flex-col gap-3 pl-6 border-l-2 border-l-[#149ddd] relative'>
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Senior graphic design specialist</div>
          <div className='ml-4 font-semibold text-sm'>2019 - Present</div>
          <div className=' italic'>Experion, New York, NY</div>
          <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
          <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
          <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
          <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          <div className='py-4' />
          <div className="text-gray-600 text-xl"><div className='absolute rounded-full w-4 h-4 border-2 bg-white border-[#149ddd] left-0 -translate-x-1/2'></div>Graphic design specialist</div>
          <div className='ml-4 font-semibold text-sm'>2017 - 2018</div>
          <div className=' italic'>Stepping Stone Advertising, New York, NY</div>
          <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
          <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
          <li>Recommended and consulted with clients on the most appropriate graphic design</li>
          <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
        </div>
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
    <Wrapper className='text-gray-800'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</Wrapper>
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
    <Wrapper className='text-gray-800'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</Wrapper>

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
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Sara Wilsson",
      position: "Designer",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Jena Karlis",
      position: "Store Owner",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Matt Brandon",
      position: "Freelancer",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "John Larson",
      position: "Entrepreneur",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Pamela Adam",
      position: "Teacher",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    },
    {
      name: "Henry Smith",
      position: "Designer",
      description: "Magnam dol ores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
      image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
    }
  ]

  return <div className='bg-[#f4fafd] text-black px-5 py-16 flex flex-col gap-10'>
    <Wrapper className='text-3xl font-bold pb-2 border-b-4 w-max border-b-primary'>Testimonials</Wrapper>
    <Wrapper className='text-gray-800'>Magnam dol ores commodi suscipit. Necessitatibus fkdjs.</Wrapper>
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
    <Wrapper className='text-gray-800'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</Wrapper>
    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>

      <div className='flex flex-col gap-10 p-10 shadow-lg'>
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
      </div>

      <div className='flex flex-col gap-10 p-10 shadow-lg'>
        <div className='text-2xl font-bold'>Message Me</div>
        <div className='flex flex-col gap-5'>
          <input className='border-2 border-primary p-2 rounded-md' placeholder='Name'></input>
          <input className='border-2 border-primary p-2 rounded-md' placeholder='Email'></input>
          <textarea className='border-2 border-primary p-2 rounded-md h-40' placeholder='Message'></textarea>
          <button className='bg-primary text-white p-2 rounded-md hover:bg-opacity-80'>Send Message</button>
        </div>
      </div>
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
          <div className='icon'>
            <Facebook fontSize="small" />
          </div>
          <div className='icon'>
            <Instagram fontSize="small" />
          </div>
          <div className='icon'>
            <YouTube fontSize="small" />
          </div>
          <div className='icon'>
            <LinkedIn fontSize="small" />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <HomeOutlined style={{ color: 'var(--primary)' }} />
          <Link href={'#home'}>Home</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Person2Outlined style={{ color: 'var(--primary)' }} />
          <Link href={'#about'}>About</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <FeedOutlined style={{ color: 'var(--primary)' }} />
          <Link href={'#resume'}>Resume</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <PhotoLibraryOutlined style={{ color: 'var(--primary)' }} />
          <Link href={'#portfolio'}>Portfolio</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <ListOutlined style={{ color: 'var(--primary)' }} />
          <Link href={'#services'}>Services</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <SentimentSatisfiedOutlined style={{ color: 'var(--primary)' }} />
          <Link href={'#testimonials'}>Testimonials</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <MailOutline style={{ color: 'var(--primary)' }} />
          <Link href={'#contact'}>Contact</Link>
        </div>
      </div>
    </div>
  </div>
}

export default function Page() {

  return <div className="flex">

    <NavBar/>

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