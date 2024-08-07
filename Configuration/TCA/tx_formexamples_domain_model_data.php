<?php
return [
    'ctrl' => [
        'title' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data',
        'label' => 'firstname',
        'label_userFunc' => 'Sebkln\\FormExamples\\UserFunc\\Tca->formDataLabel',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'delete' => 'deleted',
        'searchFields' => 'formtitle,firstname,lastname,company,title,email,address,zip,city,country,www,telephone,fax,subject,message,media',
        'security' => [
            'ignorePageTypeRestriction' => true,
        ],
        'iconfile' => 'EXT:storybook_bootstrap_package/Resources/Public/Icons/form-examples-data.svg'
    ],
    'types' => [
        '1' => [
            'showitem' => '
                --palette--;;formtitle,
                --palette--;;person,
                --palette--;;address,
                --palette--;;contactinfo,
                --palette--;;communication,
                --palette--;;file
            '
        ],
    ],
    'palettes' => [
        'formtitle' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.formtitle',
            'showitem' => 'formtitle'
        ],
        'person' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.person',
            'showitem' => 'title, --linebreak--, firstname, --linebreak--, lastname, --linebreak--, company'
        ],
        'address' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.address',
            'showitem' => 'address, --linebreak--, zip, --linebreak--, city, --linebreak--, country'
        ],
        'contactinfo' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.contactinfo',
            'showitem' => 'email, --linebreak--, telephone, --linebreak--, fax, --linebreak--, www'
        ],
        'communication' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.communication',
            'showitem' => 'subject, --linebreak--, message'
        ],
        'file' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.palette.file',
            'showitem' => 'media'
        ],
    ],
    'columns' => [
        'formtitle' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.formtitle',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'firstname' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.firstname',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'lastname' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.lastname',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'title' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.title',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'company' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.company',
            'config' => [
                'type' => 'input',
                'size' => 60,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'email' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.email',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'address' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.address',
            'config' => [
                'type' => 'input',
                'size' => 60,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'zip' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.zip',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'city' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.city',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'country' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.country',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'www' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.www',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'telephone' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.telephone',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'fax' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.fax',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'subject' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.subject',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'readOnly' => 1,
            ],
        ],
        'message' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.message',
            'config' => [
                'type' => 'text',
                'cols' => 40,
                'rows' => 15,
                'eval' => 'trim',
                'readOnly' => 1,
            ]
        ],
        'media' => [
            'label' => 'LLL:EXT:storybook_bootstrap_package/Resources/Private/Language/locallang_tca.xlf:tx_storybookbootstrappackage_domain_model_data.media',
            'config' => [
                'type' => 'file',
                'readOnly' => 1,
                'appearance' => [
                    'useSortable' => true,
                    'headerThumbnail' => [
                        'field' => 'uid_local',
                        'height' => '45m',
                    ],
                    'enabledControls' => [
                        'info' => true,
                        'new' => false,
                        'dragdrop' => false,
                        'sort' => false,
                        'hide' => false,
                        'delete' => false,
                    ],
                ],
            ],
        ],
    ],
];
