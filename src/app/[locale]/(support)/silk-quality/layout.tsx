import Link from 'next/link';

export default function SilkQualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const qualityPages = [
    { title: 'Silk Testing Methods', href: '/silk-quality/silk-testing-methods' },
    { title: 'How to Check Authenticity', href: '/silk-quality/how-to-check-authenticity' },
    { title: 'Grade 6A Certification', href: '/silk-quality/grade-6a-certification' },
    { title: 'OEKO-TEX Certification', href: '/silk-quality/oeko-tex' },
  ];

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-2xl font-bold mb-6">Silk Quality</h1>
      
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {qualityPages.map((page) => (
          <Link 
            key={page.href}
            href={page.href}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold">{page.title}</h2>
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
} 