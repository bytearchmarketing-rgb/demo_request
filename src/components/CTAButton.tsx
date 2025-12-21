import { ArrowRight, Calendar } from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'default' | 'large';
  icon?: 'arrow' | 'calendar' | 'none';
  className?: string;
}

export default function CTAButton({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  icon = 'arrow',
  className = ''
}: CTAButtonProps) {
  const baseStyles = 'font-bold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

  const sizeStyles = size === 'large'
    ? 'px-10 py-4 text-lg'
    : 'px-8 py-3 text-base';

  const variantStyles = {
    primary: 'group bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110',
    secondary: 'bg-white border-2 border-gray-300 text-gray-900 hover:border-orange-500 hover:text-orange-600 hover:shadow-lg transform hover:scale-105',
    white: 'bg-white text-orange-600 hover:shadow-2xl transform hover:scale-110'
  };

  const iconComponent = icon === 'arrow' ? (
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  ) : icon === 'calendar' ? (
    <Calendar className="w-5 h-5" />
  ) : null;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {iconComponent}
    </button>
  );
}
