/**
 * Component-related type definitions
 */

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FirstViewProps extends ComponentProps {
  title?: string;
  subtitle?: string;
}

export interface NavigationProps extends ComponentProps {
  onMenuClick?: () => void;
}

export interface ProfileProps extends ComponentProps {
  name?: string;
  bio?: string;
  image?: string;
}

export interface SkillsProps extends ComponentProps {
  skills?: string[];
  category?: string;
}
