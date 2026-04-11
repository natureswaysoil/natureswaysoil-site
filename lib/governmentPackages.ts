export type GovernmentPackage = {
  slug: string;
  name: string;
  priceCents: number;
  rangeLabel: string;
  tagline: string;
  includes: string[];
  outcomes: string[];
};

export const governmentPackages: Record<string, GovernmentPackage> = {
  small: {
    slug: 'small',
    name: 'Targeted Lawn Repair Program',
    priceCents: 149500,
    rangeLabel: '$1,495 starting price',
    tagline:
      'Fast-response turf repair for military housing, pet areas, entryways, and visible damage zones.',
    includes: [
      'Dog urine neutralizer for soil-level recovery',
      'Lawn fertilizer to support regrowth and root recovery',
      'Application instructions for hose-end or spray use',
      'Recommended treatment sequence for repeat applications',
    ],
    outcomes: [
      'Reduces turf replacement costs in small damaged areas',
      'Improves appearance in high-visibility housing zones',
      'Supports faster recovery than untreated areas',
    ],
  },
  medium: {
    slug: 'medium',
    name: 'Grounds Health & Fertility Program',
    priceCents: 595000,
    rangeLabel: '$5,950 starting price',
    tagline:
      'Built for parks, base grounds, campuses, and recurring maintenance zones that need stronger soil performance.',
    includes: [
      'Liquid biochar for carbon-rich soil support',
      'Humic + fulvic + kelp inputs to improve nutrient uptake and plant vigor',
      'Program schedule for phased applications across a 4–8 week window',
      'Recommended use guidance for maintenance teams or contractors',
    ],
    outcomes: [
      'Improves nutrient retention and helps reduce fertilizer runoff',
      'Supports healthier turf under heat, traffic, and drought stress',
      'Can support disturbed soils around construction and grounds repair zones',
    ],
  },
  large: {
    slug: 'large',
    name: 'Full Soil Restoration & Regeneration Program',
    priceCents: 985000,
    rangeLabel: '$9,850 starting price',
    tagline:
      'Created for larger sites that need a stronger recovery plan, including degraded turf and construction-disturbed areas.',
    includes: [
      'Bulk liquid biochar and soil-support inputs sized to project scope',
      'Multi-application plan with phased treatment recommendations',
      'Ongoing supply structure for repeat applications',
      'Direct coordination support for contractors or facility teams',
    ],
    outcomes: [
      'Rebuilds degraded soil systems and improves long-term turf sustainability',
      'Helps reduce dependence on repeated re-sodding and heavy chemical inputs',
      'Improves nutrient holding capacity and can help reduce runoff pressure',
      'Useful for construction recovery, disturbed soils, and broader restoration planning',
    ],
  },
};

export const governmentPackageList = Object.values(governmentPackages);
