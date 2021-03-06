tau.mashups.addModule('EmbeddedPages/config', {

    tabs: [{
        /* Sample embedded page of the 'CustomPageUrl' Custom Field of a User Story of a Project with the 'Scrum' Process */
        entityTypeName: 'UserStory',
        customFieldName: 'Image of the day',
        processName: 'Scrum',
        frameTemplate: '<iframe src="${url}" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    }, {
        /* Sample embedded page of the 'CustomPageUrl' Custom Field of a User Story of any Project */
        entityTypeName: 'UserStory',
        customFieldName: 'CustomPageUrl'
    }, {
        /* Sample embedded page of the 'CustomEmbeddedVideoUrl' Custom Field with the overridden template of the tab frame */
        entityTypeName: 'Project',
        customFieldName: 'CustomEmbeddedVideoUrl',
        frameTemplate: '<iframe src="${url}" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    }, {
        /* Embedded page for entity without process */
        entityTypeName: 'User',
        customFieldName: 'Facebook Profile'
    }]

});
