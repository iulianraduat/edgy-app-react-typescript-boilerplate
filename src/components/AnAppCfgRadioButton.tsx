import React from 'react';
import RadioButton from './RadioButton';

const AnAppCfgRadioButton: React.FC<AnAppCfgRadioButtonProps> = React.memo(({ isChecked, onClick }) => (
  <RadioButton groupId="appType" label="a customized App" isChecked={isChecked} onChange={onClick} />
));

interface AnAppCfgRadioButtonProps {
  isChecked: boolean;
  onClick: () => void;
}

export default AnAppCfgRadioButton;
