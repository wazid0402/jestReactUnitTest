 import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App'

// describe('Testing Apple File', ()=>{
//     it('test button click event', ()=>{
//       render(<App />)
//       let btn = screen.getByRole('button');
//       fireEvent.click(btn);
//       expect(screen.getByText('Updated Data')).toBeInTheDocument();
//     })
//   })

test('Testing app', ()=>{
  render(<App />);
  let text = screen.getByText('Learn React'); 
   expect(text).toBeInTheDocument();
})