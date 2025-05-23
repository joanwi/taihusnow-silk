import * as React from "react"
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="container mx-auto pb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground break-words sm:gap-2.5">
        {/* Home */}
        <li className="inline-flex items-center gap-1.5">
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home size={16} className="mr-1" />
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            {/* Separator */}
            <li className="inline-flex items-center gap-1.5">
              <ChevronRight size={16} />
            </li>
            {/* Item */}
            <li className="inline-flex items-center gap-1.5">
              {item.href && !item.isCurrent ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-normal">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
} 