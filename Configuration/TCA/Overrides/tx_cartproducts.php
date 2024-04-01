<?php
declare(strict_types=1);

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Utility\GeneralUtility;


defined('TYPO3') or die();


// $GLOBALS['TCA']['tt_content']['columns']['tx_cartproducts_domain_model_product_product']['config']['type'] = 'passthrough';


//missing database relation fields for tt_content?
// Register fields
#$GLOBALS['TCA']['tt_content']['columns'] = array_replace_recursive(
#    $GLOBALS['TCA']['tt_content']['columns'],
#    [
#        // 'tx_bootstrappackage_card_group_item' => [
#        'tx_cartproducts_domain_model_product_product' => [
#            'label' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:card_group_item',
#            'config' => [
#                'type' => 'inline',
#                // 'foreign_table' => 'tx_bootstrappackage_card_group_item',
#                'foreign_table' => 'tx_cartproducts_domain_model_product_product',
#                'foreign_field' => 'tt_content',
#                'appearance' => [
#                    'useSortable' => true,
#                    'showSynchronizationLink' => true,
#                    'showAllLocalizationLink' => true,
#                    'showPossibleLocalizationRecords' => true,
#                    'expandSingle' => true,
#                    'enabledControls' => [
#                       'localize' => true,
#                    ]
#                ],
#                'behaviour' => [
#                    'mode' => 'select',
#                ]
#            ]
#        ]
#    ]
#);
