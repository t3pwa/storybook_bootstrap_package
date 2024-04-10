# TYPO3 Storybook
## Easier Frontend Integration with Storybook

This package is a TYPO3 extension that makes integration work easier.

Work in progress, 

Utalises typo3fluid-api
Based on b13/bold
inspired by typo3fluid-api-example

## When do I need this extension?

Integration of Frontend Decelopment into TYPO3

## Requirements
- typo3fluid-api
- (headless_bootstrap_package)


## add symlinks

### .storybook
Symlink/Move Storybook Configuration from Extension to root
~/projects/t3v11$ ln -s packages/storybook_bootstrap_package/.storybook/ .storybook

#### stories
Symlink/Move stories from extension to root
~/projects/t3v11$ ln -s packages/storybook_bootstrap_package/stories/


## ddev
Add Port Config to ddev

<pre>
web_extra_exposed_ports:
- name: storybook
  container_port: 6006
  http_port: 6006
  https_port: 6006
</pre>


move packages.json to extension

## Include theme.scss

## extract scss

## populate args and argtypes
from extracted sass object


## ToDo
* Templates:
- Pagelayouts: Simple, 2Columns, ... all of them

* ContentElements:
- Audio 
- Video
- Icons (need Viewhelper rewrite for icons as name/src)
- Quote
- 
- Container

* Special Templates
- Generic ContentElement
- Dynamic ContentElement

- Frames:
  - Frame examples, gradient panel headers, box, shadow, textimage elements 
  - add webpack static frame decorator in default stories, based on typo3fluid template viewhelper frame 

## Know Bugs/Problems
- template inherintance hirachy
- Password in typo3fluid-api


## License

The extension is licensed under GPL v2+, same as the TYPO3 Core.

For details see the LICENSE file in this repository.



