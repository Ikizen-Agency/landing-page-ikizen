import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { BlogHeader } from '@/components/blog';
import Navbar from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado | Ikizen Agency',
    };
  }

  return {
    title: `${post.data.title} | Ikizen Agency Blog`,
    description: post.data.description,
    keywords: post.data.tags,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      url: `https://ikizen.vercel.app/blog/${params.slug}`,
      siteName: 'Ikizen Agency',
      type: 'article',
      publishedTime: post.data.date,
      authors: [post.data.author],
      tags: post.data.tags,
      images: post.data.coverImage ? [
        {
          url: post.data.coverImage,
          width: 1200,
          height: 630,
          alt: post.data.title,
        },
      ] : [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ikizen Agency Blog',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description,
      images: post.data.coverImage ? [post.data.coverImage] : ['/og-image.jpg'],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BlogHeader
            title={post.data.title}
            description={post.data.description}
            date={post.data.date}
            author={post.data.author}
            readingTime={post.data.readingTime}
            coverImage={post.data.coverImage}
            tags={post.data.tags}
          />

          <article className="prose prose-invert prose-lg max-w-none mt-12">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
