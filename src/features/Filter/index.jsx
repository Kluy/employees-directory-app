import React, { useState } from 'react';
import PositionTabs from './components/PositionTabs';
import SearchInput from './components/SearchInput';
import SortDialog from './components/SortDialog';
import Error from '../Error';

const Filter = ({
  onSetInput,
  onFilter,
  onSelectSortOption,
  input,
  sortOption,
  activePosition,
}) => {
  const [sortDialog, setSortDialog] = useState(false);

  const handleSortDialog = () => {
    document.body.style.overflow = sortDialog ? 'auto' : 'hidden';
    setSortDialog(!sortDialog);
  };

  const handleSortOptions = e => {
    if (e.target.id === 'close') {
      handleSortDialog();
    } else if (e.target.type === 'radio') {
      onSelectSortOption(e.target.id);
    } else return;
  };

  return (
    <>
      <SearchInput
        onSetInput={onSetInput}
        onOpenSortDialog={handleSortDialog}
        input={input}
        sortOption={sortOption}
      />
      <PositionTabs onFilter={onFilter} activePosition={activePosition} />
      <SortDialog
        onSortOptions={handleSortOptions}
        sortDialog={sortDialog}
        sortOption={sortOption}
      />
    </>
  );
};

export default Filter;
