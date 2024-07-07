import { Children, useState } from "react";
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    // let tabContent = 'Please click a button'
    function handleSelect(selectedButton) {
      // console.log(selectedButton)
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
    }

    return (
    <Section title="Examples" id="examples">
    <Tabs 
        buttonsContainer="menu"
        buttons={<><TabButton 
            isSelected={selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}
        >Components</TabButton>
        <TabButton
            isSelected={selectedTopic === 'jsx'} 
            onClick={() => handleSelect('jsx')}
        >JSX</TabButton>
        <TabButton
            isSelected={selectedTopic === 'props'} 
            onClick={() => handleSelect('props')}
        >Props</TabButton>
        <TabButton
            isSelected={selectedTopic === 'state'} 
            onClick={() => handleSelect('state')}
        >State</TabButton></>}>
    {!selectedTopic ? <p>Please select a topic</p> : null}
      {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
    </div>) : null}
    </Tabs>
    {/* <h2>Examples</h2> */}

    {/* {selectedTopic} */}
  </Section>
      );
}