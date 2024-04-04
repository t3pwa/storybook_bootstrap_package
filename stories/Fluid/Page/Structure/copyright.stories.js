import { FluidTemplate } from "storybook-typo3fluid/";
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Scss/plugins/_cookieconsent.scss';
// import '../../public/typo3conf/ext/bootstrap_package/Resources/Public/Css/bootstrap5-theme.css';

// import './page_structure_copyright.css';

export default {
    title: 'Page/Structure/Copyright',
    tags: ['autodocs'],
    argTypes: {
        /*
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        // onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        layout: {
            control: { type: 'select' },
            options: ['0', '1', '2'],
        },

        header_layout: {
            control: { type: 'select' },
            options: ['0', '1', '2'],
        },

        frame_class: {
            control: { type: 'select' },
            options: ['default', '1', '2'],
        },
        */

        apiUrl: { control: 'text' },
        apiPassword: { control: 'text' },
    },
};


export const Template = (args) => FluidTemplate({
    extension: 'bootstrappackage',
    template: '',
    partial: 'Page/Structure/Copyright',
    section: '',
    args
});


export const Primary = Template.bind({});
Primary.args = {

    settings : {
        hidePagination: 1
    },
    theme: {
        cookieconsent: {
            enable: "true"
        },
        copyright: {
            enable: "true",
            text: '<small>][SB</small> &copy; Running with <link pageUid="1">TYPO3</link>, Boostrap Package and Storybook'
        }
    },

    header : 'header',
    layout : 1,
    class : 'classname',
    displayClass : 'displayClass',
    positionClass : 'bottom',
    link : 'https://t3pwa.org',

    primary: true,
    label: 'Button'



};

export const Secondary = Template.bind({});
Secondary.args = {
    // exampleProp: process.env.STORYBOOK_TYPO3FLUID_API_URL,
//    arr: ['one', 'two'],
    /*
        children_101: {
            0: {
                uid: '185',
                CType: 'textpic',
                header: 'header',
                header_position: 'above',
                bodytext: 'bodytext'
            },
            1: {
                uid: '185'
            }
        },
    */


    theme: {
        cookieconsent: {
            enable: "true"
        }
    },

    settings : {
        hidePagination: 1
    },

    header : 'Secondary Header',
    layout : 1,
    class : 'classname secondyry-classname',
    displayClass : 'displayClass displayClass-Secondary',
    positionClass : 'top',
    link : 'https://t3pwa.com',

    primary: true,
    label: 'Button Secondary'


    /*
    rowDescription => ''

    tstamp => 1711001994
    crdate => 1711001994
    cruser_id => 1


    bullets_type => 0 (integer)

    uploads_description => 0 (integer)
    uploads_type => 0 (integer)
    assets => 0 (integer)

    image => 1 (integer)
    imagewidth => 0 (integer)
    imageorient => 0 (integer)
    imagecols => 1 (integer)
    imageborder => 0 (integer)

    media => 0 (integer)
    layout => 0 (integer)
    frame_class => 'default' (7 chars)
    cols => 0 (integer)
    space_before_class => '' (0 chars)
    space_after_class => '' (0 chars)
    records => NULL
    pages => NULL
    colPos => 101 (integer)
    subheader => '' (0 chars)
    header_link => '' (0 chars)
    image_zoom => 0 (integer)
    header_layout => '0' (1 chars)
    list_type => '' (0 chars)
    sectionIndex => 1 (integer)
    linkToTop => 0 (integer)
    file_collections => NULL
    filelink_size => 0 (integer)
    filelink_sorting => '' (0 chars)
    filelink_sorting_direction => '' (0 chars)
    target => '' (0 chars)
    date => 0 (integer)
    recursive => 0 (integer)
    imageheight => 0 (integer)
    pi_flexform => NULL
    accessibility_title => '' (0 chars)
    accessibility_bypass => 0 (integer)
    accessibility_bypass_text => '' (0 chars)
    category_field => '' (0 chars)
    table_class => '' (0 chars)
    table_caption => NULL
    table_delimiter => 124 (integer)
    table_enclosure => 0 (integer)
    table_header_position => 0 (integer)
    table_tfoot => 0 (integer)
    categories => 0 (integer)
    selected_categories => NULL
    tx_impexp_origuid => 0 (integer)
    tx_blog_tag_content => 0 (integer)
    tx_blog_category_content => 0 (integer)
    tx_container_parent => 184 (integer)
    heading_color => '' (0 chars)
    underlink_style => '' (0 chars)
    border_style => '' (0 chars)
    headingbg_color => '' (0 chars)
    headingfn_case => '' (0 chars)
    subHeader_style => '' (0 chars)
    tx_additional_class => NULL
    header_class => '' (0 chars)
    subheader_class => '' (0 chars)
    teaser => NULL
    aspect_ratio => '1.3333333333333' (15 chars)
    items_per_page => 10 (integer)
    readmore_label => '' (0 chars)
    quote_source => '' (0 chars)
    quote_link => '' (0 chars)
    panel_class => 'default' (7 chars)
    file_folder => '' (0 chars)
    icon => '' (0 chars)
    icon_set => '' (0 chars)
    icon_file => 0 (integer)
    icon_position => '' (0 chars)
    icon_size => 'default' (7 chars)
    icon_type => 'default' (7 chars)
    icon_color => '#FFFFFF' (7 chars)
    icon_background => '#333333' (7 chars)
    external_media_title => '' (0 chars)
    external_media_source => '' (0 chars)
    external_media_ratio => '' (0 chars)
    tx_bootstrappackage_card_group_item => 0 (integer)
    tx_bootstrappackage_carousel_item => 0 (integer)
    tx_bootstrappackage_accordion_item => 0 (integer)
    tx_bootstrappackage_icon_group_item => 0 (integer)
    tx_bootstrappackage_tab_item => 0 (integer)
    tx_bootstrappackage_timeline_item => 0 (integer)
    frame_layout => 'default' (7 chars)
    frame_options => '' (0 chars)
    background_color_class => 'none' (4 chars)
    background_image => 0 (integer)
    subitems_header_layout => 4 (integer)
    tx_news_related_news => 0 (integer)
    background_media => 0 (integer)
    tx_styleguide_containsdemo => '' (0 chars)
    tx_blogexample_content_elements => 0 (integer)

     */

};

