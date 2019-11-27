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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '@polymer/iron-pages/iron-pages.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-tabs" description="A classic design for organizing content on multiple tabs." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">

        <div>
          <px-tabs id="tab-set1" selected="{{props.selected.value}}">
            <px-tab id="tab1">Bengal Tiger</px-tab>
            <px-tab id="tab2">Black Spider Monkey</px-tab>
            <px-tab id="tab3">Sumatran Elephant</px-tab>
            <px-tab id="tab4">Ganges River Dolphin</px-tab>
          </px-tabs>
          <iron-pages selected="[[props.selected.value]]">
            <div id="tab1-content">
              <p>The Bengal tiger is found primarily in India with smaller populations in Bangladesh, Nepal, Bhutan, China and Myanmar. It is the most
                numerous of all tiger subspecies with more than 2,500 left in the wild. The creation of India’s tiger reserves in the 1970s helped to
                stabilize numbers, but poaching to meet a growing demand from Asia in recent years has once again put the Bengal tiger at risk. The mangroves
                of the Sundarbans—shared between Bangladesh and India—are the only mangrove forests where tigers are found. The Sundarbans are increasingly
                threatened by sea level rise as a result of climate change.</p>
            </div>
            <div id="tab2-content"><p>The black spider monkey—also known as the Guiana or red-faced spider monkey—is found in eastern South America in areas north of the Amazon River. They are one of seven species of spider monkeys found in Latin America and one of the largest primate species in South America.</p></div>
            <div id="tab3-content"><p>Sumatran elephants feed on a variety of plants and deposit seeds wherever they go, contributing to a healthy forest ecosystem. They also share their lush forest habitat with several other endangered species, such as the Sumatran rhino, tiger, and orangutan, and countless other species that all benefit from an elephant population that thrives in a healthy habitat.</p></div>
            <div id="tab4-content"><p>Dolphins are one of the oldest creatures in the world along with some species of turtles, crocodiles and sharks. The Ganges river dolphin was officially discovered in 1801. Ganges river dolphins once lived in the Ganges-Brahmaputra-Meghna and Karnaphuli-Sangu river systems of Nepal, India, and Bangladesh. But the species is extinct from most of its early distribution ranges.</p></div>
          </iron-pages>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-tabs" links-includes="[&quot;iron-pages/iron-pages.html&quot;]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-tabs" hide="[&quot;activateEvent&quot;,&quot;attrForSelected&quot;,&quot;fallbackSelection&quot;,&quot;selectable&quot;,&quot;selectedAttribute&quot;,&quot;selectedClass&quot;,&quot;selectedItem&quot;,&quot;items&quot;,&quot;forceSynchronousItemUpdate&quot;,&quot;indexOf&quot;,&quot;selectIndex&quot;,&quot;iron-activate&quot;,&quot;iron-items-changed&quot;,&quot;iron-select&quot;,&quot;iron-deselect&quot;]"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-tabs-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return []
      }
    }
  },

  demoProps: {

    selected: {
      type: String,
      defaultValue: '0',
      inputType: 'dropdown',
      inputChoices: ['0','1','2','3']
    },

    lightDomContent: {
      type: String,
      defaultValue: '<px-tab id="tab1">Bengal Tiger</px-tab><px-tab id="tab2">Black Spider Monkey</px-tab><px-tab id="tab3">Sumatran Elephant</px-tab><px-tab id="tab4">Ganges River Dolphin</px-tab>'
    }
  }
});
