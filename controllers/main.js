exports.home = function(req, res) {
  res.render('index', { title: 'Home' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'About' });
};

exports.contact = function(req, res) {
  res.render('contact', { title: 'Contact' });
};

exports.location = function(req, res) {
  res.render('location', { title: 'Location' });
};

exports.review = function(req, res) {
  res.render('review', { title: 'Review' });
}; 