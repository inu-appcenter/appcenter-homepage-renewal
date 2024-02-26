import { MENU } from '@constants/menu.ts';
import FilterTabs from '@components/common/FilterTabs.tsx';

const FaqPartList = MENU.find(({ label }) => label === 'FAQ')?.children ?? [];

const FaqDetailTabs = () => {
  return <FilterTabs tabList={FaqPartList} />;
};

export default FaqDetailTabs;
