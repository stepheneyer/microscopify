if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://www.sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://www.meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://www.themeteorbook.com'
    });
}