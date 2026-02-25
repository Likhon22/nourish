/**
 * Content Type Definitions
 * Types for page content, cards, blocks, and data structures
 */

// ============================================
// BUSINESS TYPES
// ============================================

export interface Business {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface BusinessFeature {
  title: string;
  text: string;
}

export interface BusinessSegmentData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  featuresHeading?: string;
  features: BusinessFeature[];
}

// ============================================
// STORY/CARD TYPES
// ============================================

export interface StoryBlock {
  title: string;
  content: string;
  isBulletList?: boolean;
  bullets?: string[];
}

export interface StoryCardData {
  id: string;
  headline: string;
  subheadline: string;
  image: string;
  rightBlocks: StoryBlock[];
}

// ============================================
// TIMELINE TYPES
// ============================================

export interface TimelineEvent {
  id: string;
  title: string;
  bullets: string[];
}

// ============================================
// CONTENT BLOCK TYPES
// ============================================

export interface BulletItem {
  term?: string;
  text: string;
}

export interface ContentGroup {
  /** Small uppercase label with a thin divider line below it */
  sectionLabel?: string;
  /** A prose paragraph */
  paragraph?: string;
  /** Optional list of bullet items */
  bullets?: BulletItem[];
}

export interface ContentBlockData {
  id: string;
  /** Image path e.g. /img/business/business_farmers.jpg */
  image: string;
  /** Optional small uppercase text ABOVE the heading on the image */
  imageSubheading?: string;
  /** Large heading shown over the image */
  imageCaption: string;
  /** Large bold title in the LEFT column, with a thin underline */
  leftTitle: string;
  /** Ordered list of content groups in the RIGHT column */
  contentGroups: ContentGroup[];
  /** Optional pull-quote box at the bottom of the right column */
  quote?: string;
}

// ============================================
// METRICS/IMPACT TYPES
// ============================================

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export interface SustainabilityMetric {
  value: string;
  label: string;
  description: string;
}

// ============================================
// SUSTAINABILITY TYPES
// ============================================

export interface SustainabilityPillar {
  id: string;
  title: string;
  description: string;
  image: string;
}
