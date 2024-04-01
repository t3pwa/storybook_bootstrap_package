<?php
namespace Faeb\StorybookBootstrapPackage\Domain\Repository;
/**
 * Repository for tt_content objects
 *
 */
class TtContentRepository extends \TYPO3\CMS\Extbase\Persistence\Repository
{
    protected $objectType = '\Faeb\StorybookBootstrapPackage\Domain\Model\Ttcontent';
}