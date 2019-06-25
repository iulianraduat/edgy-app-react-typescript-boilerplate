import EdgyApi, { Mock } from 'edgy-api';
import React, { useState } from 'react';
import mockApiData from './api/MockApiData';
import AnAppCfgRadioButton from './components/AnAppCfgRadioButton';
import AnAppRadioButton from './components/AnAppRadioButton';
import ApiKeyRadioButton from './components/ApiKeyRadioButton';
import PermalinkRadioButton from './components/PermalinkRadioButton';

const styles: { [key: string]: React.CSSProperties } = {
  appCfg: {
    display: 'inline-block',
    textAlign: 'left'
  },
  container: {
    textAlign: 'center'
  },
  header: {
    fontSize: '2vw',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  link: {
    cursor: 'pointer',
    fontStyle: 'italic',
    textDecoration: 'underline'
  },
  preview: {
    marginTop: 20
  },
  text: {
    fontSize: '1vw'
  }
};

const App: React.FC<AppProps> = () => {
  const [isApp, setIsApp] = useState<boolean>(true);
  const [isPermalink, setIsPermalink] = useState<boolean>(false);

  const mockData: Mock = {
    ...mockApiData,
    AppType: isApp ? 'APP' : 'APP-CFG',
    ApiKey: isPermalink
      ? '$appId.12345678.20190131112233'
      : '1234123456781234abcdefghi'
  };

  const Api = new EdgyApi(mockData);

  const simulateApp = () => setIsApp(true);
  const simulateAppCfg = () => setIsApp(false);
  const simulateApiKey = () => setIsPermalink(false);
  const simulatePermalink = () => setIsPermalink(true);

  return (
    <div style={styles.container}>
      <header style={styles.header}>My μApp</header>

      <p style={styles.text}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <div>
        Simulate
        <AnAppRadioButton isChecked={isApp} onClick={simulateApp} />
        <AnAppCfgRadioButton isChecked={!isApp} onClick={simulateAppCfg} />
      </div>
      <div>
        Simulate
        <ApiKeyRadioButton isChecked={!isPermalink} onClick={simulateApiKey} />
        <PermalinkRadioButton isChecked={isPermalink} onClick={simulatePermalink} />
      </div>

      <div style={styles.preview}>
        <div>
          ApiKey '{Api.getApiKey()}' is {Api.isPermalinkApiKey() ? 'a permalink' : 'a normal ApiKey'}
        </div>
        <div>This is {Api.isAppCfg() ? 'a customized App with the configuration:' : 'an App'}</div>
        {renderAppCfg(Api)}
        <div>
          Apps version is {Api.getAppVersion()} and it is {Api.isAppLatestVersion() ? '' : 'not '}
          the latest version.
        </div>
        <div>You are identified as: {Api.getMySignature()}</div>
        <div>The current section is: '{Api.getAppSection()}' (add a path in URL to see the section)</div>
      </div>

      <p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Learn React
        </a>
      </p>
    </div>
  );
};

const renderAppCfg = (Api: EdgyApi) => {
  if (Api.isAppCfg() === false) {
    return;
  }

  return <pre style={styles.appCfg}>{JSON.stringify(Api.getAppCfg(), undefined, 2)}</pre>;
};

interface AppProps {}

export default App;
