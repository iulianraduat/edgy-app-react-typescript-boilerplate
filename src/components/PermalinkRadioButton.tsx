import React from 'react';
import RadioButton from './RadioButton';

const PermalinkRadioButton: React.FC<PermalinkRadioButtonProps> = React.memo(({ isChecked, onClick }) => (
  <RadioButton groupId="apiKey" label="a Permalink" isChecked={isChecked} onChange={onClick} />
));

interface PermalinkRadioButtonProps {
  isChecked: boolean;
  onClick: () => void;
}

export default PermalinkRadioButton;
