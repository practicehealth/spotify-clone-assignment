// Icon.tsx
import React, { ReactNode } from 'react';

interface IconProps {
  size?: number;
  children: ReactNode;
}

const Icon: React.FC<IconProps> = ({ size = 18, children }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      {children}
    </div>
  );
};

export default Icon;
