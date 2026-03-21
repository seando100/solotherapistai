import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from './posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#0F2745] mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F2745] to-[#1a3a5c] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> SoloSolutionsAI
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:text-[#0F2745] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
            prose-li:text-gray-700
            prose-strong:text-[#0F2745]
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-[#0F2745] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Ready to modernize your intake process?</h3>
          <p className="text-gray-300 mb-6">Join the waitlist and be first to try AI-powered client onboarding.</p>
          <a href="/#waitlist" className="inline-flex items-center gap-2 bg-white text-[#0F2745] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
