import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BlogHeaderProps {
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  coverImage?: string;
  tags: string[];
}

export function BlogHeader({
  title,
  description,
  date,
  author,
  readingTime,
  coverImage,
  tags,
}: BlogHeaderProps) {
  return (
    <header className="relative">
      <div className="mb-8">
        <Button
          asChild
          variant="ghost"
          className="mb-6 text-gray-400 hover:text-white"
        >
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {coverImage && (
        <div className="mt-8 relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  );
}
