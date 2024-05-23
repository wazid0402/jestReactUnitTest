import {fireEvent, render, screen, configure, within, logRoles} from '@testing-library/react';
import App from './App'
import Users from './Users';
import TestRenderer from 'react-test-renderer';
import TestFunction from './TestFunction';
import HandleOtherFunction from './helper';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import Compoprops from './Compoprops';

//configure({testIdAttribute: 'element-testId'}); // for overriding data-testId

// beforeAll run once before all test cases
// beforeAll(()=>{
//   console.log('*****before all******');
// })

// beforeEach runs before each test cases
// beforeEach (()=>{
//   console.log('******before each******')
// })

// afterAll run once after all test cases
// afterAll(()=>{
//   console.log('******after all**********');
// })

//aterEach run after each test cases
// afterEach(()=>{
//   console.log('**********after each***********');
// })


describe('Testing App component', ()=>{
  // Test the text rendering on screen
  it('screen has hello wazid text', ()=>{
    render(<App />)
    let text = screen.getByText('Hello Wazid'); //we use i for case insensetive
    expect(text).toBeInTheDocument();
  })
  // Test the image tag
  it('should have image with title', ()=>{
    render(<App />)
    let title = screen.getByTitle('love harley bike');
    expect(title).toBeInTheDocument();
  })
  // Test the input box
  // it('test input box', ()=>{
  //   render(<App />)
  //   let input = screen.getByRole('textbox');
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveAttribute('name', 'username');
  //   expect(input).toHaveAttribute('id', 'userId');
  //   expect(input).toHaveAttribute('value', 'wazid hussain');
  //   // expect(input).toHaveValue('wazid hussain');
  //   // expect(input).toBeDisabled();
  // })

  // Test the Input placeholder
  it('test input placeholder', ()=>{
    render(<App />)
    let checkPlaceHolder = screen.getByPlaceholderText('Enter User Name');
    expect(checkPlaceHolder).toBeInTheDocument();
  })
  // Test the Click Event
  // it('test button click event', ()=>{
  //   render(<App />)
  //   let btn = screen.getByRole('button');
  //   fireEvent.click(btn);
  //   expect(screen.getByText('Updated Data')).toBeInTheDocument();
  // })
  // use __test__ folder and then you can keep all testing file here without .test.js extension.

  // Testing getUsersList function present in Users.js
  // it('Testing getUsersList function present in Users.js', ()=>{
  //     const componentData = TestRenderer.create(<Users />).getInstance();
  //     expect(componentData.getUserDetails).toMatch('User list');
  // })

  // We Only test the function which is attached to events. If the function is isolated or not 
  // attached to any events then we don't test that function.
  // here we are going to test the handleData function of TestFunction component which is attached
  // to click events.
  it('Testing the handleData function attached to click event',()=>{
    render(<TestFunction />)
    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText('Set Data is called')).toBeInTheDocument();
  })

  // If the function is not attached to any events then keep that function seperately say in some
  // js file for example helper.js file and then test that function.
  // Here testing the HandleOtherFunction of helper.js file seperately
  it('Testing HandleOtherFunction of helper file seperately', ()=>{
    expect(HandleOtherFunction()).toMatch('Hi')
  })

  // Using getByRole when we have multiple button
  it('Testing multiple button', ()=>{
    render(<App />)
    const btn1 = screen.getByRole('button', {name: 'Click 1'})
    const btn2 = screen.getByRole('button', {name: 'Click 2'})
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
  })

  // Using getByRole when we have multiple input
  it('Testing multiple input', ()=>{
    render(<App />)
    const input1 = screen.getByRole('textbox', {name: 'User Name'});
    const input2 = screen.getByRole('textbox', {name: 'Password'})
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
  })

  // When we have multiple buttons and all the similar without any differece the we use getAllByRole.
  // getAllByRole always returns an array and thus you need to use for loop in which you write expect
  it('Testing getAllByRole', ()=>{
    render(<App />)
    const btns = screen.getAllByRole('button');
    for(let i=0; i<btns.length-1; i++){
      expect(btns[i]).toBeInTheDocument();
    }
  })

  // Testing for select option using getAllByRole
  it('Testing Select option using getAllByRole', ()=>{
    render(<App />)
    const selectOptions = screen.getAllByRole('option');
    for(let i=0; i<selectOptions.length-1; i++){
      expect(selectOptions[i]).toBeInTheDocument();
    }
  })

  // Testing using getByLablelText
  it('Testing Input Box using getLabelByText',()=>{
    render(<App />)
    const userName = screen.getByLabelText('UserName');
    expect(userName).toBeInTheDocument();
    expect(userName).toHaveValue('WazidHussain');
    const checkBox = screen.getByLabelText('Skills');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toBeChecked();
     // const passWord = screen.getByLabelText('Password');
    // expect(passWord).toBeInTheDocument();
    // expect(passWord).toHaveValue('12345');
  })
  // Use getAllByLablelText in a similar way you use getAllByRole

  // Use getByPlaceholderText and getAllByPlaceholderText. 
  // We mostly use this with input and checkbox where we use to have placeholder.
  it('testing for single and multiple input fields with placeholder', ()=>{
    render(<App />)
    const placeHol = screen.getByPlaceholderText('enter username');
    expect(placeHol).toBeInTheDocument();
    expect(placeHol).toHaveValue('wazidPlaceholder');

    const placeHols = screen.getAllByPlaceholderText('for testing multiple inputs');
    for(let i=0; i<placeHols.length-1; i++){
      expect(placeHols[i]).toBeInTheDocument();
      expect(placeHols[i]).toHaveValue('wazidPlaceholder');
    }
  })

  // getByText - used with single html elements, example for button, h and p tag.
  // getAllByText - used when we multiple similar html elements, example for button, h and p tag.
  it('testing getByText and getAllByText', ()=>{
    render(<App />)
    const testBtn = screen.getByText('Test1234');
    expect(testBtn).toBeInTheDocument();
    const testh = screen.getByText('Test12345');
    expect(testh).toBeInTheDocument();
    const testp = screen.getByText('Test123456');
    expect(testp).toBeInTheDocument();
    expect(testp).toHaveClass('paraClass');
    expect(testp).toHaveAttribute('id');

    const multiTexts = screen.getAllByText('Test123');
    for(let i=0; i<multiTexts.length-1; i++){
      expect(multiTexts[i]).toBeInTheDocument();
    }
  }) 

  // Using getByTestId and getAllByTestId
  // We can give data-testId to each and every element and can test that element using this data-testId.
  // Scnario may come where we will have many similar data-testId and in that case we use getAllByTestId.
  it('testing using getByTestId and getAllByTestId', ()=>{
    render(<App />)
    const divElement1 = screen.getByTestId('mydivid1');
    const divElement2 = screen.getByTestId('mydivid2');
    const hElement1 = screen.getByTestId('myhid1');
    const hElement2 = screen.getByTestId('myhid2');
    expect(divElement1).toBeInTheDocument();
    expect(divElement2).toBeInTheDocument();
    expect(hElement1).toBeInTheDocument();
    expect(hElement2).toBeInTheDocument();

    const multipleDivElements = screen.getAllByTestId('mydivid3');
    for(let i=0; i<multipleDivElements.length-1; i++){
      expect(multipleDivElements[i]).toBeInTheDocument();
    }
  })

  // We can override data-testId with any other name. For here say - element-testId (but it can be anything)
  // We override using react testing library configure method
  // check configure method above
  // it('testing after overriding data-testId', ()=>{
  //   render(<App />)
  //   const divEle = screen.getByTestId('mydividtest');
  //   expect(divEle).toBeInTheDocument();
  // })

  // Testing using getByDisplayValue and getAllByDisplayValue
  // When we want to test using the value we use getByDisplayValue
  // When value is same for multiple element then we use getAllByDisplayValue
  // We can use this input, textarea, radio, checkbox, select etc.
  it('testing using getByDisplayValue and getAllByDisplayValue', ()=>{
    render(<App />)
    const inputdisplay = screen.getByDisplayValue('anil');
    expect(inputdisplay).toBeInTheDocument();
    expect(inputdisplay).toHaveValue('anil');

    const inputmultipledisplay = screen.getAllByDisplayValue('roshan');
    for(let i=0; i<inputmultipledisplay.length-1; i++){
    expect(inputmultipledisplay[i]).toBeInTheDocument();
    expect(inputmultipledisplay[i]).toHaveValue('roshan');
    }
  })
  // Testing using getByTitle and getAllByTitle
  // We can use this to test the title attribute
  it('testing using getByTitle and getAllByTitle', ()=>{
    render(<App />)
    const btnTitle = screen.getByTitle('click me');
    expect(btnTitle).toBeInTheDocument();
    const spanTitle = screen.getByTitle('No Entry');
    expect(spanTitle).toBeInTheDocument();

    const multipleTitleBtns = screen.getAllByTitle('UpdateBtn');
    for(let i=0; i<multipleTitleBtns.length-1; i++){
      expect(multipleTitleBtns[i]).toBeInTheDocument();
    }
  })
  // Testing using getByAltText and getAllByAltText
  // Mostly we use this for image tag where we have alt attribute
  it('testing using getByAltText and getAllByAltText', ()=>{
    render(<App />)
    const imageAlt = screen.getByAltText('test image');
    expect(imageAlt).toBeInTheDocument();

    const multipleImageAlts = screen.getAllByAltText('testmultiple image');
    for(let i=0; i<multipleImageAlts.length-1; i++){
      expect(multipleImageAlts[i]).toBeInTheDocument();
    }
  })
  // Testing negative test cases
  it('testing btn negative test cases', ()=>{
    render(<App />)
    const btnNegTest = screen.getByTestId('testSubmitBtn');
    expect(btnNegTest).not.toHaveClass('myBtnTestClass123');
    expect(btnNegTest).not.toHaveAttribute('id');
  })
  // Testing div element with string
  it('testing div with string', ()=>{
    render(<App />)
    const testDivWithString = screen.getByText('Hello Champion');
    const testDivWithString1 = screen.getByText('hello Champion', {exact: false}); // To make case insensitive
    const testDivWithString2 = screen.getByText('hello Cham', {exact: false}); // Will not find exact word, it will just check that the testing word is present in text or not.
    expect(testDivWithString).toBeInTheDocument();
    expect(testDivWithString1).toBeInTheDocument();
    expect(testDivWithString2).toBeInTheDocument();
  })
  // Testing it with Regex
  it('testing div with regex', ()=>{
    render(<App />)
    const testDivWithString3 = screen.getByText(/Hello Champion/);
    const testDivWithString4 = screen.getByText(/hello Champion/i); // To make case insensitive
    const testDivWithString5 = screen.getByText(/hello Cham/i); // Will not find exact word, it will just check that the testing word is present in text or not.
    expect(testDivWithString3).toBeInTheDocument();
    expect(testDivWithString4).toBeInTheDocument();
    expect(testDivWithString5).toBeInTheDocument();
  })

  // For Text match with function
  it('Testing Text Match with function',()=>{
    render(<App />)
    const testTextMatchWithFunc = screen.getByText((content, element)=>content.startsWith('Army'));
    expect(testTextMatchWithFunc).toBeInTheDocument();
    const testTextMatchWithFunc1 = screen.getByText((content, element)=>content.endsWith('Country1'));
    expect(testTextMatchWithFunc1).toBeInTheDocument();
    const testTextMatchWithFunc2 = screen.getByText((content, element)=>content.includes('ntry1'));
    expect(testTextMatchWithFunc2).toBeInTheDocument();
    const testTextMatchWithFunc3 = screen.getByText((content, element)=>{
      return content.includes('my Coun')
    });
    expect(testTextMatchWithFunc3).toBeInTheDocument();

    const ifMultipleDivs = screen.getAllByText((content, element)=>content.startsWith('Business'));
    for(let i=0; i<ifMultipleDivs.length-1; i++){
      expect(ifMultipleDivs[i]).toBeInTheDocument();
    }
  })
  // Testing using queryByText and queryAllByText
  // We Use queryByText when something is actually hidden from the rendered screen
  // For Example at "Login" Page, "Logout" button will always be hidden and vice versa.
  // getByText don't search in code that logout option is present in code or not, It will check it is rendered text or not.
  // queryByText will actually check in the code that logout option is available or not.
  // similar to queryByText we have queryAllByText, queryByRole, queryAllByRole, queryByTestId, queryAllByTestId, queryByPlaceholderText, queryAllByPlaceholderText etc.
  // it('testing queryByText when element is hidden', ()=>{
  //   render(<App />)
  //   //const hiddenText = screen.getByText('Logout'); This will not check the code and get data from render screen.
  //   //const hiddenTextWithQuery = screen.queryByText('Logout'); // This will check in the code Logout is present or not.
  //   //expect(hiddenTextWithQuery).not.toBeInTheDocument();  // Offcourse on render screen we will se login button only thats why we use .not
    

  // })
  // Testing using findBy or findAllBy
  // Sometime element takes some time to get loaded onto the UI, It may be because its data is dependent on API
  // or Application is huge and it is taking time to load the elements
  // Don't forget to use async await while using findBy
  // Similar to this findByText we can use findAllByText, findByRole, FindAllByRole, findByPlaceholder, findAllByPlaceholder, findByTestId, findAllByTestId
  // Here we will take the example of setTimeout because we don't have API now
  // it('using findByText to test the data which takes some time to get loaded into UI', async ()=>{
  //   render(<App />)
  //   // Below 2 lines will not work becuse Data Found is not yet rendered and it takes some time to load
  //   // const testFindData = screen.getByText('Data Found');
  //   // expect(testFindData).toBeInTheDocument();
  //   //Ends Here
    
  //   // To fix this kind of failed test cases we use findBy
  //   // Don't forget to use async await while using findBy
  //   // If running test time is more than setTimeout or Loading UI time then use this 'timeout' parameter.
  //   // This timeout parameter cannot be defined more than 5 sec It means application should load within 5 sec.
  //   const testFindData = await screen.findByText('Data Found', {}, {timeout:5000})
  //   expect(testFindData).toBeInTheDocument();
  // })

  // Very Important Note
    // React Testing library mainly have 3 kinds of method i.e
    // getBy, queryBy and findBy
  //Ends Here

  // Testing with custom query
  // Mostly we use 'react-testing' library only but sometimes we can use this custom query also.
  it('testing with custom query', ()=>{
    render(<App />)
    const element = document.querySelector('#custom-id');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Hello India');
    expect(element).toHaveAttribute('style');

    const element1 = document.querySelector('.custom-class');
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Hello Bharat');
    expect(element1).toHaveAttribute('style');
  })
  // Querying within elements
  // Testing element within element using within method
  // This is mostly like parent is having child and we want to test that child element
  it('testing element within elements', ()=>{
    render(<App />)
    const el = screen.getByText('Hello Parent');
    expect(el).toBeInTheDocument();
    const subEl1 = within(el).getByText('Hello Child 1');
    expect(subEl1).toBeInTheDocument();
    const subEl2 = within(el).getByText('Hello Child 2');
    expect(subEl2).toBeInTheDocument();
    const subEl3 = within(el).getByText('Hello Child 3');
    expect(subEl3).toBeInTheDocument();
  })
  // Testing using User Event Library
  // User Event Library comes automatically with @testing-library/react
  // Before staring to work update this User Event Event Library to the latest
  // This is better then fireEvent because we can test more things using this User Event Library
  it('testing button event using user event library', async ()=>{
    userEvent.setup();
    render(<App />)
    const btnEvent = screen.getByText('User Event Library');
    await userEvent.click(btnEvent);
    expect(screen.getByText('Testing event using User Event Library')).toBeInTheDocument();
  })
  // Testing input onChange event using userEvent
  // For any keyboard kind event instead of 'click' we use 'type' event.
  // This test case will throw error since we are not using state function
  it('testing input onChange event using userEvent', async ()=>{
    userEvent.setup();
    render(<App />)
    const ele = screen.getByPlaceholderText('Enter Name');
    await userEvent.type(ele, 'kolkata');
    expect(screen.getByText('kolkata')).toBeInTheDocument();
  })
  // Act function
  // Whenever we do state change that time whatever value we are changing it takes sometime to render on UI.
  // Using userEvent with async and await we can do that but it will give act error like 
  // Warning: An update to App inside a test was not wrapped in act(...).
  // To fix this error we use act function.
  // This test cases will not throw any error since we are using act function
  it('testing state change functionality using Act function', async ()=>{
      userEvent.setup();
      render(<App />)
      const ele = screen.getByPlaceholderText('Change Name State');
      await act(async ()=>{
        await userEvent.type(ele, "delhi");
      })
      expect((screen.getByText('delhi'))).toBeInTheDocument();
  })
  // Testing of Component Props
  // Here we pass some parameters to the component as props and do testing of whatever we have passed.
  // We have created new component for this i.e Compoprops
  it('testing component props', ()=>{
    render(<Compoprops city='kolkata' />)
    const ele = screen.getByText('Welcome to : kolkata');
    expect(ele).toBeInTheDocument();
  })
  it('testing component props with passing city as variable', ()=>{
    const city = 'mumbai'
    render(<Compoprops city={city} />)
    const ele = screen.getByText(`Welcome to : ${city}`);
    expect(ele).toBeInTheDocument();
  })
  // Functional props testing and mocking
  // Here basically we mock the function that we pass and then test that function is being callecd or not
  it('Functional props testing and Mocking', async ()=>{
    const testFunction = jest.fn();
    userEvent.setup();
    render(<Compoprops testFunction={testFunction} />);
    const ele = screen.getByText('Functional props');
    await userEvent.click(ele, testFunction)
    expect(testFunction).toHaveBeenCalled();
  })
  // Debugging in React testing library - 5 ways
  // Automatic Debugging
  // prettyDOM 
  // debug
  // DEBUG_PRINT_LIMIT=10000 npm test (By default react can test 7000 lines of DOM elements but if you want to increase more then you can use this. )
  // DEBUG_PRINT_LIMIT=10000 npm test (This command you can directly run in terminal when you DOM elemet more than 7000 lines)
  // logRoles  // import this from @testing-library/react

  // it('example of automatic debugging', ()=>{  // Automatic debugging will happen and it will throw error
  //   render(<Compoprops />);
  //   const ele = screen.getByText('Heading 3');
  //   expect(ele).toBeInTheDocument();
  // })

  // it('example of prettyDOM', ()=>{
  //   const {container, prettyDOM} =  render(<Compoprops city='hryana' />);
  //   //console.log(container);
  //   console.log(prettyDOM(container));
  // })

  // it('example of debug', ()=>{
  //   const {container, debug} =  render(<Compoprops city='hryana' />);
  //   //console.log(container);
  //   //console.log(prettyDOM(container));
  //   debug()
  // })

  // it('example of logRoles', ()=>{
  //   const {container} =  render(<Compoprops city='hryana' />);
  //   logRoles(container)
  // })

  // Note - You can download and use testing playground chrome extension and do unit testing in chome.
  // Add this 'testing playground' extension to chrome.
  // To use this do right click on your react project and then select 'testing playground'.

  // Note on MSW
  // MSW stands for Mock Service Worker
  // MSW is rich feature library which helps in Mocking and testing rest API.
  // Why we mock rest API with dummy data? (Two reasons)
  // 1. Calling 3 party API or even own server API is costly
  // 2. API sends many different-different kinds of response which is difficult to handle thus we mock api with some dummy data
  // Here we will mock and test the rest api

  // Testing API using MSW process
  // Install MSW
  // Make Mock Service Folder
  // Make server file
  // Make server handler file
  // Write Code for API testing
  // Call server in test setup file
  // Its very complicated process will do it later Thanks !

})