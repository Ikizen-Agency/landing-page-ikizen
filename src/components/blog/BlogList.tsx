import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
  showFeatured?: boolean;
}

export function BlogList({ posts, title, showFeatured = false }: BlogListProps) {
  const featuredPosts = showFeatured ? posts.filter(post => post.featured) : [];
  const regularPosts = showFeatured ? posts.filter(post => !post.featured) : posts;

  return (
    <div className="space-y-12">
      {title && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre las últimas tendencias en desarrollo web, diseño y marketing digital
          </p>
        </div>
      )}

      {showFeatured && featuredPosts.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold text-white mb-6">Artículos Destacados</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section>
        {showFeatured && featuredPosts.length > 0 && (
          <h3 className="text-2xl font-semibold text-white mb-6">Todos los Artículos</h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No hay artículos disponibles aún.</p>
        </div>
      )}
    </div>
  );
}
