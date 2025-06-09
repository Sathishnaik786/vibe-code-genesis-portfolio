import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    instructor: 'Andrew Ng',
    date: '2023',
    description: 'Comprehensive deep learning course covering neural networks, CNNs, RNNs, and more.',
    link: 'https://coursera.org'
  },
  {
    title: 'OpenAI API Mastery',
    issuer: 'LearnAI',
    instructor: 'AI Academy',
    date: '2023',
    description: 'Master the OpenAI API for building advanced AI applications and chatbots.',
    link: 'https://learnai.org'
  },
  {
    title: 'Machine Learning Engineer',
    issuer: 'Google Cloud',
    instructor: 'Google',
    date: '2022',
    description: 'Professional certification in machine learning and AI on Google Cloud Platform.',
    link: 'https://cloud.google.com'
  },
  {
    title: 'Full Stack Development',
    issuer: 'Meta',
    instructor: 'Meta Education',
    date: '2022',
    description: 'Comprehensive full-stack development certification covering modern web technologies.',
    link: 'https://meta.com'
  },
  {
    title: 'Data Science Professional',
    issuer: 'IBM',
    instructor: 'IBM Academy',
    date: '2021',
    description: 'Advanced data science certification covering statistics, machine learning, and big data.',
    link: 'https://ibm.com'
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    instructor: 'AWS Training',
    date: '2021',
    description: 'Professional certification in AWS cloud development and architecture.',
    link: 'https://aws.amazon.com'
  }
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-4">
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements in AI, machine learning, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group bg-card rounded-xl p-6 border border-border
                transition-all duration-300 hover:-translate-y-2
                dark:shadow-[0_0_20px_hsl(var(--glow)/0.3)]
                hover:shadow-xl"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-sora mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Instructor: {cert.instructor}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground
                      transition-colors duration-300"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
