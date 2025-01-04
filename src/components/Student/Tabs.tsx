import { FaEllipsisVertical } from 'react-icons/fa6';
import {
  StudentTabs,
  StudentTabsContainer,
  StudentTabsMoreContent,
  StudentTabsTooltip,
} from '@app/styles/StudentList';

type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <StudentTabsContainer>
      <StudentTabs>
        <div
          className={activeTab === 'StudentList' ? 'is-active' : ''}
          onClick={() => setActiveTab('StudentList')}
        >
          Student List
        </div>
        <div
          className={activeTab === 'Group' ? 'is-active' : ''}
          onClick={() => setActiveTab('Group')}
        >
          Group
        </div>
      </StudentTabs>
      <StudentTabsMoreContent>
        <FaEllipsisVertical />
        <StudentTabsTooltip>More Options</StudentTabsTooltip>
      </StudentTabsMoreContent>
    </StudentTabsContainer>
  );
};

export default Tabs;
