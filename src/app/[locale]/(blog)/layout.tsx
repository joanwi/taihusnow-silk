import { AsideNav } from '@/components/AsideNav';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogPages = [
    { title: 'News', href: '/news' },
    { title: 'Guides', href: '/guides' },
    { title: 'Silk Materials', href: '/silk-materials' },
    { title: 'Silk Care', href: '/silk-care' },
    { title: 'Compare', href: '/compare' },
  ];

  return (
    <div className="container min-h-96 mx-auto px-4 pt-20">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
       <AsideNav items={blogPages} />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 