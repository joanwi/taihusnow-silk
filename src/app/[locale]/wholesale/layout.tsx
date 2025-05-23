
import { AsideNav } from '@/components/AsideNav';

export default function WholesaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wholesalePages = [
    { title: 'Wholesale', href: '/wholesale' },
    { title: 'Silk Duvet Manufacturer', href: '/wholesale/silk-duvet-manufacturer' },
    { title: 'Private Label Silk Bedding', href: '/wholesale/private-label-silk-bedding' },
    { title: 'OEM/ODM Silk', href: '/wholesale/oem-odm-silk' },
    { title: 'Minimum Order Quantities', href: '/wholesale/minimum-order-quantities' },
    { title: 'Silk Production Process', href: '/wholesale/silk-production-process' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <AsideNav items={wholesalePages} />
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 