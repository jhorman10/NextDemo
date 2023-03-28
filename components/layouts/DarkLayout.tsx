import { FC } from 'react';

export const DarkLayout: FC = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h2>Dark-Layout</h2>
      {children}
    </div>
  );
};
