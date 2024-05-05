# TYPO3 Storybook
## Easier Frontend Integration with Storybook

This package is a TYPO3 extension that makes integration work easier.

Work in progress, 

Utalises typo3fluid-api
(Based on b13/bold)
inspired by typo3fluid-api-example

## When do I need this extension?
Integration of Frontend and UX Development into TYPO3

## Requirements
- typo3fluid-api (forked atm)


- (headless_bootstrap_package) Does seem like we dont need this

## add symlinks

### .storybook
Symlink/Move Storybook Configuration from Extension to root
~/projects/t3v11$ ln -s packages/storybook_bootstrap_package/.storybook/ .storybook

#### stories
Symlink/Move stories from extension to root
~/projects/t3v11$ ln -s packages/storybook_bootstrap_package/stories/

(Symlinks doesnt seem to be a good idea. Start the storybook not from root, start it from the extension)


## ddev
Add Port Config to ddev

<pre>
web_extra_exposed_ports:
- name: storybook
  container_port: 6006
  http_port: 6006
  https_port: 6006
</pre>

(@Todo: move packages.json to extension)

## Include theme.scss
This is under discussion. 

## extract scss
uses sass-loader ...

## populate args and argtypes
from extracted sass object

## ToDo
* Templates:
- Pagelayouts: (Simple, works somehow), 2Columns, ... all of them

* ContentElements:
- Audio 
- Video
- Icons (need Viewhelper rewrite for icons as name/src? does it?)
- (Quote)
- 
- Container

* Special Templates
- Generic ContentElement
- Dynamic ContentElement

- Frames:
  - Frame examples
    - gradient panel headers
    - (box, 'custom-boxxed') 
    - shadow (good example for (argumented, parametrized) mixin)
    - textimage element order reversed
    - textimage, image in circle mask
  

@ToDo tbc:
add webpack static frame decorator in default stories, based on typo3fluid template viewhelper frame



# Merksätze, Regel, Vokabelheft

## Storys
Eine Story beschreibt idR ein ContentElement (oder eine Seite oder einen Viewhelper)
- Eine Story hat immer ein default export! (sagt SB)
- Eine Story hat immer ein Primary (tbc ???)
- Eine Story hat immer ein Template (FluidTemplate) (sagt TYPO3_fluid_api)
- Ein Template hat immer die kleinsmögliche Anzahl an Arguments

## Atoms
- Ein Button ist ein Atom
- FormArea ist ein Atom
- FormInput ist ein Atom
- Atoms sind unveränderbar (aber prametisierbar)
 - inmutable but prameterized

### Buttons
- TYPO3 Bottons sind in Fluid Styled Content definiert
- Ein Button ist in TYPO3 Fluid Styled Content ein Viewhelper
- Viewhelper haben keine Templates (und können in Storybokk nur mit einem TEmplate, dass den Viewhelper benutzt dargestellt werden)
- Der Button Viewhelper ist von <f:form.
- Ein Button steht immer in einem Form und ist vom Typ Submit (es sei denn er ist vom Typ Button, 'Submit' ist die Regel, Es gibts noch Reset und ... )
 - Es gibt viele additionalConfig Parameter für Atoms/den Button 
- Links sind immer Buttons vom Typ Link (es sei denn sie befinden sich im Fliesstext)

## Content Elemente 
- Content Elements sind BS ContentElements (welche wiederum zu einem Teil von fluid_Styled_content geerbt werden)
- (bootstrap_package) ContentElements heißen/sind im Atomic Design "Moleküle/molecules"
- ContentElements sind Möleküle
- Moleküle sind ContentElemensts
- ContentElements (können/haben immer tbc.) eine Frame

# Struktur/Nomenkaltur
- Templates erben Argumente, und ArgTpyes von default
- Primarys erben immer von Template (erben von default geht wohl nicht, to be confirmed)

- Primarys müssen immer funktionabel sein
- Primarys sind keine Varianten

- Primary(Framed) sind immer Framed (tbc)

- Secondarys, ... dürfen experimentel sein
- Secondarys, Tertiarys ... sind Varienten
- Secondarys heissen wir Ihre Funktion (3Columns, 4Columns, Danger, )
- Jede Varianten erbt immer von Ihrem Vorgänger



## Know Bugs/Problems
- template inherintance hirachy
- (Password in typo3fluid-api, issue on github fixed)


## Photos
https://unsplash.com/photos/time-lapse-photo-of-topless-man-riding-skateboard-at-the-skate-park-8mUEy0ABdNE


## License

The extension is licensed under GPL v2+, same as the TYPO3 Core.

For details see the LICENSE file in this repository.

