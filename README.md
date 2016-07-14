#Px-Tabs [![Build Status](https://travis-ci.org/PredixDev/px-tabs.svg?branch=master)](https://travis-ci.org/PredixDev/px-tabs)

## Overview

Px-tabs is a Predix UI component.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-tabs --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-tabs/px-tab-set.html"/>
```

Finally, use the component in your application:
```
    <px-tab-set selected="{{selected}}">
        <px-tab>Tab 1</px-tab>
        <px-tab>Tab 2</px-tab>
        <px-tab>Tab 3</px-tab>
    </px-tab-set>
```
## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-tabs).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

* This px-tabs components currently don't support in-component scrolling when there are too many tabs.

Please use [Github Issues](https://github.com/PredixDev/px-dropdown/issues) to submit any bugs you might find.
