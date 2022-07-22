import 'antd/dist/antd.less';
import { Button } from 'antd';

import './App.less';
import ContactCard from './components/contacts/ContactCard';

function App() {
  return (
    <>
      <ContactCard></ContactCard>
      <ContactCard></ContactCard>
      <ContactCard></ContactCard>
    </>
  );
}

export default App;
