
import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Users, Code, Briefcase, GraduationCap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      {/* Fixed Navigation with Primary Color */}
      <nav className="fixed top-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/20 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary-foreground">Ankush Sil</div>
            <div className="flex space-x-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium hover:scale-105 transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="pt-24 pb-16 px-6 gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-8 ring-primary-foreground/20 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.postimg.cc/tnpQz2Fk/profile-photo.jpg" 
                alt="Ankush Sil" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
              Ankush Sil
            </h1>
            <p className="text-2xl text-primary-foreground/95 mb-2 font-semibold">Junior Software Developer</p>
            <p className="text-xl text-primary-foreground/90 mb-6">Software Developer Intern</p>
            <div className="flex items-center justify-center space-x-4 text-primary-foreground/90 mb-8">
              <div className="flex items-center space-x-2 bg-primary-foreground/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Kolkata, West Bengal, India</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 transform font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full transition-all duration-200 font-semibold hover:scale-105 transform shadow-xl"
              >
                <a href="https://github.com/AnkushSil" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-blue-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">About Me</h2>
          <Card className="bg-card shadow-2xl rounded-2xl border-2 border-primary/20 hover:shadow-3xl transition-shadow duration-300">
            <CardContent className="p-10">
              <p className="text-xl text-foreground leading-relaxed font-medium">
                As a proactive learner and coding enthusiast, I thrive on challenges and collaborative projects that enhance my technical skills. Currently pursuing a Bachelor's in Cloud Computing & Automation, I have contributed to innovative projects like Genius (an AI-powered SaaS platform) and a nanotechnology-based water harvesting initiative. I bring strong interpersonal skills, a growth mindset, and a commitment to excellence in all my endeavors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section with Triadic Colors */}
      <section id="skills" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-primary/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardHeader className="bg-blue-light rounded-t-2xl">
                <CardTitle className="flex items-center text-primary text-xl">
                  <Code className="w-6 h-6 mr-3" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 text-sm font-semibold">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-secondary/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardHeader className="bg-orange-light rounded-t-2xl">
                <CardTitle className="flex items-center text-secondary text-xl">
                  <Users className="w-6 h-6 mr-3" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3 py-1 text-sm font-semibold">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-accent/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardHeader className="bg-green-light rounded-t-2xl">
                <CardTitle className="flex items-center text-accent text-xl">
                  <Star className="w-6 h-6 mr-3" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-1 text-sm font-semibold">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-orange-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-secondary mb-16 text-center">Work Experience</h2>
          <Card className="bg-card shadow-2xl rounded-2xl border-2 border-secondary/20 hover:shadow-3xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground text-xl">
                <Briefcase className="w-6 h-6 mr-3 text-secondary" />
                Core Member – Technical Wing, English Literary Club
              </CardTitle>
              <CardDescription className="flex items-center text-muted-foreground text-lg">
                <Calendar className="w-5 h-5 mr-2 text-secondary" />
                Dec 2023 – Present, Bhopal
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3 text-foreground text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Created and distributed online forms, handled event data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Organized key events: Enchantopia 2.0, Alfaaz '24, The Pensieve of Nostalgia
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Designed and managed digital magazine "ELA Gazette"
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-green-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-accent mb-16 text-center">Education</h2>
          <Card className="bg-card shadow-2xl rounded-2xl border-2 border-accent/20 hover:shadow-3xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground text-xl">
                <GraduationCap className="w-6 h-6 mr-3 text-accent" />
                B.Tech in Cloud Computing and Automation
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Vellore Institute of Technology (VIT), Bhopal — 2022–2026
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center bg-secondary/10 p-4 rounded-xl">
                  <Award className="w-6 h-6 mr-3 text-secondary" />
                  <span className="text-lg font-semibold text-foreground">🏅 Gold Medal – Aarambh 2022 Football Tournament</span>
                </div>
                <div className="flex items-center bg-muted p-4 rounded-xl">
                  <Award className="w-6 h-6 mr-3 text-accent" />
                  <span className="text-lg font-semibold text-foreground">🥈 Silver Medal – Aadhav AdVITya 2023 Football Tournament</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card shadow-2xl rounded-2xl border-2 border-primary/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 transform">
                <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-2xl">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-primary-foreground/90 font-medium">
                    {project.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-foreground mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm border-primary text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200 hover:scale-105 transform"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-blue-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card shadow-xl rounded-2xl border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] transform">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">{cert.title}</h3>
                      <p className="text-lg text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                      {cert.date}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Interests</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-primary/30 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">💻</div>
                <h3 className="font-bold text-xl text-primary mb-2">Keen Coder</h3>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-secondary/30 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">⚽</div>
                <h3 className="font-bold text-xl text-secondary mb-2">Football Player</h3>
                <p className="text-lg text-muted-foreground font-medium">Defensive Midfielder</p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-2xl rounded-2xl border-2 border-accent/30 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="font-bold text-xl text-accent mb-2">Lifelong Learner</h3>
                <p className="text-lg text-muted-foreground font-medium">Facts & Events</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 gradient-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary-foreground mb-16 text-center">Get In Touch</h2>
          <Card className="bg-card/95 backdrop-blur-sm shadow-2xl rounded-2xl border-2 border-primary-foreground/20">
            <CardContent className="p-10 text-center">
              <p className="text-xl text-foreground mb-10 font-medium">
                I'm always open to discussing new opportunities and exciting projects. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Button 
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 transform font-semibold text-lg"
                >
                  <a href="mailto:ankushsil041016@gmail.com">
                    <Mail className="w-5 h-5 mr-3" />
                    ankushsil041016@gmail.com
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform shadow-xl"
                >
                  <a href="https://www.linkedin.com/in/ankush-sil-355944251" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-primary bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-foreground text-lg font-medium">
            © 2024 Ankush Sil. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
