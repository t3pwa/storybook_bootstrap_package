<?php
namespace Faeb\SitePackage\Domain\Repository;
/**
 * Repository for tt_content objects
 *
 */
class TtContentRepository extends \TYPO3\CMS\Extbase\Persistence\Repository
{
    protected $objectType = '\Faeb\SitePackage\Domain\Model\Ttcontent';
}