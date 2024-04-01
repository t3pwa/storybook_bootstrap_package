<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Fäb | Blog Example',
    'description' => 'This extension contains code examples used in TYPO3 explained to describe the use of Extbase',
    'version' => '11.0.3',
    'category' => 'example, blog, video, bootstrap, ',
    'author' => 'TYPO3 Documentation Team and Contributors',
    'author_company' => '',
    'author_email' => '',
    'state' => 'beta',
    'clearCacheOnLoad' => 1,
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'Faeb/videoprocessing' => '@dev'
        ],
        'conflicts' => [

        ],
        'suggests' => [],
    ]
];
