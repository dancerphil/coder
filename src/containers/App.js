import React from 'react';
import Global from "./Global";
import Header from './Header';
import HeaderModal from './HeaderModal';
import EditorConnect from './EditorConnect';
import Resize from './Resize';
import Console from './Console';
import FeatureList from './FeatureList';
import AutoSave from './AutoSave'

const App = () => {
  return (
    <Global>
      <Header />
      <HeaderModal/>
      <EditorConnect />
      <Resize />
      <Console />
      <FeatureList />
      <AutoSave />
    </Global>
  );
}

export default App;
