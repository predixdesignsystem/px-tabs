document.addEventListener("WebComponentsReady", function() {
  suite('Unit Tests for Tabs', function() {

    // basic tabs tests
    var customTabsBasic = document.getElementById('tab-set'),
    tabs = customTabsBasic.getElementsByTagName('px-tab');

    test('Basic px-tabs Tests', function() {
      assert.isNotNull(customTabsBasic);
    });

    test('Test tab style matches default class tab-title', function() {
      assert.isTrue(tabs[0].childNodes[1].classList.contains('tab-title'));
    });

    test('Selected tab and tab title should include selected classes', function() {
      assert.isTrue(tabs[0].classList.contains('iron-selected'));
    });

    test('Test change tab event fires', function(done) {
      window.addEventListener('px-tab-changed', function(evt){
        assert.equal(evt.detail.tabID, 'tab2');
        done();
      });
      tabs[1].click();
    });

    test('After switching tabs, selected classes should be removed and added', function() {
      assert.isFalse(tabs[0].classList.contains('iron-selected'));
      assert.isTrue(tabs[1].classList.contains('iron-selected'));
    });

  });
});
