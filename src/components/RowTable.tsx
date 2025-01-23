import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const RowTable = ({ name1, name2, noborder = true }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          height: '57px',
          borderBottom: noborder ? '1px solid #F9AB35' : '',
          color: '#fff',
          paddingLeft: '20px',
          gap: '5px',
        }}
      >
        <FaCheck color="#66CC33" />

        {name1}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          height: '57px',
          borderBottom: noborder ? '1px solid #F9AB35' : '',
          borderLeft: '1px solid #F9AB35',
          color: '#fff',
          paddingLeft: '20px',
          gap: '5px',
        }}
      >
        <FaCheck color="#66CC33" />
        {['Invalid. Perm. p/Acidente'].includes(name1) ? 'até' : null} {name2}
      </div>
    </div>
  );
};

export default RowTable;
