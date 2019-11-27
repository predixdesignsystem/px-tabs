/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
The px-tabs and px-tab components together provide the tabbed interface. The tabbed content is expected
to be contained in a separate component (iron-pages).

Note: There is no limit on number of tabs in the set, but there is no scrolling support.

### Usage

The px-tabs and px-tab components are typically used together like this:
```
<px-tabs selected="{{selected}}">
    <px-tab>Tab 1</px-tab>
    <px-tab>Tab 2</px-tab>
    <px-tab>Tab 3</px-tab>
</px-tabs>
```

@element px-tab
@blurb Element provides a single tab.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-tab-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-tab-styles"></style>
    <div class="tab-title">
      <slot></slot>
    </div>
`,

  is: 'px-tab',

  attached: function() {
    this.setAttribute('role','tab');
  }
});
