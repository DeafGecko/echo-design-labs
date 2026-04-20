import React from 'react';

export const LabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      return (
            <div className="min-h-screen bg-echo-primary text-white selection:bg-echo-accent">
                  {/* This is where you'd inject global security contexts 
          like Auth states or Permission gates.
      */}
                  {children}
            </div>
      );
};
