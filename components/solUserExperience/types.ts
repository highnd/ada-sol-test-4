export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface SolUserExperienceProps {
  title: string;
  testimonials: readonly Testimonial[];
}

