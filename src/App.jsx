import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./components/SplitPane";
import { useState } from "react";
import './App.css';
import QuoteContext from "./components/QuoteContext";

const quotes = [
  {
    id: 1,
    content: 'Good Morning, Dave',
    
  },
  {
    id: 2,
    content: 'How are you feeling today?'
  }
];



function App() {
  const [currQuote, setCurrQuote] = useState(1);
  /*
    ok ok ok this website is where this proof of concept is from
  */
  return (
    <div className="App">
      <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
        {/* parent */}
        <SplitPane className="split-pane-row">
          {/* \left */}
          <SplitPaneLeft>
            <SplitPane className="split-pane-col">
              <SplitPaneTop />
              <Divider className="separator-row" />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          {/* diviver */}
          <Divider className="separator-col" />
          {/* right */}
          <SplitPaneRight />
        </SplitPane>
      </QuoteContext.Provider>
    </div>
  );
}

export default App;
