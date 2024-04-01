<?php

declare(strict_types=1);

namespace Faeb\StorybookBootstrapPackage\TypoScript;

/*
 * This file is part of TYPO3 CMS-based extension "bolt" by b13.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 */

use Faeb\StorybookBootstrapPackage\Configuration\PackageHelper;
use TYPO3\CMS\Core\TypoScript\TemplateService;

/**
 * Hooks into the process of building TypoScript templates
 * only works with TYPO3 v8.6.0 natively, otherwise the XCLASS kicks in
 */
class Loader
{
    /**
     * @var PackageHelper
     */
    protected $packageHelper;

    public function __construct(PackageHelper $packageHelper)
    {
        var_dump('construct TS LOAder in blog example');die();
        $this->packageHelper = $packageHelper;
    }

    /**
     *  $hookParameters = [
     *      'extensionStaticsProcessed' => &$this->extensionStaticsProcessed,
     *      'isDefaultTypoScriptAdded'  => &$this->isDefaultTypoScriptAdded,
     *      'absoluteRootLine' => &$this->absoluteRootLine,
     *      'rootLine'         => &$this->rootLine,
     *      'startTemplateUid' => $start_template_uid,
     *  ];
     * @param array $hookParameters
     * @param TemplateService $templateService
     */
    public function addSiteConfiguration(&$hookParameters, TemplateService $templateService)
    {
        // let's copy the rootline value, as $templateService->processTemplate() might reset it
        $rootLine = $hookParameters['rootLine'];
        if (!is_array($rootLine) || empty($rootLine)) {
            return;
        }
        foreach ($rootLine as $level => $pageRecord) {
            $package = $this->packageHelper->getStorybookBootstrapPackage((int)$pageRecord['uid']);
            if ($package !== null) {
                $constantsFile = $package->getPackagePath() . 'Configuration/TypoScript/constants.typoscript';
                $setupFile = $package->getPackagePath() . 'Configuration/TypoScript/setup.typoscript';
                if (!file_exists($constantsFile)) {
                    $constantsFile = $package->getPackagePath() . 'Configuration/TypoScript/constants.typoscript';
                }

                var_dump('ts loader');

                if (!file_exists($setupFile)) {
                    $setupFile = $package->getPackagePath() . 'Configuration/TypoScript/setup.typoscript';
                }

                if (file_exists($constantsFile)) {
                    $constants = (string)@file_get_contents($constantsFile);
                } else {
                    $constants = '';
                }
                if (file_exists($setupFile)) {
                    $setup = (string)@file_get_contents($setupFile);
                } else {
                    $setup = '';
                }

                // pre-process the lines of the constants and setup and check for "@" syntax
                // @import
                // @sitetitle
                // @clear
                // are the currently allowed syntax (must be on the head of each line)
                $hasRootTemplate = (bool)$templateService->getRootId();
                $fakeRow = [
                    'config' => $setup,
                    'constants' => $constants,
                    'nextLevel' => 0,
                    'static_file_mode' => 1,
                    'tstamp' => $setup ? filemtime($setupFile) : time(),
                    'uid' => 'sys_StorybookBootstrapPackage_' . (int)$pageRecord['uid'] . $package->getPackageKey(),
                    'title' => $package->getPackageKey(),
                    // make this the root template
                    'root' => !$hasRootTemplate
                ];
                $templateService->processTemplate($fakeRow, 'sys_StorybookBootstrapPackage_' . $package->getPackageKey(), (int)$pageRecord['uid'], 'sys_blogexample_' . $package->getPackageKey());

                if (!$hasRootTemplate) {
                    // $templateService->processTemplate() adds the constants and setup info
                    // to the very end however, we like to add ours add root template
                    array_pop($templateService->constants);
                    array_unshift($templateService->constants, $constants);
                    array_pop($templateService->config);
                    array_unshift($templateService->config, $setup);
                    // when having the 'root' flag, set $processTemplate resets the rootline -> we don't want that.
                    $hookParameters['rootLine'] = $rootLine;
                }
            }
        }
    }
}
