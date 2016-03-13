Posts = new Mongo.Collection("posts");

var funds_facebook = 1423;

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/contact',function(){
  this.layout('main');
  this.render('contact');
});

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('jumbotron', {data: {title: 'My Title'}});
});

Router.route('/post/:_id', function () {
  this.render('Post', {
    data: function () {
      return Posts.findOne({_id: this.params._id});
    }
  });
});



Router.route('/profile', function () {
  // render the Home template with a custom data context
  this.render('profile');
  this.template('Profile');
});

Router.route('/facebook', function () {
  // render the Home template with a custom data context
  this.render('facebook');
  this.template('facebook');
});

Router.route('/challenge/facebook/', function () {
  // render the Home template with a custom data context
  this.render('challengefacebook');
  this.template('challengefacebook');
});


Router.route('/challenge/facebook/2', function () {
  // render the Home template with a custom data context
  this.render('challengefacebook2');
  this.template('challengefacebook2');
});


Router.route('/challenge/facebook/3', function () {
  // render the Home template with a custom data context
  this.render('challengefacebook3');
  this.template('challengefacebook3');
});

Router.route('/splashscreen/facebook', function () {
  // render the Home template with a custom data context
  this.render('splashscreenFacebook');
  this.template('splashscreenFacebook');
});


Router.route('/paypal', function () {
  // render the Home template with a custom data context
  this.render('paypal');
  // render the Home template with a custom data context
  this.template('paypal');
});

Router.route('/challenge/paypal/', function () {
  // render the Home template with a custom data context
  this.render('challengepaypal');
  this.template('challengepaypal');
});


Router.route('/challenge/paypal/2', function () {
  // render the Home template with a custom data context
  this.render('challengepaypal2');
  this.template('challengepaypal2');
});


Router.route('/challenge/paypal/3', function () {
  // render the Home template with a custom data context
  this.render('challengepaypal3');
  this.template('challengepaypal3');
});

Router.route('/splashscreen/paypal', function () {
  // render the Home template with a custom data context
  this.render('splashscreenpaypal');
  this.template('splashscreenpaypal');
});


Router.route('/ieee', function () {
  // render the Home template with a custom data context
  this.render('ieee');
  this.template('ieee');
});

Router.route('/challenge/ieee/', function () {
  // render the Home template with a custom data context
  this.render('challengeieee');
  this.template('challengeieee');
});


Router.route('/challenge/ieee/2', function () {
  // render the Home template with a custom data context
  this.render('challengeieee2');
  this.template('challengeieee2');
});


Router.route('/challenge/ieee/3', function () {
  // render the Home template with a custom data context
  this.render('challengeieee3');
  this.template('challengeieee3');
});

Router.route('/splashscreen/ieee', function () {
  // render the Home template with a custom data context
  this.render('splashscreenieee');
  this.template('splashscreenieee');
});



Router.route('/profile/edit', function () {
  // render the Home template with a custom data context
  this.render('profileEdit');
  this.template('profileEdit');
});


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.challengefacebook.helpers({

  "editorOptions": function() {
    return {
      lineNumbers: true,
      mode: "javascript"
    }
  },

  "editorCode": function() {
    return "Code to show in editor";
  },
  "some event": function(e, t) {
    var code = t.find("#some-id").value;
    alert(code);
  },
});

   Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


}


