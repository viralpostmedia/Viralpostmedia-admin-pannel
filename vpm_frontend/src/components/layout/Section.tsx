import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  containerClassName = '',
  ariaLabel 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${className}`}
      aria-label={ariaLabel}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
