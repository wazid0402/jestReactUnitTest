import { useEffect, useState } from 'react';
import './App.css';
import bike from './asset/tvsBike.jpg'
import Users from './Users';
import TestFunction from './TestFunction';
import Compoprops from './Compoprops';

function App() {
  const [data, setData] = useState("");
  const [name, setName] = useState(""); // For onChange event
  const [name1, setName1] = useState(""); // For act function
  // const [data, setData] = useState(false);  // for findBy testing
  // useEffect(()=>{           // for findBy testing. This will change the state of the data after 2 second.
  //   setTimeout(()=>{        // Here we see Initially "Data not found" will come on screen
  //     setData(true)         // and thus "Data Found" is not yet rendered to the screen
  //   }, 2000);               // For this kind of senario we use findBy
  // })
  const login = false;
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
        <p> Hello Wazid</p><br></br>
        <input type='text' placeholder='Enter User Name' name='username' id='userId' readOnly value='wazid hussain' /> <br></br>
        <img title='love harley bike' alt='bike' src={bike} height="400px" width="400px" /><br></br>
        <button onClick={()=>setData('Updated Data')}>Update Data</button>
        <h1>{data}</h1>
        <Users /><br></br>
        <TestFunction />
        <br></br>
        <h1>For Unit testing when we have multiple role i.e multiple inputBox or Multiple Button</h1>
        <button>Click 1</button>
        <button>Click 2</button><br></br>
        <label htmlFor='input1'>User Name</label>
        <input type='text' id='input1' /><br></br>
        <label htmlFor='input2'>Password</label>
        <input type='text' id='input2' />
        {/* If we add more then one button which is exact similar means id, value and all other attribute is
        similar then we need to use getAllByRole for unit testing. */}
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <br></br>
        <h3>Select Box</h3>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select><br></br>
        <h3>Testing using getByLablelText For Input and checkbox</h3>
        <label htmlFor='user-name'>UserName</label>
        <input type='text' id='user-name' defaultValue={'WazidHussain'}></input>
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' defaultValue={'12345'}></input>
        <br></br>
        <label htmlFor='skills'>Skills</label>
        <input type='checkbox' id='skills' defaultChecked={true}></input><br></br>
        <h3>Tesing using getByPlaceholderText and getAllByPlaceholderText</h3>
        <input type='text' placeholder='enter username' defaultValue={'wazidPlaceholder'}></input><br></br>
        <input type='text' placeholder='for testing multiple inputs' defaultValue={'wazidPlaceholder'}></input>
        <input type='text' placeholder='for testing multiple inputs' defaultValue={'wazidPlaceholder'}></input>
        <input type='text' placeholder='for testing multiple inputs' defaultValue={'wazidPlaceholder'}></input>
        <h3>Testing using getByText and getAllByText</h3>
        <button>Test1234</button>
        <button>Test123</button>
        <button>Test123</button>
        <h4>Test12345</h4>
        <h4>Test123</h4>
        <h4>Test123</h4>
        <p className='paraClass' id='pid'>Test123456</p>
        <p>Test123</p>
        <p>Test123</p>
        <h3>Testing using getByTestId and getAllByTestId</h3>
        <div data-testId="mydivid1">Hello</div>
        <div data-testId="mydivid2">Hello</div>
        <h data-testId="myhid1">Hello</h>
        <h data-testId="myhid2">Hello</h>
        <div data-testId="mydivid3">Hello</div>
        <div data-testId="mydivid3">Hello</div>
        <div data-testId="mydivid3">Hello</div>
        <div data-testId="mydivid3">Hello</div>
        <h3>Overriding data-testId</h3>
        <div element-testId="mydividtest">Hello Wazid Test</div>
        <h3>Testing using getByDisplayValue and getAllByDisplayValue</h3>
        <input type='text' defaultValue={'anil'}></input>
        <input type='text' defaultValue={'roshan'}></input>
        <input type='text' defaultValue={'roshan'}></input>
        <h3>Testing using getByTitle and getAllByTitle</h3>
        <button title='click me'>Click</button>
        <button title='UpdateBtn'>Click</button>
        <button title='UpdateBtn'>Click</button>
        <span title='No Entry'>&#9940;</span>
        <h3>Testing using getByAltText and getAllByAltText</h3>
        <img src='./test.png' alt='test image' />
        <img src='./test.png' alt='testmultiple image' />
        <img src='./test.png' alt='testmultiple image' />
        <h3>Adding button to test the negative test cases</h3>
        <button data-testid='testSubmitBtn' className='myBtnTestClass'>Submit</button>
        <h3>Testing for text match with string and regex using getByText</h3>
        <div>Hello Champion</div>
        <h3>For text Match with functions</h3>
        <div>Army Country1</div>
        <div>Business Country</div>
        <div>Business Country</div>
        <h3>For Testing queryByText and queryAllByText</h3>
        {/* {
          login?<button>Logout</button>:<button>Login</button>
        } */}
        <h3>For Testing findByText and findAllByText</h3>
        {/* We use this when it take sometime to load the data onto the UI */}
        {
          data?<h2>Data Found</h2>:<h2>Data Not Found</h2>
        }
        <h3>Very Important Note</h3>
        <div>
         React Testing library mainly have 3 kinds of method i.e <br></br>
         getBy, queryBy and findBy
        </div>
        <h3>Testing with Custom Query</h3>
        <div id='custom-id' style={{color: "red"}}>Hello India</div>
        <div className='custom-class' style={{color: "blue"}}>Hello Bharat</div>
        <h3>Quering within Elements - Find element within element</h3>
        <h4>This senario is like parent is having child element and we want to test that child element</h4>
        <div>
          Hello Parent
          <p>Hello Child 1</p>
          <p>Hello Child 2</p>
          <p>Hello Child 3</p>
        </div>
        <h3>Testing with User Event Library</h3>
        <h4>User Event library comes automatically with @testing-library/react, Firstly update this User
          Event library and then starts working
        </h4>
        <button onClick={()=>setData("Testing event using User Event Library")}>User Event Library</button>
        <h3>onChange event testing using userEvent</h3>
        <center>{name}</center>
        <input type='text' onChange={(e)=> setName(e.target.value)} placeholder='Enter Name'></input><br></br>
        <h3>Using act function for state change</h3>
        <center>{name1}</center>
        <input type='text' onChange={(e)=> setName1(e.target.value)} placeholder='Change Name State'></input><br></br>
        <h3>Testing of Component props</h3>
        <Compoprops city='Hyderabad' />
      </header>
    </div>
  );
}

export default App;
