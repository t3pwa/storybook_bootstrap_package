# Easier Frontend Integrations for TYPO3 sites with Storybook

This package is a TYPO3 extension that makes integration work easier.

We consider it "best practice" to run a site and all custom Backend Layouts, TypoScript, PageTS
in one place, a so-called "site extension". We prefix them with "site_" making it something like
"site_myproject".

Then, the tricky part starts:
* Adding TypoScript
* Adding Fluid
* Adding PageTSconfig
* Adding Domains (for certain environments)

We want to avoid that for our sites, making life easier for integrators and get the website
up and running faster.

Because of this, this extension adds a field to the Site Configuration,
where you can define your site extension:

    sitePackage: '<my_extension_key>'

It's doing the same as you'd need to do manually all the time.

What you do:

* Create your site extension
* Install bolt, and choose your site extension on your Site Configuration
* Ensure your site extension contains one of the following files
    - `Configuration/TypoScript/constants.typoscript` (or `Configuration/TypoScript/constants.txt`)
    - `Configuration/TypoScript/setup.typoscript` (or `Configuration/TypoScript/setup.txt`)
    - `Configuration/PageTs/main.tsconfig` or `Configuration/PageTsConfig/main.tsconfig`

## When do I need this extension?

Integration of Frontend Decelopment into TYPO3

## How to install this extension?

You can set this up via composer (`composer require faeb/storybook_bootstrap_package`) or via
[TER](https://extensions.typo3.org/extension/bolt/) (extension name "bolt"),
it runs best with TYPO3 v9 or later.

## Requirements
- typo3fluid-api



# site-package

rename to storybook_bootstrap_package

## ddev
Add Port Config to ddev

<pre>
web_extra_exposed_ports:
- name: storybook
  container_port: 6006
  http_port: 6006
  https_port: 6006
</pre>

## .storybook 
Symlinks Storybook Configuration from Extension to root

## stories
Symlink stories from extension to root



## ToDo
* Templates:
- Pagelayouts: Simple, 2Columns, ... all of them

* ContentElements:
- Audio 
- Icons (need Viewhelper rewrite for icons as name/src)
- Panel
- Quote
- 
- Container

* Special Templates
- Generic ContentElement
- Dynamic ContentElement

## Know Bugs/Problems
- template inherint hirachy
- Password in typo3fluid-api


## License

The extension is licensed under GPL v2+, same as the TYPO3 Core.

For details see the LICENSE file in this repository.



