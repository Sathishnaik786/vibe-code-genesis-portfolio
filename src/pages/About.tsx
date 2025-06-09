import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of AI-powered applications and mentoring junior developers.'
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications using React and Node.js.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2018 - 2020',
      description: 'Worked on frontend development and UI/UX improvements.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University of Technology',
      period: '2016 - 2018',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      period: '2012 - 2016',
      description: 'Focused on Software Engineering and Web Development'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ]
    },
    {
      category: 'DevOps',
      technologies: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
      ]
    },
    {
      category: 'AI/ML',
      technologies: [
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-primary">Sathish Naik</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate software engineer and AI enthusiast with a focus on creating innovative solutions
              that make a difference.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-primary mb-2">{edu.school}</p>
              <p className="text-muted-foreground mb-4">{edu.period}</p>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <div key={index} className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">{stack.category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center space-y-2 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center 
                      transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg p-3">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain filter dark:invert"
                      />
                    </div>
                    <span className="text-xs text-center text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
