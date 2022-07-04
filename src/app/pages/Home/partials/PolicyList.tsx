import React from 'react';
import PolicyItem from './PolicyItem';
import { dataPolicy } from '../../../shared/constant/policy';

const PolicyList = () => {
  return (
    <ul className="policy-list">
      {dataPolicy.map((policy, idx) => {
        return <PolicyItem key={idx} policy={policy} />;
      })}
    </ul>
  );
};

export default PolicyList;
