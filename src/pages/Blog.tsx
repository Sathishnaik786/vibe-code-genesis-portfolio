
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Heart, MessageCircle, Share2 } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'LLMs', 'GenAI', 'Transformers', 'Projects'];
  
  const blogPosts = [
    {
      title: "The Future of AI-Human Collaboration",
      excerpt: "Exploring how artificial intelligence will reshape the way we work and create together, building bridges between human creativity and machine intelligence.",
      category: "GenAI",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      likes: 42,
      comments: 8
    },
    {
      title: "Building LLM Applications with LangChain",
      excerpt: "A comprehensive guide to creating powerful language model applications using LangChain framework, from basic concepts to advanced implementations.",
      category: "LLMs",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      likes: 38,
      comments: 12
    },
    {
      title: "Vector Databases: The Backbone of Modern AI",
      excerpt: "Deep dive into vector databases and their crucial role in similarity search, recommendation systems, and retrieval-augmented generation.",
      category: "Transformers",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      likes: 29,
      comments: 6
    },
    {
      title: "Fine-tuning GPT Models for Domain-Specific Tasks",
      excerpt: "Learn how to customize large language models for specific industries and use cases through effective fine-tuning strategies.",
      category: "LLMs",
      readTime: "15 min read",
      date: "Nov 28, 2024",
      likes: 55,
      comments: 15
    },
    {
      title: "Building an AI-Powered Code Review System",
      excerpt: "Creating an intelligent code review assistant that understands context, suggests improvements, and maintains coding standards automatically.",
      category: "Projects",
      readTime: "11 min read",
      date: "Nov 20, 2024",
      likes: 47,
      comments: 9
    },
    {
      title: "Understanding Transformer Architecture",
      excerpt: "Breaking down the transformer model architecture and its revolutionary impact on natural language processing and beyond.",
      category: "Transformers",
      readTime: "9 min read",
      date: "Nov 15, 2024",
      likes: 34,
      comments: 7
    }
  ];

  const carouselImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Carousel */}
      <div className="w-full h-96 bg-gradient-hero relative overflow-hidden mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold font-sora bg-gradient-cyber bg-clip-text text-transparent">
            AI Lab Blog
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="neon-border bg-card/50 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="font-sora">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 neon-border bg-background/50"
                />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.title}
                  className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image placeholder */}
                  <div className="aspect-[6/4] bg-gradient-cyber"></div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="font-sora text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="ghost" 
                        className="hover:text-primary transition-colors font-semibold"
                      >
                        Read More →
                      </Button>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="hover:text-primary transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
