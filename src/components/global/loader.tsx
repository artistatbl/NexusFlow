import React from 'react';
import { LoaderCircle } from 'lucide-react'; // Importing Spinner from Lucide React
import { cn } from '@/lib/utils';

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export const Loader = ({
  loading,
  children,
  noPadding,
  className,
}: LoaderProps) => {
  return loading ? (
    <div className={cn(className || 'w-full py-5 flex justify-center')}>
      <LoaderCircle stroke="currentColor" size={24} /> {/* Using Lucide React Spinner */}
    </div>
  ) : (
    children
  );
};

