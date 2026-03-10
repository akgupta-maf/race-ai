export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ServiceItem {
  name: string;
  link: string;
}

export interface ServiceCategory {
  category: string;
  icon: string;
  image: string;
  items: ServiceItem[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  features?: Feature[];
  benefits?: Benefit[];
}
