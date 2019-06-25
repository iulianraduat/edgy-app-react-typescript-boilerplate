import React from 'react';
import RadioButton from './RadioButton';

const ApiKeyRadioButton: React.FC<ApiKeyRadioButtonProps> = React.memo(({ isChecked, onClick }) => (
  <RadioButton groupId="apiKey" label="a normal ApiKey" isChecked={isChecked} onChange={onClick} />
));

interface ApiKeyRadioButtonProps {
  isChecked: boolean;
  onClick: () => void;
}

export default ApiKeyRadioButton;
