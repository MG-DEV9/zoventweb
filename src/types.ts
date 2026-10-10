export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  fullOverview?: string;
  deliverables?: string[];
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  delegates?: string;
  duration?: string;
  location?: string;
  client?: string;
  scope?: string[];
  metrics?: { label: string; value: string }[];
  extendedText?: string;
}

export interface HolidayDestination {
  id: string;
  region: string;
  nights: string;
  title: string;
  summary: string;
  image: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  curatedStays: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
