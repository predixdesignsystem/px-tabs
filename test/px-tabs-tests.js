/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
