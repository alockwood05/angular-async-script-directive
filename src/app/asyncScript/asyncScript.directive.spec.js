describe('AsyncScriptDirective', function() {
  let element;
  let $rootScope;
  let $httpBackend;
  let $compile;

  beforeEach(angular.mock.module('angularAsyncScript'));

  /**
   * createDirective creates directive with callbacks
   * @param {function} done the callback on success takes params (script, textStatus)
   * @param {function} fail the callback on fail takes params (jqxhr, settings, e)
   */
  function createDirective(done, fail, scope) {
    element = angular.element(`
      <async-script src='testScript.js' done="done" fail="fail"></async-script>
    `);
    scope = scope || $rootScope.$new();
    scope.done = done;
    scope.fail = fail;
    $compile(element)(scope);
    $rootScope.$digest();
  }

  beforeEach(inject((_$compile_, _$rootScope_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  fit('should grab the src', (done) => {
    $httpBackend.expectGET('testScript.js').respond(201, 'console.log("helloWorld")');
    createDirective(done);
    console.log('about to flush');
    $httpBackend.flush();
  });

  it('should call done callback with (script, textStatus)', (done) => {
    function cb (script, textStatus) {
      script.should.equal('console.log("helloWorld")');
      textStatus.should.equal('success');
      done();
    };
    $httpBackend.expectGET('/testScript.js').respond(201, 'console.log("helloWorld")');
    createDirective(cb);
    $httpBackend.flush();
  });

  it('should call error callback on error with (jqxhr, settings, e)', (done) => {
    function cb(jqxhr, settings, e) {
      jqxhr.should.be.an('object');
      console.log(arguments);
      done();
    };
    $httpBackend.expectGET('/testScript.js').respond(500, 'console.log("helloWorld")');
    createDirective(undefined, cb);
    $httpBackend.flush();
  });

  it('should emit `asyncScript:done` on success', () => {
    /* @todo */
  });

  it('should emit `asyncScript:fail` on fail', () => {
    /* @todo */
  });
});
