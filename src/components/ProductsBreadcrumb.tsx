import * as React from "react"
import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbItem {
  label: string
  href?: string
  isCurrent?: boolean
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function ProductsBreadcrumb({ items }: CustomBreadcrumbProps) {
  return (
    <Breadcrumb className="container mx-auto pb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.length > 0 && (
          <BreadcrumbItem>
            <ChevronRight size={16} />
          </BreadcrumbItem>
        )}
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbItem>
                <ChevronRight size={16} />
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
} 