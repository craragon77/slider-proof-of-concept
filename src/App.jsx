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

  return (
    <div className="App">
      <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
        <SplitPane className="split-pane-row">
          <SplitPaneLeft>
            <SplitPane className="split-pane-col">
              <SplitPaneTop />
              <Divider className="separator-row" />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className="separator-col" />

          <SplitPaneRight />
        </SplitPane>
      </QuoteContext.Provider>
    </div>
  );
}

export default App;
