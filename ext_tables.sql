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