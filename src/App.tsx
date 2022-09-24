import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { AutoComplete } from './components/auto-complete';
import { Button } from './components/button';
import { Checkbox } from './components/checkbox';
import { Dropdown } from './components/dropdown';
import { IconButton } from './components/icon-button';
import { Input } from './components/input';
import { Radio } from './components/radio';
import { StyleClassEnum } from './data/style-class.enum';
import { AiFillShop, AiFillAlert } from 'solid-icons/ai';
import { ListView } from './assets/list-view';
import { TextArea } from './components/text-area';
import { Tree } from './components/tree';

const data = {
  value: 'node1',
  children: [
    {
      value: 'node2',
      children: [
        {
          value: 'node2-1',
          children: [
            {
              value: 'node2-1-1',
              children: [],
            },
          ],
        },
        {
          value: 'node2-2',
          children: [
            {
              value: 'node2-2-1',
              children: [],
            },
          ],
        },
        {
          value: 'node2-3',
          children: [],
        },
      ],
    },
    {
      value: 'node3',
      children: [],
    },
  ],
};

const App: Component = () => {
  const arr = ['hello', 'wassup', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'];
  const arr2 = ['hello', 'wassup', '2'];
  const arr3 = [
    { label: 'abb', value: 123 },
    { label: 'bbbb', value: '123' },
    { label: 'aaaaa', value: '123' },
    { label: 'aaaaa', value: '123' },
    { label: 'ss', value: [] },
  ];

  const [dropdownValue, setDropdownValue] = createSignal(arr[0]);
  const [autoCompleteValue, setAutoCompleteValue] = createSignal(arr3[0]);
  const [isChecked, setIsChecked] = createSignal(false);

  const radioItems1 = [
    { label: 'hi', value: 123 },
    { label: 'wassup', value: 321 },
  ];
  const [radio1, setRadio1] = createSignal(radioItems1[0]);
  const [radio2, setRadio2] = createSignal(radioItems1[0]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px' }}>
        <Button value="Ok" styleClass={StyleClassEnum.Primary} />
        <br />
        <Button
          value="Cancel"
          styleClass={StyleClassEnum.Secondary}
          onClick={() => console.log('clicked second btn')}
        />
        <br />
        <br />
        <br />
        <Dropdown
          value={dropdownValue()}
          items={arr}
          onChange={item => setDropdownValue(item)}
          styleClass={StyleClassEnum.Primary}
        />
        <br />
        <Dropdown
          value={dropdownValue()}
          items={arr2}
          onChange={item => setDropdownValue(item)}
          styleClass={StyleClassEnum.Secondary}
        />
        <br />
        <br />
        <br />
        <Checkbox
          labelText="This is checkbox with text"
          styleClass={StyleClassEnum.Primary}
          isChecked={isChecked()}
          onChange={e => setIsChecked(e)}
        />
        <br />
        <Checkbox styleClass={StyleClassEnum.Secondary} isChecked={isChecked()} onChange={e => setIsChecked(e)} />
        <br />
        <br />
        <br />
        <br />
        <Radio
          value={radio1}
          items={radioItems1}
          onChange={itemVal => setRadio1(itemVal)}
          styleClass={StyleClassEnum.Primary}
        />
        <br />
        <Radio
          value={radio2}
          items={radioItems1}
          onChange={itemVal => setRadio2(itemVal)}
          styleClass={StyleClassEnum.Secondary}
        />
        <br />
        <br />
        <Input value="hahah" styleClass={StyleClassEnum.Primary} />
        <br />
        <Input styleClass={StyleClassEnum.Secondary} onChange={val => console.log(val)} />
        <br />
        <Input styleClass={StyleClassEnum.Primary} endButtonIcon={<AiFillShop />} />
        <br />
        <Input styleClass={StyleClassEnum.Secondary} endButtonIcon={<AiFillShop />} />
        <br />
        <Input styleClass={StyleClassEnum.Secondary} endIcon={<AiFillAlert />} />
        <br />
        <Input styleClass={StyleClassEnum.Primary} endButtonText="Primary" />
        <br />
        <Input styleClass={StyleClassEnum.Secondary} endButtonText="Search" />
      </div>
      <div style={{ 'margin-left': '30px', width: '250px' }}>
        <AutoComplete
          value={autoCompleteValue()}
          items={arr3}
          onChange={item => setAutoCompleteValue(item)}
          styleClass={StyleClassEnum.Primary}
        />
        <br />
        <br />
        <IconButton styleClass={StyleClassEnum.Primary}>
          <AiFillShop />
        </IconButton>
        <br />
        <IconButton styleClass={StyleClassEnum.Secondary}>
          <AiFillAlert />
        </IconButton>
        <br />
        <br />
        <ListView styleClass={StyleClassEnum.Primary} data={arr3} />
        <br />
        <ListView
          styleClass={StyleClassEnum.Secondary}
          data={arr3}
          onClick={e => {
            console.log(e);
          }}
        />
      </div>
      <div style={{ 'margin-left': '30px', width: '300px' }}>
        <TextArea styleClass={StyleClassEnum.Primary} row={8} />
        <br />
        <TextArea styleClass={StyleClassEnum.Secondary} row={5} value="Hello this is text" />
        <br />
        <Tree data={data} />
      </div>
    </div>
  );
};

export default App;
