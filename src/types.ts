export type Currency = 'USD' | 'VND';

export interface ServiceGroupItem {
  id: string;
  order: string;
  name: string;
  shortName: string;
  scope: string; // Phạm vi công việc
  deliverables: string; // Sản phẩm bàn giao
  deliverableBullets: string[];
  priceVndRange: string; // "2–4 triệu"
  priceUsdRange: string; // "$80–$160"
  unitVnd: string; // "/ dự án", "/ tháng", "/ kế hoạch"
  unitUsd: string;
  minVnd: number;
  maxVnd: number;
  minUsd: number;
  maxUsd: number;
  highlighted?: boolean;
}

export interface ServiceComboPackage {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  idealFor: string;
  priceVndDisplay: string;
  priceUsdDisplay: string;
  unit: string;
  includedServices: string[];
  features: string[];
  ctaText: string;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  client: string;
  aspect: 'portrait' | 'square';
  categories: string[];
  resultMetric: string;
  resultLabel: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  fullDeliverables: string[];
  founderQuote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatarSeed?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
