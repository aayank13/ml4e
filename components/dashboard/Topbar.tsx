"use client";

import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const routeTabs = {
    '/dashboard': ['Overview', 'Activity', 'Settings'],
    '/dashboard/community': ['Posts', 'Members'],
    '/dashboard/datasets': ['All', 'My Datasets'],
    '/dashboard/learn': ['Courses', 'Projects'],
    '/dashboard/models': ['All', 'My Models'],
};

export function Topbar() {
  const pathname = usePathname();
  const currentTabs = routeTabs[pathname as keyof typeof routeTabs] || [];

  return (
    <div className="border-b bg-card">
      <div className="flex h-16 items-center px-4 gap-4">
        <h1 className="text-2xl font-bold">
          {((pathname.split('/').pop() ?? '').charAt(0).toUpperCase() + (pathname.split('/').pop() ?? '').slice(1)) || ''}
        </h1>
        <div className="flex-1" />
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" />
        </div>
      </div>
      {currentTabs.length > 0 && (
        <div className="px-4 pb-2">
          <Tabs defaultValue={currentTabs[0].toLowerCase()}>
            <TabsList>
              {currentTabs.map((tab) => (
                <TabsTrigger key={tab} value={tab.toLowerCase()}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
    </div>
  );
}