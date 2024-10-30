import React from 'react';
import Skeleton from './Skeleton';

const SkeletonList = ({ quantity }) => {
  const skeletonList = new Array(quantity).fill(1);

  return (
    <section className="section">
      <ul>
        {skeletonList.map(() => (
          <li>
            <Skeleton />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkeletonList;
