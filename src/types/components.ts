/**
 * Component-related type definitions
 */

import React from "react";

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

export type SkillCardProps = {
  name: string;
  proficiency?: number;
  icon?: React.ReactNode;
};

export type ExpertiseCardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};
