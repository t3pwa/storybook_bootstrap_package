<?php
namespace Faeb\StorybookBootstrapPackage\Finisher;

use In2code\Powermail\Domain\Model\Mail;
use In2code\Powermail\Finisher\AbstractFinisher;

use TYPO3\CMS\Core\Resource\StorageRepository;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Resource\ResourceFactory;

use \TYPO3\CMS\Core\Core\Environment;

/**
 * Class DoSomethingFinisher
 *
 * @package Vendor\Ext\Finisher
 */
class ImageFinisher extends AbstractFinisher
{

    /**
     * @var $mail
     */
    protected \In2code\Powermail\Domain\Model\Mail $mail;

    /**
     * @var array
     */
    protected array $configuration;

    /**
     * @var array
     */
    protected array $settings;

    /**
     * @var \TYPO3\CMS\Core\Resource\ResourceFactory
     * @inject
     */
    protected $resourceFactory;


    /**
     * @var \TYPO3\CMS\Extbase\Object\ObjectManager
     * @inject
     */
    protected $objectManager;

    /**
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @inject
     */
    protected $persistenceManager;



    /**
     * Will be called always at first
     *
     *
     * @return void
     */
    public function initializeFinisher():void
    {
    }

    /**
     * Will be called before myFinisher()
     *
     * @return void
     */
    public function initializeMyFinisher():void
    {
    }


    // https://github.com/drc-systems/Powermail-save-image-third-party-table/blob/master/AddImageFinisher.php
    protected function createFileReferenceFromFalFileObject(\TYPO3\CMS\Core\Resource\File $file, $resourcePointer = null, $obj, $uid): void
    {

        $resourceFactory = GeneralUtility::makeInstance(ResourceFactory::class);

        // $fileObject = $this->resourceFactory->getFileObject($file->getUid());
        $fileObject = $resourceFactory->getFileObject($file->getUid());

//        var_dump($file->getUid());
        \TYPO3\CMS\Core\Utility\DebugUtility::debug( $fileObject->getUid() ); #sys_file
        \TYPO3\CMS\Core\Utility\DebugUtility::debug("objuid ". $obj->getUid());
//        \TYPO3\CMS\Core\Utility\DebugUtility::debug("objuid ". $obj->getHeader());
        \TYPO3\CMS\Core\Utility\DebugUtility::debug("uid ". $uid ); ##556 news
//        \TYPO3\CMS\Core\Utility\DebugUtility::debug("sys_file uid ". $file->getUid() );



        $newId = uniqid('NEW_'); #sys_file_refence #557

        $data = [];
        $data['sys_file_reference'][$newId] = [
            'table_local' => 'sys_file',
            'uid_local' => $fileObject->getUid(), #sys_file #970
            'tablenames' => 'tx_news_domain_model_news',
            // 'uid_foreign' => $obj->getUid(),
//            'uid_foreign' => $fileObject->getUid(),
            'uid_foreign' => intval($uid+1), #556
            // 'fieldname' => 'image',
            'fieldname' => 'fal_media',
//            'pid' => $this->configuration['pid']['value'],
            'pid' => '359', # News Records
            'showinpreview' => 1
        ];

        // Get an instance of the DataHandler and process the data
        /** @var DataHandler $dataHandler */
        $dataHandler = GeneralUtility::makeInstance(
            'TYPO3\CMS\Core\DataHandling\DataHandler'
        );

/*
        $data['tx_news_domain_model_news'][intval($uid-1)] = [
//            'fal_media' => $newId,
//            'fal_media' => 1,
//            'fal_media' => $fileObject->getUid(),

            'datetime' => date("U"),
//            'pid' => 359,
            'pid' => '359', # News Records
            'title' => $uid.'_'.'tx_news_domain_model_news',
            'type' => 0
        ];
*/
        $dataHandler->start($data, []);
        $dataHandler->process_datamap();

        if (count($dataHandler->errorLog) !== 0) {
            echo 'datahandler error !!!';
            var_dump( $dataHandler->errorLog );
                die();
        }


    }


    /**
     *
     * @var $fileData
     *
     * @return \TYPO3\CMS\Extbase\Domain\Model\FileReference
     */
    private function uploadFile($fileData, $targetNameOfFile, $obj, $uid) {
        //$storageRepository = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Resource\\StorageRepository');

        // var_dump( $fileData );
        //        var_dump( $targetNameOfFile );
        // var_dump($fileData);

        $storageRepository = GeneralUtility::makeInstance(StorageRepository::class);
        //$storage = $storageRepository->findByUid(1); # Fileadmin = 1
        $storage = $storageRepository->getDefaultStorage();

        //var_dump($this->settings);
        // $saveFolder = $storage->getFolder($this->settings['uploadFolder']);
        // $saveFolder = $storage->getFolder('/fileadmin/' . $this->settings['misc']['file']['folder']);
        // $saveFolder = $storage->getFolder('/user_upload/');
        // $saveFolderPath = \TYPO3\CMS\Core\Core\Environment::getPublicPath() .

        $saveFolderPath = $this->settings['misc']['file']['folder'];

        //        var_dump($storage->getFolder( $storage->getFolder( Environment::getPublicPath() . '/fileadmin/' . $saveFolderPath ) ));
        // var_dump($storage->getRootLevelFolder());

//        \TYPO3\CMS\Core\Utility\DebugUtility::debug( $targetNameOfFile );
//        \TYPO3\CMS\Core\Utility\DebugUtility::debug( $saveFolderPath );

        $fileObject = $storage->addFile(
            $fileData,
            //$saveFolder,
  //          $storage->getRootLevelFolder(),
            $storage->getFolder( $saveFolderPath ) ,
            $targetNameOfFile
        );

//        \TYPO3\CMS\Core\Utility\DebugUtility::debug($storage->getFile($fileObject->getIdentifier()));
//        \TYPO3\CMS\Core\Utility\DebugUtility::debug($fileObject->getIdentifier());

        $repositoryFileObject = $storage->getFile($fileObject->getIdentifier());

//        \TYPO3\CMS\Core\Utility\DebugUtility::debug( $repositoryFileObject );
//          \TYPO3\CMS\Core\Utility\DebugUtility::debug( $repositoryFileObject );

//        var_dump($fileObject->getIdentifier());
        // var_dump($repositoryFileObject);

        $this->createFileReferenceFromFalFileObject(
            $repositoryFileObject,
            null,
            $fileObject,
            $uid #news
        );



        return $repositoryFileObject;
    }



    /**
     * MyFinisher
     *
     * @return void
     */
    public function myFinisher()
    {
        // get value from configuration
        // $foo = $this->configuration['foo'];

        // get subject from mail
        $subject = $this->getMail()->getSubject();

        // var_dump( $this->getMail()->getUid() );

        // get a value by markername
        // $value = $this->getMail()->getAnswersByFieldMarker()['markerName']->getValue();
        // empty?!

        // get author from feuser in ts instead
//        $value_author = $this->getMail()->getAnswersByFieldMarker()['author']->getValue();
//        var_dump($value_author);

        // get a value by field uid // 12 email
#        $value = $this->getMail()->getAnswersByFieldUid()[12]->getValue();
#        var_dump($value);



        // $path = PATH_site . $this->settings['misc']['file']['folder'];
        $path = \TYPO3\CMS\Core\Core\Environment::getPublicPath() . '/' . $this->settings['misc']['file']['folder'];

#        var_dump($path);

        $fields = $this->getMail()->getAnswers();

        $objNews = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
            'GeorgRinger\News\Domain\Model\News'
        );

        // var_dump( $obj );

        if ($fields->count()) {
            //Get Powermail Fields Title

            $name = $this->configuration['field_name'];

            // $place = $this->configuration['field_place'];
            // $email = $this->configuration['field_email'];
            // $message = $this->configuration['field_message'];

            $resultFile = '';
            foreach ($fields as $field) {
                $customerName = '';
                $customerPlace = '';
                $customerEmail = '';
                $customerMessage = '';
                /*
                if ($field->getField()->getTitle() == $name) {
                    $customerName = $field->getValue();
                    $obj->setName($customerName);
                }
                if ($field->getField()->getTitle() == $place) {
                    $customerPhone = $field->getValue();
                    $obj->setPlace($customerPhone);
                }
                if ($field->getField()->getTitle() == $email) {
                    $customerEmail = $field->getValue();
                    $obj->setEmail($customerEmail);

                }
                if ($field->getField()->getTitle() == $message) {
                    $customerMessage = $field->getValue();
                    $obj->setMessage($customerMessage);
                }
                */

                // if is type of file
                if ($field->getValueType() == 3) {
                    if (is_array($field->getValue())) {
                        $files = $field->getValue();
                        foreach ($files as $file) {
//                            var_dump($file);
                            $fileRes = $path . $file;
                            $resultFile = $file;
                        }
                    }
                }
            }
        }

//        var_dump($fileRes);

        $this->objectManager = GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Object\ObjectManager::class);
        $this->persistenceManager = $this->objectManager->get("TYPO3\\CMS\\Extbase\\Persistence\\Generic\\PersistenceManager");
        // var_dump($objNews->getUid() );

        $this->persistenceManager->add($objNews);
        $this->persistenceManager->persistAll();

//        var_dump("news uid". $objNews->getUid() );
//        var_dump( "mail uid". $this->getMail()->getUid() );

        if (isset($fileRes)) {
            $repositoryFileObject = $this->uploadFile($fileRes, $resultFile, $objNews, $objNews->getUid());
        }

    }
}
