"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Database, GraduationCap, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UserNav } from './UserNav';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Community', href: '/dashboard/community' },
  { icon: Database, label: 'Datasets', href: '/dashboard/datasets' },
  { icon: GraduationCap, label: 'Learn', href: '/dashboard/learn' },
  { icon: Cpu, label: 'Models', href: '/dashboard/models' },
]

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed] = useState(false);

  return (
    <div className={cn(
      "flex flex-col h-screen border-r bg-card",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center gap-2">
        <Image src="/logo.png" alt="ML4E" width={32} height={32} />
        {!isCollapsed && <span className="font-bold text-lg">ML4E</span>}
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <UserNav isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}