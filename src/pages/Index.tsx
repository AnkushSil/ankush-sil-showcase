import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Users, Code, Briefcase, GraduationCap, Star, Download, Phone, Cpu, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import ankushProfile from '@/assets/ankush-profile.jpg';

const Index = () => {
  const skills = {
    technical: ['Java', 'Python', 'Node.js', 'MySQL', 'MongoDB', 'CSS', 'HTML', 'Cloud Computing', 'AWS'],
    soft: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management'],
    tools: ['AWS', 'OpenAI', 'Google Gemini API', 'MySQL Workbench', 'TinkerCAD', 'Blender', 'KiCad'],
    specialties: ['Advanced DSA in Java', 'Competitive Programming']
  };

  const projects = [
    {
      title: 'CodeCollab',
      role: 'Backend Infrastructure Engineer',
      description: 'A real-time developer platform. Engineered the backend architecture using Node.js and Express to build scalable REST APIs for authentication and storage. Implemented WebSocket events via Socket.io to manage concurrent user sessions, achieving sub-100ms sync latency. Secured routes using Role-Based Access Control (RBAC) with JWT tokenization and bcrypt hashing. Orchestrated the integration of external Code Execution APIs to process code submissions and stream real-time output directly to the frontend.',
      tech: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
      github: 'https://github.com/AnkushSil/CodeCollab-frontend',
      githubBackend: 'https://github.com/AnkushSil/CodeCollab-backend',
      type: 'Group Project'
    },
    {
      title: 'SaralLoan',
      role: 'Full Stack / AI Engineer',
      description: 'A Conversational AI FinTech Loan Assistant. Architected a mobile-first underwriting system featuring an AI-driven chat assistant for real-time financial queries and personalized loan offers. Engineered a robust REST API with Node.js and natively integrated the Google Gemini API for fast context parsing, reducing query latency by 30%. Implemented secure OTP authentication and deployed the entire microservices architecture on Render for high availability.',
      tech: ['Node.js', 'Google Gemini API', 'MongoDB', 'Render'],
      github: 'https://github.com/AnkushSil/SaralLoan-frontend',
      githubBackend: 'https://github.com/AnkushSil/SaralLoan-backend',
      type: 'Solo Project'
    },
    {
      title: 'Aqua Cloud Innovators – Water Harvesting',
      role: '3D Filter Design & Research',
      description: 'Nanotech + biomimicry-based water harvesting concept developed for SIH 2023. Contributed to 3D filter design and research using Blender and TinkerCAD, with FDM 3D printing for prototyping.',
      tech: ['Blender', 'TinkerCAD', 'FDM 3D Printing'],
      github: 'https://github.com/AnkushSil/AQUA-CLOUD-INNOVATORS-PROJECT-SIH_2023',
      type: 'Team of 6'
    }
  ];

  const certifications = [
    {
      title: 'Applied Machine Learning in Python',
      issuer: 'University of Michigan (Coursera)',
      date: 'Dec 2025'
    },
    {
      title: 'HTML, CSS, and JavaScript for Web Developers',
      issuer: 'Johns Hopkins University (Coursera)',
      date: 'Oct 2025'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">Ankush Sil</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Vibrant Style */}
      <section className="pt-24 pb-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-vibrant text-primary text-sm font-medium border border-primary/20">
                  👋 Welcome to my portfolio
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm <span className="text-primary">Ankush Sil</span>
                </h1>
                <h2 className="text-2xl text-modern-purple font-semibold">Software Developer & Cloud Engineer</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate about building scalable systems, cloud infrastructure, and AI-driven innovation
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Kolkata, West Bengal, India</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-12"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-2 border-border hover:bg-muted px-8 py-3 h-12"
                >
                  <a href="https://github.com/AnkushSil" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-2 border-border hover:bg-muted px-8 py-3 h-12"
                >
                  <a href="/Ankush_SoftwareDeveloper_Resume_2026.pdf" download target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl gradient-modern p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src={ankushProfile} 
                      alt="Ankush Sil" 
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-semibold">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-purple-vibrant">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">Get to know more about my background and passion</p>
          </div>
          <Card className="bg-card shadow-lg border-0 rounded-2xl">
            <CardContent className="p-10">
              <p className="text-lg text-foreground leading-relaxed">
                As a proactive learner and coding enthusiast, I thrive on challenges and collaborative projects that enhance my technical skills. Currently pursuing a Bachelor's in Cloud Computing & Automation, I have contributed to innovative projects like Genius (an AI-powered SaaS platform) and a nanotechnology-based water harvesting initiative. I bring strong interpersonal skills, a growth mindset, and a commitment to excellence in all my endeavors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Technologies and tools that fuel my passion</p>
          </div>
          {/* Highlighted Specialties */}
          <Card className="bg-card shadow-lg border-0 rounded-2xl mb-8 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-vibrant rounded-xl flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-modern-purple" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-bold">Core Specialties</h3>
                    <p className="text-muted-foreground text-sm">Where I sharpen my craft daily</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:ml-auto">
                  {skills.specialties.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-vibrant text-foreground font-semibold border border-modern-purple/30 hover:bg-modern-purple hover:text-white transition-colors duration-200"
                    >
                      <Trophy className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-blue-vibrant rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  Programming Languages
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Building robust solutions with modern languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <div key={skill} className="px-4 py-2 bg-blue-vibrant rounded-full text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-green-vibrant rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-modern-green" />
                  </div>
                  Core Competencies
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Essential skills for collaborative success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <div key={skill} className="px-4 py-2 bg-green-vibrant rounded-full text-foreground font-medium hover:bg-modern-green hover:text-white transition-colors duration-200 cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-orange-vibrant rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-5 h-5 text-modern-orange" />
                  </div>
                  Development Tools
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Powerful tools for efficient development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <div key={tool} className="px-4 py-2 bg-orange-vibrant rounded-full text-foreground font-medium hover:bg-modern-orange hover:text-white transition-colors duration-200 cursor-default">
                      {tool}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-cyan-vibrant">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and achievements</p>
          </div>
          <Card className="bg-card shadow-lg border-0 rounded-2xl">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground text-xl mb-2">
                    Core Member – Technical Wing, English Literary Club
                  </CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    Dec 2023 – Present, Bhopal
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 ml-16">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-foreground">Created and distributed online forms, handled event data</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-foreground">Organized key events: Enchantopia 2.0, Alfaaz '24, The Pensieve of Nostalgia</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-foreground">Designed and managed digital magazine "ELA Gazette"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">Academic background and achievements</p>
          </div>
          <Card className="bg-card shadow-lg border-0 rounded-2xl">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground text-xl mb-2">
                    B.Tech in Cloud Computing and Automation
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    Vellore Institute of Technology (VIT), Bhopal — 2022–2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 ml-16">
                <div className="flex items-center space-x-3 p-4 bg-orange-subtle rounded-xl">
                  <Award className="w-5 h-5 text-modern-orange" />
                  <span className="font-semibold text-foreground">🏅 Gold Medal – Aarambh 2022 Football Tournament</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-subtle rounded-xl">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">🥈 Silver Medal – Aadhav AdVITya 2023 Football Tournament</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-pink-vibrant">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Some of my notable work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{project.type}</Badge>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                  {project.role && (
                    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-blue-vibrant text-primary text-xs font-semibold w-fit">
                      <Briefcase className="w-3 h-3" />
                      {project.role}
                    </div>
                  )}
                  <CardDescription className="text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className={`grid ${(project as any).githubBackend ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {(project as any).githubBackend ? 'Frontend' : 'View Project'}
                        </a>
                      </Button>
                      {(project as any).githubBackend && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a href={(project as any).githubBackend} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Backend
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground">Professional development and learning</p>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge className="bg-accent text-accent-foreground px-3 py-1">
                      {cert.date}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 px-6 bg-green-vibrant">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Interests</h2>
            <p className="text-lg text-muted-foreground">What I'm passionate about beyond coding</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg border-0 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-vibrant rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Keen Coder</h3>
                <p className="text-muted-foreground">Passionate about clean code and innovative solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg border-0 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-vibrant rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚽</span>
                </div>
                <h3 className="font-bold text-lg text-modern-green mb-2">Football Player</h3>
                <p className="text-muted-foreground">Defensive Midfielder with team leadership skills</p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg border-0 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-vibrant rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-bold text-lg text-modern-orange mb-2">Lifelong Learner</h3>
                <p className="text-muted-foreground">Always curious about facts and new events</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Ready to start a conversation? Let's connect!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card shadow-lg border-0 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Let's work together</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    I'm always open to discussing new opportunities and exciting projects. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">ankushsil041016@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Kolkata, West Bengal, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href="https://www.linkedin.com/in/ankush-sil-355944251" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href="https://github.com/AnkushSil" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 Ankush Sil. Designed with passion and built with modern technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
