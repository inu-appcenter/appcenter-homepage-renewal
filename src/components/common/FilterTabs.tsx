import { Link, useLocation } from 'react-router-dom';
import { Tab, TabList, Tabs } from '@chakra-ui/react';

type FilterTabsProps = {
  tabList: { label: string; path: string }[];
};

const FilterTabs: React.FC<FilterTabsProps> = ({ tabList }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <Tabs variant='soft-rounded'>
      <TabList>
        {tabList.map(({ label, path }) => (
          <Link key={path} to={`${path}?year=${queryParams.get('year')}`}>
            <Tab>{label}</Tab>
          </Link>
        ))}
      </TabList>
    </Tabs>
  );
};

export default FilterTabs;
