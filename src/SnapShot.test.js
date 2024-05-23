import { render, screen } from "@testing-library/react";
import App from './App'

// Snapshot is used to take the snapshot of the code before deploying it to production. So what
// happens is that after the sanpshot is taken then after anyone will make changes in the code
// then test cases will failed. To fix this failed test cases we can put the code as earlier or
// update the code using u option.

// test('Testing Snapshot', ()=>{
//    const container = render(<App />);
//    expect(container).toMatchSnapshot();
// })

test('Testing app', ()=>{
   render(<App />);
   let text = screen.getByText('Learn React'); 
    expect(text).toBeInTheDocument();
})