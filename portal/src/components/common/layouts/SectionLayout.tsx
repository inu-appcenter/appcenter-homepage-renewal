import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
};
const SectionLayout: React.FC<SectionLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <div className={'relative flex flex-col p-8 min-h-svh ' + className}>
      {children}
    </div>
  );
};

export default SectionLayout;
