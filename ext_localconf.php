<?php

defined('TYPO3') or die();

use Faeb\StorybookBootstrapPackage\Controller\BlogController;
use Faeb\StorybookBootstrapPackage\Controller\CommentController;
use Faeb\StorybookBootstrapPackage\Controller\PostController;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Information\Typo3Version;

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\ExtensionUtility;

(function () {



    $extensionKey = 'storybook_bootstrap_package';

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'constants',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/constants.typoscript"'
    );

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/setup.typoscript"'
    );


    ExtensionManagementUtility::addTypoScript(
        'container_elements',
        'setup',
        '@import "EXT:container_elements/Configuration/TypoScript/setup.typoscript"'
    );

    ExtensionManagementUtility::addTypoScript(
        'container_elements',
        'setup',
        '@import "EXT:FILE:EXT:storybook_bootstrap_package/Configuration/TypoScript/ContentElement/Helper/DynamicContent.typoscript"'
    );



    /*
     * NEWS
     */
/*
    $extensionKey = 'news';

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'constants',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/constants.typoscript"'
    );

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/setup.typoscript"'
    );

    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
        'News',
        'NewsDetail',
        [
            \GeorgRinger\News\Controller\NewsController::class => 'detail',
        ],
        [],
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::PLUGIN_TYPE_CONTENT_ELEMENT
    );

*/

    /*
     * BOOTSTRAP_PACKAGE
     */
/*
    $extensionKey = 'bootstrap_package';
    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'constants',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/constants.typoscript"'
    );

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/setup.typoscript"'
    );

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/ContentElement/Helper/DynamicContent.typoscript"'
    );
    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/ContentElement/Helper/ContentElement.typoscript"'
    );


//    @import 'EXT:bootstrap_package/Configuration/TypoScript/ContentElement/setup.typoscript'
//    @import 'EXT:bootstrap_package/Configuration/TypoScript/Extension/setup.typoscript'

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/ContentElement/setup.typoscript"'
    );
    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/Extension/setup.typoscript"'
    );

// @import 'EXT:bootstrap_package/Configuration/TypoScript/ContentElement/Helper/ContentElement.typoscript'
// @import 'EXT:bootstrap_package/Configuration/TypoScript/ContentElement/Helper/DynamicContent.typoscript'
// @import 'EXT:bootstrap_package/Configuration/TypoScript/ContentElement/Helper/ParseFunc.typoscript'


//     @import 'EXT:bootstrap_package/Configuration/TypoScript/Helper/Block.typoscript'
//    @import 'EXT:bootstrap_package/Configuration/TypoScript/Helper/PageClass.typoscript'

    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/Helper/Block.typoscript"'
    );
    ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '@import "EXT:' . $extensionKey . '/Configuration/TypoScript/Helper/PageClass.typoscript"'
    );
*/




})();



(static function (string $extensionName): void {
    $versionInformation = GeneralUtility::makeInstance(Typo3Version::class);
    // Only include page.tsconfig if TYPO3 version is below 12 so that it is not imported twice.
    if ($versionInformation->getMajorVersion() < 12) {
        ExtensionManagementUtility::addPageTSConfig(
            '@import "EXT:storybook_bootstrap_package/Configuration/page.tsconfig"'
        );
    }

    /**
     * Configure the Plugin to call the
     * right combination of Controller and Action according to
     * the user input (default settings, FlexForm, URL etc.)
     */

/*
    if (
        GeneralUtility::makeInstance(ExtensionConfiguration::class)->get(
            'StorybookBootstrapPackage',
            'registerSinglePlugin'
        )
    ) {
        ExtensionUtility::configurePlugin(
            $extensionName,
            'Pi1',
            // Cache-able Controller-Actions
            [
                BlogController::class => 'index,new,create,delete,deleteAll,edit,update,populate',
                PostController::class => 'index,show,new,create,delete,edit,update',
                CommentController::class => 'create,delete',
            ],
            // Non-Cache-able Controller-Actions
            [
                BlogController::class => 'create,delete,deleteAll,update,populate',
                PostController::class => 'create,delete,update',
                CommentController::class => 'create,delete',
            ]
        );
    } else {

        // Blog plugins
        ExtensionUtility::configurePlugin(
            $extensionName,
            'BlogList',
            // Cache-able Controller-Actions
            [
                BlogController::class => 'index',
            ]
        );

        // Post plugins
        ExtensionUtility::configurePlugin(
            $extensionName,
            'PostList',
            // Cache-able Controller-Actions
            [
                PostController::class => 'index',
            ]
        );

        ExtensionUtility::configurePlugin(
            'StorybookBootstrapPackage',
            'PostSingle',
            // Cache-able Controller-Actions
            [
                PostController::class => 'show',
                CommentController::class => 'create',
            ],
            // Non-Cache-able Controller-Actions
            [
                CommentController::class => 'create',
            ]
        );

        // RSS Feed
        ExtensionUtility::configurePlugin(
            $extensionName,
            'PostListRss',
            // Cache-able Controller-Actions
            [
                PostController::class => 'displayRssList',
            ]
        );

        // admin plugins
        ExtensionUtility::configurePlugin(
            $extensionName,
            'BlogAdmin',
            // Cache-able Controller-Actions
            [
                BlogController::class => 'new,create,delete,deleteAll,edit,update,populate',
                PostController::class => 'new,create,delete,edit,update',
                CommentController::class => 'delete',
            ],
            // Non-Cache-able Controller-Actions
            [
                BlogController::class => 'create,delete,deleteAll,update,populate',
                PostController::class => 'create,delete,update',
                CommentController::class => 'delete',
            ]
        );

    }
*/
})('StorybookBootstrapPackage');
