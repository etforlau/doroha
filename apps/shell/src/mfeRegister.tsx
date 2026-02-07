import React from 'react';

export type MFEEntry = {
  name: string;
  route: string;
  component: React.LazyExoticComponent<React.FC>;
};

export const MFEs: MFEEntry[] = [
  {
    name: 'Roadmap',
    route: '/roadmap',
    component: React.lazy(() => import('roadmap/RoadmapApp')),
  },
];
