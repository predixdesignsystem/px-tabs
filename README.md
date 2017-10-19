# px-tabs [![Build Status](https://travis-ci.org/PredixDev/px-tabs.svg?branch=master)](https://travis-ci.org/PredixDev/px-tabs)

## Overview

`Px-tabs` is a Predix UI component used for organizing content on multiple tabs.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm, and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line:

```
bower install px-tabs --save
```

Second, import the component in your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-tabs/px-tabs.html"/>
```

Finally, use the component in your application. We recommend using [iron-pages](https://www.webcomponents.org/element/PolymerElements/iron-pages), but you could bind the `selected` property of px-tabs to whatever mechanism you want to display the associated content below the px-tabs component.
```
    <px-tabs selected="{{selected}}">
        <px-tab>Tab 1</px-tab>
        <px-tab>Tab 2</px-tab>
        <px-tab>Tab 3</px-tab>
    </px-tabs>
    <iron-pages selected="{{selected}}">
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
    </iron-pages>
```
## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-tabs).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.



### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

* The px-tabs components currently doesn't support in-component scrolling or wrapping when there are too many tabs.

Please use [Github Issues](https://github.com/PredixDev/px-tabs/issues) to submit any bugs you might find.
