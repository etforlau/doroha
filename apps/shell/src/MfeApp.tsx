import React, { Suspense } from 'react';
import type { MFEEntry } from './mfeRegister';
import NavMenu from './NavMenu';

const MfeApp: React.FC<{ mfe: MFEEntry }> = ({ mfe }) => {
  const RemoteApp = mfe.component;
  return (
    <Suspense fallback={<div>Loading {mfe.name}...</div>}>
      <NavMenu />
      <RemoteApp />
    </Suspense>
  );
};

export default MfeApp;
