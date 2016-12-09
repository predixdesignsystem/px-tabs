document.addEventListener("WebComponentsReady", function() {
  suite('Unit Tests for Tabs', function() {

    var customTabsBasic, tabs, tsetnode, tabnode1, tabnode2, class_tab_container, class_basic_tab, isSelected, hasSelectedClass, customTabsBare, tsetnodeBare, tabnode1Bare, tabnode2Bare, class_tab_container_bare, isSelectedBare, hasSelectedClassBare;

    // variables for fixture-basic tabs component
    customTabsBasic = Polymer.dom(document).querySelector('#fixture-basic');
    tabs = Polymer.dom(customTabsBasic.root).querySelectorAll('px-tab');
    tsetnode = Polymer.dom(customTabsBasic.root).querySelector('px-tab-set#tab-set');
    tabnode1 = Polymer.dom(customTabsBasic.root).querySelector('px-tab#tab1');
    tabnode2 = Polymer.dom(customTabsBasic.root).querySelector('px-tab#tab2');
    class_tab_container = tabnode1.parentNode.classList.contains('tabs-container__nav');
    class_basic_tab = tabnode1.childNodes[1].classList.contains('tab-title');
    isSelected = tabnode1.classList.contains('iron-selected');
    hasSelectedClass = tabnode1.childNodes[1].classList.contains('tab-title--selected');

    // variables for my-tabs-bare
    customTabsBare = Polymer.dom(document).querySelector('#mytabs-bare');
    tsetnodeBare = Polymer.dom(customTabsBare.root).querySelector('px-tab-set#tab-set-bare');
    tabnode1Bare = Polymer.dom(customTabsBare.root).querySelector('px-tab#tab1-bare'),
    tabnode2Bare = Polymer.dom(customTabsBare.root).querySelector('px-tab#tab2-bare');
    class_tab_container_bare = tabnode1Bare.parentNode.classList.contains('tabs-container__nav--bare');
    class_basic_tab_bare = tabnode1Bare.childNodes[1].classList.contains('tab-title-bare');
    isSelectedBare = tabnode1Bare.classList.contains('iron-selected');
    hasSelectedClassBare = tabnode1Bare.childNodes[1].classList.contains('tab-title-bare--selected');

    // basic tabs tests

     test('Basic px-tabs Tests', function() {
        assert.isNotNull(customTabsBasic);
      });

     test('Test change tab event fires', function(done) {
        document.addEventListener('px-tab-changed', function(evt){
          assert.equal(evt.detail.tabID, 'tab2');
          done();
        });
        tabs[1].click();
      });

     test('Test bare property for basic tabs is false', function() {
          assert.equal(tsetnode.bare , false);
      });

     test('Test tab container style class does NOT include --bare', function() {
          assert.equal(class_tab_container , true);
      });

      test('Test tab style matches default class tab-title', function() {
          assert.equal(class_basic_tab , true);
      });

      test('Selected Tab title should include class tab-title--selected', function() {
        assert.equal( isSelected && hasSelectedClass , true);
      });

      // bare style tests
      test('Test bare tabs component gets created', function() {
        assert(customTabsBare != null);
      });

      test('Test bare property is true when bare is enabled', function() {
          assert.equal(tsetnodeBare.bare , true);
      });

     test('Test tab container style class includes --bare', function() {
          assert.equal(class_tab_container_bare , true);
      });

      test('Test tab style class is enabled with bare tabs: tab-title-bare', function() {
          assert.equal(class_basic_tab_bare , true);
      });

      test('Test selected Tab title class includes class modifier --selected', function() {
        assert.equal( isSelectedBare && hasSelectedClassBare , true);
      });

    });
  });
