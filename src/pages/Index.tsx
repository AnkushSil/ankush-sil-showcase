
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-blue-100 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800">Ankush Sil</div>
            <div className="flex space-x-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100">
              <img 
                src="https://i.postimg.cc/tnpQz2Fk/profile-photo.jpg" 
                alt="Ankush Sil" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Ankush Sil
            </h1>
            <p className="text-xl text-slate-600 mb-2">Junior Software Developer</p>
            <p className="text-lg text-slate-500 mb-6">Software Developer Intern</p>
            <div className="flex items-center justify-center space-x-4 text-slate-600 mb-8">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition-all duration-200"
              >
                <a href="https://github.com/AnkushSil" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl border-blue-100">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                As a proactive learner and coding enthusiast, I thrive on challenges and collaborative projects that enhance my technical skills. Currently pursuing a Bachelor's in Cloud Computing & Automation, I have contributed to innovative projects like Genius (an AI-powered SaaS platform) and a nanotechnology-based water harvesting initiative. I bring strong interpersonal skills, a growth mindset, and a commitment to excellence in all my endeavors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Code className="w-5 h-5 mr-2" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Users className="w-5 h-5 mr-2" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Star className="w-5 h-5 mr-2" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-purple-100 text-purple-700">
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
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Work Experience</h2>
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Core Member – Technical Wing, English Literary Club
              </CardTitle>
              <CardDescription className="flex items-center text-slate-600">
                <Calendar className="w-4 h-4 mr-1" />
                Dec 2023 – Present, Bhopal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Created and distributed online forms, handled event data</li>
                <li>• Organized key events: Enchantopia 2.0, Alfaaz '24, The Pensieve of Nostalgia</li>
                <li>• Designed and managed digital magazine "ELA Gazette"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Education</h2>
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                B.Tech in Cloud Computing and Automation
              </CardTitle>
              <CardDescription>
                Vellore Institute of Technology (VIT), Bhopal — 2022–2026
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-yellow-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>🏅 Gold Medal – Aarambh 2022 Football Tournament</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>🥈 Silver Medal – Aadhav AdVITya 2023 Football Tournament</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {project.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
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
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-md rounded-xl border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800">{cert.title}</h3>
                      <p className="text-slate-600">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
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
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Interests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-semibold text-slate-800">Keen Coder</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="font-semibold text-slate-800">Football Player</h3>
                <p className="text-sm text-slate-600">Defensive Midfielder</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100 text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-slate-800">Lifelong Learner</h3>
                <p className="text-sm text-slate-600">Facts & Events</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Get In Touch</h2>
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-blue-100">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-slate-700 mb-8">
                I'm always open to discussing new opportunities and exciting projects. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <a href="mailto:ankushsil041016@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    ankushsil041016@gmail.com
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full"
                >
                  <a href="https://www.linkedin.com/in/ankush-sil-355944251" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-slate-600">
            © 2024 Ankush Sil. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
