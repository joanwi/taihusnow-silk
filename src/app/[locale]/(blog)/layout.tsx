import Link from 'next/link';

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
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="sticky top-4">
            <h2 className="text-xl font-bold mb-4">Blog</h2>
            <ul className="space-y-2">
              {blogPages.map((page) => (
                <li key={page.href}>
                  <Link 
                    href={page.href}
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 