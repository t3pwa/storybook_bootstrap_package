<?php

/*
 * This file is part of the package bk2k/bootstrap-package.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3') or die('Access denied.');


/** Add own typoscript */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'storybook_bootstrap_package',
    'Configuration/TypoScript',
    'Storybook Bootstrap Package Overrides'
);

/***************
 * TypoScript: Full Package
 * This includes the full setup including all configurations
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'StorybookBootstrapPackage',
    'Configuration/TypoScript',
    'StorybookBootstrapPackage: Full Package (Overrides)'
);

/***************
 * TypoScript: Content Elements
 * Include only the configuration for content elements
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'StorybookBootstrapPackage',
    'Configuration/TypoScript/ContentElement',
    'StorybookBootstrapPackage: Content Elements (Overrides)'
);

/***************
 * TypoScript: Framework
 * Include Bootstrap 4.x (SCSS) Assets
 */
/*
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'StorybookBootstrapPackage',
    'Configuration/TypoScript/Bootstrap4',
    'Bolt: Bootstrap 4.x (SCSS)'
);
*/
/***************
 * TypoScript: Framework
 * Include Bootstrap 5.x (SCSS) Assets
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'StorybookBootstrapPackage',
    'Configuration/TypoScript/Bootstrap5',
    'StorybookBootstrapPackage: Bootstrap 5.x (SCSS) Overrides'
);
