import Add from '../src/App'

test('sum 1 + 2', () =>{
  const value = Add(1, 2);
  expect(value).toBe(3);
})