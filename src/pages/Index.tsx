import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Users, Code, Briefcase, GraduationCap, Star, Download, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const skills = {
    technical: ['Java', 'Python', 'MySQL', 'CSS', 'HTML', 'Cloud Computing', 'AWS'],
    soft: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management'],
    tools: ['AWS', 'OpenAI', 'MySQL Workbench', 'TinkerCAD', 'Blender', 'KiCad']
  };

  const projects = [
    {
      title: 'Hotel Management System',
      description: 'Desktop app for hotel booking, billing, and room tracking',
      tech: ['Python', 'Tkinter', 'MySQL'],
      github: 'https://github.com/AnkushSil/Hotel_Management_System',
      type: 'Solo Project'
    },
    {
      title: 'Genius – AI SaaS Multimedia Generator',
      description: 'Multimedia AI platform: image, audio, video, and code generation',
      tech: ['Next.js 13', 'React', 'Tailwind CSS', 'Prisma', 'Stripe'],
      github: 'https://github.com/AnkushSil/Saas-AI-Platform',
      type: 'Team of 5'
    },
    {
      title: 'Aqua Cloud Innovators – Water Harvesting',
      description: 'Nanotech + biomimicry-based water harvesting concept',
      tech: ['Blender', 'TinkerCAD', 'FDM 3D Printing'],
      github: 'https://github.com/AnkushSil/AQUA-CLOUD-INNOVATORS-PROJECT-SIH_2023',
      type: 'Team of 6'
    }
  ];

  const certifications = [
    {
      title: 'Getting Started with Enterprise-grade AI',
      issuer: 'IBM',
      date: 'Jan–Feb 2024'
    },
    {
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'IBM',
      date: 'Jun–Jul 2023'
    },
    {
      title: 'Getting Started with Enterprise Data Science',
      issuer: 'IBM',
      date: 'Jul 2023'
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
                <h2 className="text-2xl text-modern-purple font-semibold">Junior Software Developer</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Software Developer Intern passionate about cloud computing and AI innovation
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
                  className="border-2 border-border hover:bg-muted px-8 py-3 h-12"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl gradient-modern p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/tnpQz2Fk/profile-photo.jpg" 
                      alt="Ankush Sil" 
                      className="w-full h-full object-cover"
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
            <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-blue-vibrant rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.technical.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-3 bg-blue-vibrant rounded-lg">
                      <span className="font-medium text-foreground">{skill}</span>
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">Pro</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-green-vibrant rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-modern-green" />
                  </div>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.soft.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-3 bg-green-vibrant rounded-lg">
                      <span className="font-medium text-foreground">{skill}</span>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">Expert</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-foreground text-xl">
                  <div className="w-10 h-10 bg-orange-vibrant rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-modern-orange" />
                  </div>
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.tools.map((tool) => (
                    <div key={tool} className="flex items-center justify-between p-3 bg-orange-vibrant rounded-lg">
                      <span className="font-medium text-foreground">{tool}</span>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Advanced</Badge>
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
              <Card key={index} className="bg-card shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{project.type}</Badge>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
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
