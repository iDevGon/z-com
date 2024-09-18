import { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>홈 레이아웃</div>
      {children}
    </div>
  );
}
