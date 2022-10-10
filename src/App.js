import React from 'react';
import Input from './components/Input';
import Output from './components/Output';
function App(){
return (
    <div className='wrapper'>
<h1 className="main-heading">Message Encrypter</h1><br/><br/>
<Input/>
<Output />
    </div>
)
};

export default App;