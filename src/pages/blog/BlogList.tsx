import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from './posts';

const BlogList = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F2745] to-[#1a3a5c] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights on AI, client onboarding, lead generation, and growing your practice.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0F2745] mb-3 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
