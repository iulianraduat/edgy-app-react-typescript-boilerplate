import React from 'react';
import RadioButton from './RadioButton';

const AnAppRadioButton: React.FC<AnAppRadioButtonProps> = React.memo(({ isChecked, onClick }) => (
  <RadioButton groupId="appType" label="an App" isChecked={isChecked} onChange={onClick} />
));

interface AnAppRadioButtonProps {
  isChecked: boolean;
  onClick: () => void;
}

export default AnAppRadioButton;
