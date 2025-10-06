
import React, { ReactElement } from 'react';

interface SocialIconProps {
  href: string;
  icon: ReactElement;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
    >
      <div className="w-6 h-6 fill-current">
        {icon}
      </div>
    </a>
  );
};
