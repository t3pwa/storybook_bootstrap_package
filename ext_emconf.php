<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'TYPO3 Fluid Storybook Boostrap Package',
    'description' => '',
    'version' => '11.0.3',
    'category' => 'example, video, bootstrap, ',
    'author' => 'TYPO3 Documentation Team and Contributors',
    'author_company' => '',
    'author_email' => '',
    'state' => 'beta',
    'clearCacheOnLoad' => 1,
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'philip-hartmann/typo3fluid-api' => '^0.2',
            'bk2k/bootstrap_package' => '^12'
        ],
        'replaces' => [
            'philip-hartmann/typo3fluid_storybook_example'
        ],
        'suggests' => [
            "headless_bootstrap_package",
            "GeorgRinger/news",
            'Faeb/videoprocessing' => '@dev',
        ],
    ]
];
