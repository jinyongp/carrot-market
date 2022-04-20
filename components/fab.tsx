import { useRouter } from 'next/router';
import React from 'react';

type FabProps = {
  path?: string;
  children?: React.ReactNode;
};

function Fab({ path, children }: FabProps) {
  const { push } = useRouter();

  return (
    <button
      onClick={() => path && push(path)}
      className="fixed bottom-20 right-8 bg-orange-500 hover:bg-orange-600 transition-colors text-white p-4 rounded-full pointer-cursor shadow-md"
    >
      {children}
    </button>
  );
}

export default React.memo(Fab);
