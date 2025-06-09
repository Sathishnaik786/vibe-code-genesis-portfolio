// Blog.jsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, MessageCircle, Share2, Facebook, Linkedin, Twitter, Search, X } from 'lucide-react';

interface Post {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  likes: number;
  comments: number;
  date: string;
}

const categories = [
  'All Posts',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity'
];

const blogPosts: Post[] = [
  {
    title: 'Building AI-Powered Applications with React',
    excerpt: 'Learn how to integrate artificial intelligence into your React applications using modern tools and techniques.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    category: 'AI & Machine Learning',
    likes: 245,
    comments: 32,
    date: 'March 15, 2024'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Web Development',
    likes: 189,
    comments: 24,
    date: 'March 12, 2024'
  },
  {
    title: 'Understanding Large Language Models',
    excerpt: 'A deep dive into the architecture and capabilities of modern LLMs.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d',
    category: 'AI & Machine Learning',
    likes: 42,
    comments: 15,
    date: 'March 10, 2024'
  },
  {
    title: 'Getting Started with Generative AI',
    excerpt: 'Learn the basics of generative AI and how to implement it in your projects.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'AI & Machine Learning',
    likes: 38,
    comments: 12,
    date: 'March 8, 2024'
  },
  {
    title: 'The Power of Transformer Models',
    excerpt: 'Understanding the revolutionary architecture behind modern AI systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'AI & Machine Learning',
    likes: 56,
    comments: 23,
    date: 'March 6, 2024'
  },
  {
    title: 'Building Your First AI Project',
    excerpt: 'A step-by-step guide to creating your first AI-powered application.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Projects',
    likes: 29,
    comments: 8,
    date: 'March 4, 2024'
  }
];

const carouselImages = [
  'https://media.istockphoto.com/id/1950804925/photo/ai-technology-in-everyday-life-concept-people-use-ai-to-help-work-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=pMNNlK3h31KvxdZeYAxp2QBWxszC_tR4_DpnxFWmwbs=',
  'https://media.istockphoto.com/id/1782109417/photo/innovative-futuristic-ai-digital-chatbot-concept-virtual-conversation-assistant-using.jpg?s=612x612&w=0&k=20&c=rvXvb3zmLJovT-CNR1ukuyZJoulJ9mwW4Jfgt4Z1v2g=',
  'https://media.istockphoto.com/id/1782109417/photo/innovative-futuristic-ai-digital-chatbot-concept-virtual-conversation-assistant-using.jpg?s=612x612&w=0&k=20&c=rvXvb3zmLJovT-CNR1ukuyZJoulJ9mwW4Jfgt4Z1v2g=',
  'https://media.istockphoto.com/id/2210154232/photo/futuristic-concept-of-artificial-intelligence-technology-showing-a-businessman-holding-a.jpg?s=612x612&w=0&k=20&c=cmguWmJkxNdUzTfJraDzQy5PV8Ca9A46Q9VqwXVL97w=',
  'https://media.istockphoto.com/id/1201073294/photo/ai-learning-and-artificial-intelligence-concept.jpg?s=612x612&w=0&k=20&c=aNgt8GZkUUKUcbMenPcA2NZMKVAH5mWfwzlJqY9eFOA='
];

const Blog = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [sharePost, setSharePost] = useState<Post | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreMore = () => {
    setShowAll(true);
    setVisiblePosts(blogPosts.length);
  };

  const handleShare = (post: Post) => {
    setSharePost(post);
  };

  const handleCloseShare = () => {
    setSharePost(null);
  };

  const handleSocialShare = (platform: string) => {
    if (!sharePost) return;

    const text = `${sharePost.title}\n${sharePost.excerpt}`;
    const url = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(text);

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareText}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    handleCloseShare();
  };

  const filteredPosts = selectedCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of technology, AI, and human creativity through insightful articles and tutorials.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Fixed */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                        ${selectedCategory === category 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-card hover:bg-primary/10'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                <div
                  key={index}
                  className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl overflow-hidden group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button 
                          onClick={() => handleShare(post)}
                          className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && filteredPosts.length > 4 && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleExploreMore}
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Explore More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {sharePost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Share Article</h3>
              <button
                onClick={handleCloseShare}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-6">
              <h4 className="font-medium mb-2">{sharePost.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{sharePost.excerpt}</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleSocialShare('twitter')}
                className="p-3 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialShare('facebook')}
                className="p-3 rounded-full bg-[#4267B2] text-white hover:bg-[#4267B2]/90 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialShare('linkedin')}
                className="p-3 rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/90 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
