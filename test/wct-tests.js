describe('Unit Tests for Tabs', function(done) {
  before(function(done) {
    flush(()=>{
      tabElement = fixture('PxTabsFixture')[0];
      tabs = Polymer.dom(tabElement).querySelectorAll('px-tab');
      done();
    });
  });

  it('Basic px-tabs Tests', function() {
    assert.isNotNull(tabElement);
  });

  it('Test tab style matches default class tab-title', function() {
    flush(()=>{
      assert.isTrue(Polymer.dom(tabs[0].root).querySelectorAll('.tab-title').length === 1);
    });
  });

  it('Selected tab and tab title should include selected classes', function(done) {
    flush(function(){
      assert.isTrue(tabs[0].classList.contains('iron-selected'));
      done();
    });
  });


  it('After switching tabs, selected classes should be removed and added', function() {
    flush(function(){
      assert.isTrue(tabs[0].classList.contains('iron-selected'));
    });
    tabs[1].click();
    flush(function(){
      assert.isFalse(tabs[0].classList.contains('iron-selected'));
      assert.isTrue(tabs[1].classList.contains('iron-selected'));
    });
  });
});
