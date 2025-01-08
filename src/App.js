import './App.css';

const styletext = { fontWeight: "bold" } 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frequently Asked Questions</h1>
        <p>Browse through the most frequently asked questions</p>
      </header>
      <div className="App-body">
        <h2>How can I track my order?</h2>
        <p>You can track your order using the following steps</p>
        <ol>
          <li>Go to the Order <a href="#">Tracking page</a>.</li>
          <li>Enter your order number and email address.</li>
          <li>Click on the Track Order button to view the current status of your shipment.</li>
        </ol>
        <p>If you encounter any issues, please visit our <a href="#">Help Center</a>.</p>
        <br />
        <hr className='separator'/>
        <br />
        <h2>What is your return policy?</h2>
        <p>We offer a 30-day return policy on most items. Here are some key points</p>
        <ul>
          <li><span style={styletext}>Items must be in original condition:</span> Unworn, unused, and unwashed</li>
          <li><span style={styletext}>Include original packaging and tags:</span> All items should be returned with their original packaging and tags.</li>
          <li><span style={styletext}>Proof of purchase:</span> A receipt or proof of purchase is required.</li>
        </ul>
        <p>For more detailed information, read our full <a href="#">Return Policy</a>.</p>
      </div>
    </div>
  );
}

export default App;
