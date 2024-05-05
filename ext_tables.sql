##
## Table structure for table 'tt_content'
##
#CREATE TABLE tt_content (
#    tx_sitepackage_content_elements int(11) DEFAULT '0' NOT NULL
#);

#
# Table structure for table 'tx_bootstrappackage_carousel_item'
#
CREATE TABLE tx_bootstrappackage_carousel_item (
    content_elements TEXT
);

#
# Table structure for table 'tx_bootstrappackage_carousel_item_ttcontent_mm'
#
CREATE TABLE tx_bootstrappackage_carousel_item_ttcontent_mm (
      uid_local int(11) DEFAULT '0' NOT NULL,
      uid_foreign int(11) DEFAULT '0' NOT NULL,
      sorting int(11) DEFAULT '0' NOT NULL,
      KEY uid_local (uid_local),
      KEY uid_foreign (uid_foreign)
);




#
# Table structure for table 'tx_storybookbootstrappackage_domain_model_data'
#
CREATE TABLE tx_formexamples_domain_model_data (
                                                                uid       int(11) unsigned NOT NULL auto_increment,
                                                                pid       int(11) DEFAULT '0' NOT NULL,

                                                                formtitle varchar(255) DEFAULT '' NOT NULL,
                                                                firstname varchar(255) DEFAULT '' NOT NULL,
                                                                lastname  varchar(255) DEFAULT '' NOT NULL,
                                                                title     varchar(255) DEFAULT '' NOT NULL,
                                                                company   varchar(255) DEFAULT '' NOT NULL,
                                                                email     varchar(255) DEFAULT '' NOT NULL,
                                                                address   varchar(255) DEFAULT '' NOT NULL,
                                                                zip       varchar(255) DEFAULT '' NOT NULL,
                                                                city      varchar(255) DEFAULT '' NOT NULL,
                                                                country   varchar(255) DEFAULT '' NOT NULL,
                                                                www       varchar(255) DEFAULT '' NOT NULL,
                                                                telephone varchar(255) DEFAULT '' NOT NULL,
                                                                fax       varchar(255) DEFAULT '' NOT NULL,
                                                                subject   varchar(255) DEFAULT '' NOT NULL,
                                                                message   text,
                                                                media     int(11) unsigned NOT NULL default '0',

                                                                # Additional field for video news upload
       fal_media int(11) unsigned NOT NULL default '0',

                                                                PRIMARY KEY (uid),
                                                                KEY       parent (pid)
);


#
# Table structure for table 'tx_storybookbootstrappackage_domain_model_data'
#
CREATE TABLE tx_storybookbootstrappackage_domain_model_data (
       uid       int(11) unsigned NOT NULL auto_increment,
       pid       int(11) DEFAULT '0' NOT NULL,

       formtitle varchar(255) DEFAULT '' NOT NULL,
       firstname varchar(255) DEFAULT '' NOT NULL,
       lastname  varchar(255) DEFAULT '' NOT NULL,
       title     varchar(255) DEFAULT '' NOT NULL,
       company   varchar(255) DEFAULT '' NOT NULL,
       email     varchar(255) DEFAULT '' NOT NULL,
       address   varchar(255) DEFAULT '' NOT NULL,
       zip       varchar(255) DEFAULT '' NOT NULL,
       city      varchar(255) DEFAULT '' NOT NULL,
       country   varchar(255) DEFAULT '' NOT NULL,
       www       varchar(255) DEFAULT '' NOT NULL,
       telephone varchar(255) DEFAULT '' NOT NULL,
       fax       varchar(255) DEFAULT '' NOT NULL,
       subject   varchar(255) DEFAULT '' NOT NULL,
       message   text,
       media     int(11) unsigned NOT NULL default '0',

    # Additional field for video news upload
       fal_media int(11) unsigned NOT NULL default '0',

       PRIMARY KEY (uid),
       KEY       parent (pid)
);
