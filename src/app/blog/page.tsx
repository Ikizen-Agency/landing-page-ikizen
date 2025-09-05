                                                                                                                                                                                                                                                                                                                                                                                    import { Metadata } from 'next';
import { BlogList } from '@/components/blog';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Blog | Ikizen Agency',
  description: 'Descubre las últimas tendencias en desarrollo web, diseño y marketing digital. Consejos, tutoriales y casos de estudio.',
  keywords: [
    'blog desarrollo web',
    'diseño web',
    'marketing digital',
    'tutoriales web',
    'casos de estudio',
    'tendencias digitales',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    'Ikizen Agency'
  ],
  openGraph: {
    title: 'Blog | Ikizen Agency',
    description: 'Descubre las últimas tendencias en desarrollo web, diseño y marketing digital.',
    url: 'https://ikizen.vercel.app/blog',                                                                                                                                                                                                                                                                                                                                          
    siteName: 'Ikizen Agency',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ikizen Agency Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compartimos conocimiento, experiencias y las últimas tendencias en desarrollo web, 
              diseño y marketing digital para ayudarte a crecer en el mundo digital.
            </p>
          </div>

          <BlogList 
            posts={posts} 
            showFeatured={true}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
