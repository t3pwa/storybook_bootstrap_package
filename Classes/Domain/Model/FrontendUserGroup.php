<?php

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

namespace Faeb\SitePackage\Domain\Model;

use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * A Frontend User Group
 */
class FrontendUserGroup extends AbstractEntity
{
    /**
     * @var string
     */
    protected string $title = '';

    /**
     * @var string
     */
    protected string $description = '';

    /**
     * @var ObjectStorage<FrontendUserGroup>
     */
    protected ObjectStorage $subgroup;

    public function __construct(string $title = '')
    {
        $this->setTitle($title);
        $this->subgroup = new ObjectStorage();
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Sets the description value
     *
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Sets the subgroups. Keep in mind that the property is called "subgroup"
     * although it can hold several subgroups.
     *
     * @param ObjectStorage<FrontendUserGroup> $subgroup
     */
    public function setSubgroup(ObjectStorage $subgroup): void
    {
        $this->subgroup = $subgroup;
    }

    public function addSubgroup(FrontendUserGroup $subgroup): void
    {
        $this->subgroup->attach($subgroup);
    }

    public function removeSubgroup(FrontendUserGroup $subgroup): void
    {
        $this->subgroup->detach($subgroup);
    }

    /**
     * Returns the subgroups. Keep in mind that the property is called "subgroup"
     * although it can hold several subgroups.
     *
     * @return ObjectStorage<FrontendUserGroup>
     */
    public function getSubgroup(): ObjectStorage
    {
        return $this->subgroup;
    }
}
