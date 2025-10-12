import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <img 
          src="/logo.png" 
          className="w-32 h-32 object-contain" 
          alt="Midpoint Innovations Loading"
          width={128}
          height={128}
        />
      </div>
    </div>
  );
}
