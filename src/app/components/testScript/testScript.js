var HTML = `
  <h1>Test Script Async</h1>
  <button class="button" onclick="helloWorld()">Hello World</button>
`;

export class TestScript {
  constructor () {
    $(document.body).prepend(HTML);

    // idea is to use
    // `$(root).prepend(HTML);`
  }
}

function helloWorld() {
  alert('hello world!!');
}
