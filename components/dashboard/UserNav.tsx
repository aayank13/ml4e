"use client";

import { useRouter } from 'next/navigation';
import { User, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSupabase } from '@/components/providers/SupabaseProvider';
import { toast } from 'sonner';

interface UserNavProps {
  isCollapsed?: boolean;
}

export function UserNav({ isCollapsed }: UserNavProps) {
  const router = useRouter();
  const { supabase, user } = useSupabase();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/auth');
      toast.success('Successfully signed out');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-accent">
          <Avatar>
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 text-left">
              <p className="text-sm font-medium">
                {user?.user_metadata?.full_name || 'User'}
              </p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}