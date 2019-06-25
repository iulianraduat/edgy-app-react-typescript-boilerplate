import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'inline-block',
    margin: '0 10px'
  },
  label: {
    display: 'inline-block',
    marginLeft: 5
  },
  radioButton: {
    display: 'inline-block'
  }
};

const RadioButtonLayout: React.FC<RadioButtonLayoutProps> = React.memo(({ label, radioButton }) => (
  <div style={styles.container}>
    <div style={styles.radioButton}>{radioButton}</div>
    <div style={styles.label}>{label}</div>
  </div>
));

interface RadioButtonLayoutProps {
  label: JSX.Element;
  radioButton: JSX.Element;
}

export default RadioButtonLayout;
