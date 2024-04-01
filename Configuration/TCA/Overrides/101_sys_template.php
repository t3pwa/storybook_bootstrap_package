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
    'site_package',
    'Configuration/TypoScript',
    'new Blog Example Overrides'
);



/***************
 * TypoScript: Full Package
 * This includes the full setup including all configurations
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'SitePackage',
    'Configuration/TypoScript',
    'SitePackage: Full Package (Overrides)'
);

/***************
 * TypoScript: Content Elements
 * Include only the configuration for content elements
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'SitePackage',
    'Configuration/TypoScript/ContentElement',
    'SitePackage: Content Elements (Overrides)'
);

/***************
 * TypoScript: Framework
 * Include Bootstrap 4.x (SCSS) Assets
 */
/*
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'SitePackage',
    'Configuration/TypoScript/Bootstrap4',
    'Bolt: Bootstrap 4.x (SCSS)'
);
*/
/***************
 * TypoScript: Framework
 * Include Bootstrap 5.x (SCSS) Assets
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'SitePackage',
    'Configuration/TypoScript/Bootstrap5',
    'SitePackage: Bootstrap 5.x (SCSS) Overrides'
);
