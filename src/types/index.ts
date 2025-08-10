// src/types/index.ts
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IconProps {
  className?: string;
  size?: number;
}

// Navigation Types
export interface NavItem {
  label: string;
  path: string;
}

export interface AboutUsItem {
  name: string;
  path: string;
  description: string;
}

// Feature Types
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// Product Types
export interface ProductSpec {
  text: string;
}

export interface Product {
  name: string;
  description: string;
  specs: string[];
  image: string;
  color: string;
  link: string;
}

// Team Types
export interface TeamMember {
  name: string;
  title: string;
  qualification: string;
  image: string;
  expertise: string[];
  color: string;
}

export interface Founder {
  name: string;
  title: string;
  qualification: string;
  image: string;
  bio: string;
  achievements: string[];
  social: {
    linkedin: string;
    email: string;
  };
}

// Client Types
export interface ClientLogo {
  src: string;
  alt: string;
}

// Statistics Types
export interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

// Form Types
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  [key: string]: string | undefined;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
}

// Service Types
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  color: string;
}

// Partnership Types
export interface PartnershipBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface PartnershipType {
  title: string;
  description: string;
  features: string[];
  color: string;
}

// Company Values Types
export interface CompanyValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Button Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Card Types
export interface CardProps extends BaseProps {
  hover?: boolean;
  gradient?: boolean;
  color?: string;
}

// Input Types
export interface InputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

// Section Types
export interface SectionProps extends BaseProps {
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

// Hero Types
export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

// Carousel Types
export interface CarouselProps<T> {
  items: T[];
  visibleItems?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}