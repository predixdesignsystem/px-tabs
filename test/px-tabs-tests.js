describe('px-tabs', function(done) {
  let tabsFixture;
  let tabsParent;
  let tabs;

  beforeEach((done) => {
    tabsFixture = fixture('PxTabsFixture');
    flush(() => {
      tabsParent = tabsFixture.querySelector('px-tabs');
      tabs = Polymer.dom(tabsParent).querySelectorAll('px-tab');
      done();
    });
  });

  it('adds the `iron-selected` class to the selected tab', () => {
    expect(tabs[0].classList.contains('iron-selected')).to.be.true;
  });

  it('(select by click) removes the `iron-selected` class from the last selected tab and adds it to the next selected tab', () => {
    tabs[1].click();
    expect(tabs[0].classList.contains('iron-selected')).to.be.false;
    expect(tabs[1].classList.contains('iron-selected')).to.be.true;
  });

  it('(select by property) removes the `iron-selected` class from the last selected tab and adds it to the next selected tab', () => {
    tabsParent.selected = 2;
    expect(tabs[0].classList.contains('iron-selected')).to.be.false;
    expect(tabs[2].classList.contains('iron-selected')).to.be.true;
  });

  it('fires the `px-tab-changed` event when a new tab is selected', () => {
    let tabChangedFn = sinon.spy();
    tabsParent.addEventListener('px-tab-changed', tabChangedFn);
    tabsParent.selected = 1;
    expect(tabChangedFn).to.be.calledOnce;
  });
});
