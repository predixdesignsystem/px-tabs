document.addEventListener("WebComponentsReady", function() {
  suite('Unit Tests for Tabs', function() {

    // basic tabs tests
    var customTabsBasic = document.getElementById('tab-set'),
    tabs = customTabsBasic.getElementsByTagName('px-tab');

    test('Basic px-tabs Tests', function() {
      assert.isNotNull(customTabsBasic);
    });

    test('Test bare property for basic tabs is false', function() {
      assert.equal(customTabsBasic.bare, false);
    });

    test('Test tab container style class does NOT include --bare', function() {
      assert.isTrue(tabs[0].parentNode.classList.contains('tabs-container__nav'));
      assert.isFalse(tabs[0].parentNode.classList.contains('tabs-container__nav--bare'));
    });

    test('Test tab style matches default class tab-title', function() {
      assert.isTrue(tabs[0].childNodes[1].classList.contains('tab-title'));
      assert.isFalse(tabs[0].childNodes[1].classList.contains('tab-title-bare'));
    });

    test('Selected tab and tab title should include selected classes', function() {
      assert.isTrue(tabs[0].classList.contains('iron-selected'));
      assert.isTrue(tabs[0].childNodes[1].classList.contains('tab-title--selected'));
    });

    test('Test change tab event fires', function(done) {
      document.addEventListener('px-tab-changed', function(evt){
        assert.equal(evt.detail.tabID, 'tab2');
        done();
      });
      tabs[1].click();
    });

    test('After switching tabs, selected classes should be removed and added', function() {
      assert.isFalse(tabs[0].classList.contains('iron-selected'));
      assert.isFalse(tabs[0].childNodes[1].classList.contains('tab-title--selected'));
      assert.isTrue(tabs[1].classList.contains('iron-selected'));
      assert.isTrue(tabs[1].childNodes[1].classList.contains('tab-title--selected'));
    });



    // variables for tab-set-bare
    var customTabsBare = document.getElementById('tab-set-bare'),
    tabsBare = customTabsBare.getElementsByTagName('px-tab');

    // bare style tests
    test('Test bare tabs component gets created', function() {
      assert.isNotNull(customTabsBare);
    });

    test('Test bare property is true when bare is enabled', function() {
      assert.equal(customTabsBare.bare, true);
    });

    test('Test tab container style class includes --bare', function() {
      assert.isTrue(tabsBare[0].parentNode.classList.contains('tabs-container__nav--bare'));
      assert.isFalse(tabsBare[0].parentNode.classList.contains('tabs-container__nav'));
    });

    test('Test tab style class is enabled with bare tabs: tab-title-bare', function() {
      assert.isTrue(tabsBare[0].childNodes[1].classList.contains('tab-title-bare'));
      assert.isFalse(tabsBare[0].childNodes[1].classList.contains('tab-title'));
    });

    test('Test selected Tab title class includes class modifier --selected', function() {
      assert.isTrue(tabsBare[0].classList.contains('iron-selected'));
      assert.isTrue(tabsBare[0].childNodes[1].classList.contains('tab-title-bare--selected'));
    });

  });
});
