import React from 'react';
import RadioButtonLayout from './RadioButtonLayout';

const RadioButton: React.FC<RadioButtonProps> = React.memo(({ isChecked, groupId, label, onChange }) => (
  <RadioButtonLayout
    radioButton={<input type="radio" name={groupId} checked={isChecked} disabled={isChecked} onChange={onChange} />}
    label={<span>{label}</span>}
  />
));

interface RadioButtonProps {
  isChecked: boolean;
  groupId: string;
  label: string;
  onChange: () => void;
}

export default RadioButton;
