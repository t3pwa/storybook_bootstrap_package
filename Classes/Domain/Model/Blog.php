<?php
declare(strict_types=1);

namespace Faeb\StorybookBootstrapPackage\Domain\Model;

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

use TYPO3\CMS\Extbase\Annotation as Extbase;
use TYPO3\CMS\Extbase\Domain\Model\Category;
use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * A blog
 */
class Blog extends AbstractEntity
{


    /**
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\MyNameSpace\Myextension\Domain\Model\TtContent>
     * @lazy
     */
    protected $contentElements;


    /*
    public function __construct()
    {
        $this->contentElements = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
    }
    */

    /**
     * Adds a content element to the record
     *
     * @param \Faeb\StorybookBootstrapPackage\Domain\Model\TtContent $contentElement
     * @return void
     */
    public function addContentElement(\MyNameSpace\MyExtension\Domain\Model\TtContent $contentElement)
    {
        if ($this->getContentElements() === null) {
            $this->contentElements = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
        }
        $this->contentElements->attach($contentElement);
    }

    /**
     * Get id list of content elements
     *
     * @return string
     */
    public function getContentElementIdList()
    {
        $idList = [];
        $contentElements = $this->getContentElements();


        var_dump( $contentElements ) ; die();

        if ($contentElements) {
            foreach ($this->getContentElements() as $contentElement) {
                $idList[] = $contentElement->getUid();
            }
        }
        return implode(',', $idList);
    }

    /**
     * Get content elements
     *
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage
     */
    public function getContentElements()
    {
        return $this->contentElements;
    }




    /**
     * The blog's title.
     *
     * @Extbase\Validate("StringLength", options={"minimum": 1, "maximum": 80})
     */
    protected string $title = '';

    /**
     * The blog's subtitle
     */
    protected ?string $subtitle = null;

    /**
     * A short description of the blog
     *
     * @Extbase\Validate("StringLength", options={"maximum": 150})
     */
    protected string $description = '';

    /**
     * A relative path to a logo image
     */
    protected string $logo = '';

    /**
     * The posts of this blog
     *
     * @var ObjectStorage<Post>
     * @Extbase\ORM\Lazy
     * @Extbase\ORM\Cascade("remove")
     */
    protected ObjectStorage $posts;

    /**
     * @var ObjectStorage<Category>
     */
    protected ObjectStorage $categories;

    /**
     * The blog's administrator
     *
     * @var Administrator
     * @Extbase\ORM\Lazy
     */
    protected $administrator;


    /**
     * Initialize content element relation
     *
     * @return \Faeb\StorybookBootstrapPackage\Domain\Model\Blog
     */
    public function __construct()
    {
        $this->posts = new ObjectStorage();
        $this->categories = new ObjectStorage();
        $this->contentElements = new ObjectStorage();
    }

    public function getSubtitle(): string
    {
        return $this->subtitle;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setLogo(string $logo): void
    {
        $this->logo = $logo;
    }

    public function getLogo(): string
    {
        return $this->logo;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function addPost(Post $post): void
    {
        $this->posts->attach($post);
    }

    public function removePost(Post $postToRemove): void
    {
        $this->posts->detach($postToRemove);
    }

    public function removeAllPosts(): void
    {
        $this->posts = new ObjectStorage();
    }

    /**
     * @return ObjectStorage<Post>
     */
    public function getPosts(): ObjectStorage
    {
        return $this->posts;
    }

    public function addCategory(Category $category): void
    {
        $this->categories->attach($category);
    }

    /**
     * @param ObjectStorage<Category> $categories
     */
    public function setCategories(ObjectStorage $categories): void
    {
        $this->categories = $categories;
    }

    /**
     * @return ObjectStorage<Category>
     */
    public function getCategories(): ObjectStorage
    {
        return $this->categories;
    }

    public function removeCategory(Category $category): void
    {
        $this->categories->detach($category);
    }

    public function setAdministrator(Administrator $administrator): void
    {
        $this->administrator = $administrator;
    }

    public function getAdministrator(): Administrator
    {
        return $this->administrator;
    }

    public function setSubtitle(?string $subtitle): void
    {
        $this->subtitle = $subtitle;
    }
}
