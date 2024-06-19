'use client'
import useSideBar from '@/content/use-sidebar'
import React, { useEffect, useState } from 'react'
import { Loader } from '../loader'
import { Switch } from '../ui/switch'
import { Separator } from '../ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const breadcrumbPaths: { [key: string]: { name: string; url?: string }[] } = {
  settings: [{ name: 'Home', url: '/' }, { name: 'Settings' }],
  dashboard: [{ name: 'Home', url: '/' }, { name: 'Dashboards' }],
  appointment: [{ name: 'Home', url: '/' }, { name: 'Appointment' }],
  connections: [{ name: 'Home', url: '/' }, { name: 'connections' }],
  integration: [{ name: 'Home', url: '/' }, { name: 'Integration' }],
  // Add other paths as needed
}

export function DynamicBreadcrumb() {
  const { page } = useSideBar()
  const [pathSegments, setPathSegments] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const segments = window.location.pathname.split('/').filter(Boolean);
      setPathSegments(segments);
    }
  }, []);

  // Ensure page is defined, otherwise use a default value
  const pageKey = page ? page.replace(/ /g, '') : 'default'; // Replace 'default' with a suitable default key if needed
  let path = breadcrumbPaths[pageKey.toLowerCase()] || [{ name: 'Home', url: '/' }];

  if (pathSegments.length > 1) {
    const dynamicPart = pathSegments[pathSegments.length - 1];
    path = [...path, { name: dynamicPart, url: `/${pathSegments.join('/')}` }];
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < path.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
