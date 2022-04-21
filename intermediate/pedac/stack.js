/* eslint-disable max-lines-per-function */
/*
input is a string that contain valid operation keywords
output depends on the last operation keyword 
  if it's print, then print the register value
rules:
  stack is initialized with []
  register - 0
  tokens: n - register = n
  Push: stack.push(register)
  add: register = stack.pop() + register
  sub: register = register - stack.pop()
  mult: register *= stack.pop()
  div: register = register / stack.pop()
  remainder: register = register % stack.pop()
  pop: register = stack.pop()
  print: print register 

*/

// eslint-disable-next-line max-lines-per-function
function minilang(command) {
  let register = 0;
  let stack = [];
  let tokens = command.split(' ');
  tokens.forEach(token => {
    switch (token) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register /= stack.pop();
        register = Math.round(register)
        break;
      case 'REMAINDER':
        register = register % stack.pop();
        register = Math.round(register)
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');