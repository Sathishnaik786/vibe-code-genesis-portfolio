
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI-Human Collaboration",
      excerpt: "Exploring how artificial intelligence will reshape the way we work and create together, building bridges between human creativity and machine intelligence.",
      readTime: "8 min read",
      date: "Dec 15, 2024"
    },
    {
      title: "Building LLM Applications with LangChain",
      excerpt: "A comprehensive guide to creating powerful language model applications using LangChain framework, from basic concepts to advanced implementations.",
      readTime: "12 min read",
      date: "Dec 10, 2024"
    },
    {
      title: "Vector Databases: The Backbone of Modern AI",
      excerpt: "Deep dive into vector databases and their crucial role in similarity search, recommendation systems, and retrieval-augmented generation.",
      readTime: "10 min read",
      date: "Dec 5, 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            AI Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, experiments, and discoveries from the world of artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={article.title}
              className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="font-sora text-xl group-hover:text-primary transition-colors animated-underline">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 hover:text-primary transition-colors font-semibold"
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
