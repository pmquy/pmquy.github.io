"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  CloseOutlined,
  CloudOutlined,
  Code,
  Download,
  Facebook,
  FeedOutlined,
  GitHub,
  HomeOutlined,
  LinkedIn,
  ListOutlined,
  MailOutline,
  MenuOutlined,
  OpenInNew,
  Palette,
  Person2Outlined,
  PhoneAndroidOutlined,
  PhotoLibraryOutlined,
  SchoolOutlined,
  Smartphone,
  Storage,
  WorkOutline,
  YouTube
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLProps, useEffect, useMemo, useRef, useState } from 'react';

function Wrapper({ children, className }: HTMLProps<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    element.style.opacity = '0'
    element.style.transform = 'translateY(50px)'
    element.style.transition = 'all 1s'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && element) {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1, rootMargin: '-50px' })

    observer.observe(element)
    
    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [])

  return <div className={className} ref={ref}>
    {children}
  </div>
}

// Hero Section
function Home() {
  const data = useMemo(() => ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'], [])
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
      }, 100)
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
      }, 50)
    }
    return () => clearInterval(t)
  }, [index, flag, data])

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden bg-background'>
      {/* Animated pulsing background - increased visibility */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-60'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '4s' }}></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        <div className='space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000'>
          <div className='space-y-3'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
              Pham Minh Quy
            </h1>
            <div className='h-1 w-20 bg-primary rounded-full'></div>
          </div>

          <div className='text-2xl md:text-3xl font-light text-muted-foreground'>
            <span className='text-primary font-medium'>
              {text}
              <span ref={eRef} className='text-primary'>|</span>
            </span>
          </div>

          <p className='text-muted-foreground text-base max-w-2xl leading-relaxed'>
            Computer Science Student | Full Stack Developer
          </p>

          <div className='flex flex-wrap gap-3 pt-6'>
            <Button asChild size="default" className='shadow-sm hover:shadow-md transition-shadow'>
              <Link href={'#contact'}>
                <MailOutline className='mr-2' fontSize='small' />
                Contact Me
              </Link>
            </Button>
            <Button asChild size="default" variant="outline" className='shadow-sm hover:shadow-md transition-shadow'>
              <a href='/resume.pdf' download>
                <Download className='mr-2' fontSize='small' />
                Download CV
              </a>
            </Button>
          </div>

          <div className='flex gap-2 pt-2'>
            {[
              { href: 'https://github.com/pmquy', icon: <GitHub fontSize='small' /> },
              { href: 'https://www.facebook.com/lokikurri/', icon: <Facebook fontSize='small' /> },
              { href: '#', icon: <LinkedIn fontSize='small' /> },
              { href: '#', icon: <YouTube fontSize='small' /> },
            ].map((social, i) => (
              <Button key={i} asChild variant="ghost" size="icon" className='hover:bg-primary/10 transition-colors'>
                <Link href={social.href}>
                  {social.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// About Section
function About() {
  const skills = [
    'TypeScript & JavaScript',
    'Go & Gin',
    'React & Next.js/Vite & Tailwind CSS',
    'Node.js & Express & NestJS',
    'PostgreSQL & MongoDB',
    'Docker & Kubernetes',
    'Git & GitHub',
    'REST & GraphQL APIs',
    'AWS & Cloud Services',
  ]

  return (
    <div className='bg-background relative overflow-hidden'>
      {/* Animated background - increased visibility */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-50'>
        <div className='absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '5s' }}></div>
        <div className='absolute bottom-40 left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
      </div>
      
      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        {/* Section Header */}
        <Wrapper className='mb-12'>
          <h2 className='text-3xl font-bold mb-2'>About</h2>
          <p className='text-muted-foreground'>
            Full-stack developer with expertise in building scalable web applications
          </p>
        </Wrapper>

        {/* Main Content */}
        <Wrapper>
          <div className='grid lg:grid-cols-3 gap-8 items-start mb-12'>
            {/* Profile Image */}
            <div className='relative w-full h-auto aspect-square group'>
              <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <Image 
                src="https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg" 
                alt="Profile" 
                fill
                className='object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300'
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>

            {/* Info - Clean Layout */}
            <div className='lg:col-span-2 space-y-6'>
              <div>
                <h3 className='text-xl font-bold mb-3'>Full Stack Developer</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Comprehensive skills in both front-end and back-end development, creating seamless end-to-end solutions with modern technologies.
                </p>
              </div>

              <div className='grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm'>
                {[
                  { label: 'Birthday', value: '30 Dec 2004' },
                  { label: 'Age', value: `${new Date().getFullYear() - 2004}` },
                  { label: 'Phone', value: '0971621458' },
                  { label: 'Email', value: 'pmquy204@gmail.com' },
                  { label: 'Degree', value: 'Bachelor of IT' },
                  { label: 'Location', value: 'Ha Noi, Vietnam' },
                ].map((item, i) => (
                  <div key={i} className='flex items-baseline gap-2'>
                    <span className='text-muted-foreground font-medium min-w-20'>{item.label}:</span>
                    <span className='text-foreground'>{item.value}</span>
                  </div>
                ))}
                <div className='flex items-baseline gap-2'>
                  <span className='text-muted-foreground font-medium min-w-20'>Freelance:</span>
                  <Badge variant="secondary" className='text-xs px-2 py-0.5 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800'>Available</Badge>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>

        {/* Skills - Minimalist */}
        <Wrapper>
          <div className='border-t pt-8'>
            <h3 className='text-lg font-bold mb-4'>Technical Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill, i) => (
                <Badge key={i} variant="outline" className='px-3 py-1 text-sm font-normal hover:bg-primary/5 transition-colors'>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

// Resume Section
function Resume() {
  return (
    <div className='bg-background relative overflow-hidden'>
      {/* Subtle background pattern with animation */}
      <div className='absolute inset-0 opacity-[0.03]' style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Animated blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-40'>
        <div className='absolute top-40 left-40 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className='absolute bottom-20 right-40 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        <Wrapper className='mb-12'>
          <h2 className='text-3xl font-bold mb-2'>Resume</h2>
          <p className='text-muted-foreground'>
            My professional journey and academic background
          </p>
        </Wrapper>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            <Wrapper>
              <div>
                <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
                  <SchoolOutlined className='text-primary' fontSize='small' />
                  Education
                </h3>
                <div className='border-l-2 border-primary pl-6'>
                  <h4 className='font-bold mb-1'>Bachelor of Information Technology</h4>
                  <p className='text-sm text-primary mb-2'>2022 - Present</p>
                  <p className='text-sm text-muted-foreground mb-3'>
                    University Of Engineering And Technology, VNU, Ha Noi
                  </p>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Strong foundation in software development, algorithms, and system design. 
                    Gained hands-on experience through various projects.
                  </p>
                </div>
              </div>
            </Wrapper>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            <Wrapper>
              <div>
                <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
                  <WorkOutline className='text-primary' fontSize='small' />
                  Experience
                </h3>
                <div className='border-l-2 border-primary pl-6'>
                  <h4 className='font-bold mb-1'>Intern Full Stack Developer</h4>
                  <p className='text-sm text-primary mb-2'>2024 - Present</p>
                  <p className='text-sm text-muted-foreground mb-3'>Cau Giay, Ha Noi</p>
                  <ul className='space-y-1.5 text-sm text-muted-foreground'>
                    <li>• Developed web applications using React and Node.js</li>
                    <li>• Collaborated with design team for user-friendly interfaces</li>
                    <li>• Participated in code reviews and provided feedback</li>
                    <li>• Integrated RESTful APIs</li>
                    <li>• Debugged and resolved application issues</li>
                  </ul>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

// Portfolio Section  
function Portfolio() {
  const [option, setOption] = useState('all')

  const data = [
    {
      type: "web",
      name: "Facebook Clone",
      description: "Social network website",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831389/demon-slayer-1920x1080-17629_hnyiew.jpg",
      link: "https://facebook-clone-git-dev-pmquys-projects.vercel.app/",
      github: "https://github.com/pmquy/facebook",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      type: "web",
      name: "Tieminnhatho",
      description: "E-commerce platform",
      thumbnail: "https://res.cloudinary.com/dsvduvzei/image/upload/v1731831960/1935621_xuunuw.jpg",
      link: "https://www.tieminnhatho.com/",
      github: "https://github.com/pmquy/myshop",
      tags: ["Next.js", "Tailwind", "PostgreSQL"]
    },
  ]

  const filteredList = option === 'all' ? data : data.filter(e => e.type === option)

  return (
    <div className='bg-background relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-50'>
        <div className='absolute top-10 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '7s' }}></div>
        <div className='absolute bottom-10 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
      </div>

      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        <Wrapper className='mb-12'>
          <h2 className='text-3xl font-bold mb-2'>Portfolio</h2>
          <p className='text-muted-foreground'>Selected projects and works</p>
        </Wrapper>

        {/* Filters */}
        <Wrapper className='flex gap-2 mb-8 flex-wrap'>
          {["all", "web", "app", "product"].map(filter => (
            <Button
              key={filter}
              variant={option === filter ? "default" : "ghost"}
              onClick={() => setOption(filter)}
              className='capitalize text-sm transition-all'
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </Wrapper>

        {/* Projects Grid */}
        <Wrapper className='grid md:grid-cols-2 gap-6'>
          {filteredList.map((project, i) => (
            <div key={i} className='group border rounded-lg overflow-hidden hover:shadow-lg transition-all bg-card hover:-translate-y-1 duration-300'>
              <div className='relative overflow-hidden h-48 bg-muted'>
                <Image 
                  src={project.thumbnail} 
                  alt={project.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='p-5 space-y-3'>
                <div>
                  <h3 className='font-bold text-lg mb-1'>{project.name}</h3>
                  <p className='text-sm text-muted-foreground'>{project.description}</p>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant="outline" className='text-xs px-2 py-0.5'>{tag}</Badge>
                  ))}
                </div>
                <div className='flex gap-2 pt-1'>
                  <Button asChild size="sm" variant="default" className='flex-1'>
                    <Link href={project.link}>
                      <OpenInNew fontSize='small' className='mr-1' />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className='flex-1'>
                    <Link href={project.github}>
                      <GitHub fontSize='small' className='mr-1' />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Wrapper>
      </div>
    </div>
  )
}

// Services Section
function Services() {
  const services = [
    {
      icon: <Palette />,
      name: "Web Design",
      description: "Creating beautiful, responsive, and user-friendly web interfaces"
    },
    {
      icon: <Code />,
      name: "Frontend Development",
      description: "Building interactive UIs with React, Next.js, and modern frameworks"
    },
    {
      icon: <Storage />,
      name: "Backend Development",
      description: "Developing scalable APIs and server-side applications"
    },
    {
      icon: <CloudOutlined />,
      name: "Cloud Computing",
      description: "Deploying and managing applications on cloud platforms"
    },
    {
      icon: <Code />,
      name: "DevOps",
      description: "CI/CD pipelines, containerization with Docker"
    },
    {
      icon: <Smartphone />,
      name: "Mobile Responsive",
      description: "Ensuring perfect display across all devices"
    },
  ]

  return (
    <div className='bg-background relative overflow-hidden'>
      {/* Animated background blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-45'>
        <div className='absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        <div className='absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>

      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        <Wrapper className='mb-12'>
          <h2 className='text-3xl font-bold mb-2'>Services</h2>
          <p className='text-muted-foreground'>What I can do for you</p>
        </Wrapper>

        <Wrapper className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, i) => (
            <div key={i} className='group border rounded-lg p-5 hover:shadow-md transition-all bg-card hover:-translate-y-1 duration-300'>
              <div className='w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
                {service.icon}
              </div>
              <h3 className='font-bold mb-2'>{service.name}</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>{service.description}</p>
            </div>
          ))}
        </Wrapper>
      </div>
    </div>
  )
}

// Contact Section
function Contact() {
  return (
    <div className='bg-background relative overflow-hidden'>
      {/* Subtle animated background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-45'>
        <div className='absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '7s' }}></div>
        <div className='absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '9s', animationDelay: '2.5s' }}></div>
      </div>

      <div className='max-w-5xl mx-auto px-6 py-20 relative z-10'>
        <Wrapper className='mb-12'>
          <h2 className='text-3xl font-bold mb-2'>Contact</h2>
          <p className='text-muted-foreground'>Let&apos;s work together</p>
        </Wrapper>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Contact Info */}
          <Wrapper>
            <div className='space-y-4'>
              {[
                { icon: <MailOutline />, label: 'Email', value: 'pmquy204@gmail.com' },
                { icon: <PhoneAndroidOutlined />, label: 'Phone', value: '0971621458' },
                { icon: <HomeOutlined />, label: 'Address', value: 'Cau Giay, Ha Noi, Vietnam' },
              ].map((item, i) => (
                <div key={i} className='flex gap-3 p-4 border rounded-lg hover:shadow-md transition-all bg-card hover:-translate-y-0.5 duration-300'>
                  <div className='w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-medium text-sm mb-0.5'>{item.label}</p>
                    <p className='text-sm text-muted-foreground'>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>

          {/* Contact Form */}
          <Wrapper>
            <div className='border rounded-lg p-6 bg-card shadow-sm'>
              <h3 className='font-bold text-lg mb-4'>Send Message</h3>
              <form className='space-y-4'>
                <input 
                  className='w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all' 
                  placeholder='Your Name'
                />
                <input 
                  className='w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all' 
                  placeholder='Your Email'
                  type='email'
                />
                <textarea 
                  className='w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none transition-all' 
                  placeholder='Your Message'
                  rows={5}
                />
                <Button className='w-full hover:shadow-md transition-shadow'>
                  <MailOutline className='mr-2' fontSize='small' />
                  Send Message
                </Button>
              </form>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  )
}

// Navigation Bar
function NavBar() {
  const [open, setOpen] = useState(false)
  
  const navItems = [
    { href: '#home', icon: <HomeOutlined fontSize='small' />, label: 'Home' },
    { href: '#about', icon: <Person2Outlined fontSize='small' />, label: 'About' },
    { href: '#resume', icon: <FeedOutlined fontSize='small' />, label: 'Resume' },
    { href: '#portfolio', icon: <PhotoLibraryOutlined fontSize='small' />, label: 'Portfolio' },
    { href: '#services', icon: <ListOutlined fontSize='small' />, label: 'Services' },
    { href: '#contact', icon: <MailOutline fontSize='small' />, label: 'Contact' },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <div className='fixed top-4 right-4 xl:hidden z-50'>
        <Button
          size="icon"
          variant="default"
          onClick={() => setOpen(!open)}
          className='shadow-md'
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </Button>
      </div>

      {/* Backdrop for mobile */}
      {open && (
        <div 
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 xl:hidden'
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed h-screen ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"} transition-transform duration-300 z-40 bg-card border-r w-[260px]`}>
        <div className='p-6 flex flex-col gap-6 h-full overflow-y-auto'>
          {/* Profile */}
          <div className='text-center space-y-3'>
            <div className='relative h-20 w-20 mx-auto'>
              <Image 
                src="https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg" 
                alt="Profile"
                fill
                className="rounded-full border-2 border-primary/20 object-cover"
                sizes="80px"
                priority
              />
            </div>
            <h3 className="text-base font-bold">Pham Minh Quy</h3>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 justify-center">
            {[
              { href: 'https://github.com/pmquy', icon: <GitHub fontSize="small" /> },
              { href: 'https://www.facebook.com/lokikurri/', icon: <Facebook fontSize="small" /> },
              { href: '#', icon: <LinkedIn fontSize="small" /> },
              { href: '#', icon: <YouTube fontSize="small" /> },
            ].map((social, i) => (
              <Button key={i} asChild variant="ghost" size="icon" className='h-9 w-9'>
                <Link href={social.href}>
                  {social.icon}
                </Link>
              </Button>
            ))}
          </div>

          <Separator />

          {/* Navigation */}
          <nav className='flex-1 space-y-1'>
            {navItems.map((item, i) => (
              <Button
                key={i}
                asChild
                variant="ghost"
                className='w-full justify-start text-sm'
                onClick={() => setOpen(false)}
              >
                <Link href={item.href}>
                  {item.icon}
                  <span className='ml-2'>{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

// Main Page Component
export default function Page() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1 xl:ml-[260px]">
        <section id='home'><Home /></section>
        <section id='about'><About /></section>
        <section id='resume'><Resume /></section>
        <section id='portfolio'><Portfolio /></section>
        <section id='services'><Services /></section>
        <section id='contact'><Contact /></section>
      </div>
    </div>
  )
}
