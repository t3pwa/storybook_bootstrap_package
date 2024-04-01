<?php
declare(strict_types=1);

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Utility\GeneralUtility;


defined('TYPO3') or die();

/**
 * Registers a Plugin to be listed in the Backend.
 */
$extensionConfiguration = GeneralUtility::makeInstance(ExtensionConfiguration::class);

if ($extensionConfiguration->get('storybook_bootstrap_package', 'registerSinglePlugin')) {
    ExtensionUtility::registerPlugin(
        'storybook_bootstrap_package',
        'Pi1',
        '[Faeb/storybook_bootstrap_package] registerSinglePlugin' // A title shown in the backend dropdown field
    );
    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist']['blogexample_pi1']
        = 'select_key';
    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['blogexample_pi1']
        = 'pi_flexform,recursive';
    ExtensionManagementUtility::addPiFlexFormValue(
        'blogexample_pi1',
        'FILE:EXT:storybook_bootstrap_package/Configuration/FlexForms/flexform_list.xml');
} else {
    ExtensionUtility::registerPlugin(
        'storybook_bootstrap_package',
        'BlogList',
        'List of Blogs ([Faeb] StorybookBootstrapPackage)',
        'storybook_bootstrap_package_icon'
    );
    ExtensionUtility::registerPlugin(
        'storybook_bootstrap_package',
        'PostList',
        'List of Posts ([Faeb] StorybookBootstrapPackage)',
        'storybook_bootstrap_package_icon'
    );
    ExtensionUtility::registerPlugin(
        'storybook_bootstrap_package',
        'PostSingle',
        'Single Post ([Faeb] StorybookBootstrapPackage)',
        'storybook_bootstrap_package_icon'
    );
    ExtensionUtility::registerPlugin(
        'storybook_bootstrap_package',
        'BlogAdmin',
        'Admin Plugin (StorybookBootstrapPackage)',
        'storybook_bootstrap_package_icon'
    );

    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist']['blogexample_postlist']
        = 'select_key';
    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['blogexample_postlist']
        = 'pi_flexform,recursive';
    ExtensionManagementUtility::addPiFlexFormValue(
        'blogexample_postlist',
        'FILE:EXT:storybook_bootstrap_package/Configuration/FlexForms/flexform_list.xml'
    );
}