Vue.component('vue-header', {
  template: `
 <header class="masthead">
      <div class="container">
        <div class="intro-text">
        </div>
      </div>
    </header>
    `
});

Vue.component('vue-navigation', {
  props: ['title', 'url'],
  template: `
              <a class="navbar-item js-scroll-trigger" :href="url">{{ title }}</a>
    `
});

Vue.component('vue-navigation-en', {
  props: ['title', 'url'],
  template: `
              <a class="navbar-item js-scroll-trigger" :href="url">{{ title }}</a>
    `
});

Vue.component('vue-announcements', {
  template: `
        <section id="party">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-half">
                    <div class="fb-post" data-href="https://www.facebook.com/chilenos.fernandez.9/posts/425412431566273" data-show-text="true"><blockquote cite="https://developers.facebook.com/chilenos.fernandez.9/posts/425412431566273" class="fb-xfbml-parse-ignore"><p>¡AVISO para los amigos del club futboleros y para los que no, también! ⚽️🥅⚽️🥅💙
Como una de las actividades de verano, el...</p>Posted by <a href="https://www.facebook.com/chilenos.fernandez.9">Chilenos EnMinnesota</a> on&nbsp;<a href="https://developers.facebook.com/chilenos.fernandez.9/posts/425412431566273">Sunday, February 17, 2019</a></blockquote></div>
                    </div>
                </div>
            </div>
        </section>
    `
});

Vue.component('vue-events', {
  props: ['title', 'year', 'image', 'url'],
  template: `
          <div class="column is-4 portfolio-item">
            <a class="portfolio-link" :href="url" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="image" :src="image" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>{{ title }}</h4>
              <p class="text-muted">{{ year }}</p>
            </div>
          </div>
    `
});

Vue.component('vue-events-en', {
  props: ['title', 'year', 'image', 'url'],
  template: `
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" :href="url" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="image" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>{{ title }}</h4>
              <p class="text-muted">{{ year }}</p>
            </div>
          </div>
    `
});

Vue.component('vue-form', {
  template: `
    <section class="section" id="contact">
    <div class="column">
      <div class="section-heading">
        <h3 class="title is-2 has-text-white has-text-centered">Contact US</h3>
        <h4 class="subtitle is-5 has-text-white has-text-centered">Get in touch</h4>
      </div>
      <br>

      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="e.g John Doe" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="e.g johndoe@gmail.com" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Phone</label>
              <div class="control has-icons-left">
                <input class="input" type="phone" placeholder="e.g 5551234567" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Your Message"></textarea>
                </span>
              </div>
            </div>

            <div class="field is-grouped has-text-centered">
              <div class="control">
                <button class="button is-danger is-large"><span class="icon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span>Submit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    `,
  mounted() {
    var contactform = document.getElementById('contactform');
    contactform.setAttribute(
      'action',
      '//formspree.io/' + 'chilenosenminnesota' + '@' + 'gmail' + '.' + 'com'
    );
  }
});

Vue.component('vue-footer', {
  template: `
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-inline facebook">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/chilenos.fernandez.9">
                  <i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item instagram">
                <a href="https://www.instagram.com/chilenosenmn/">
                  <i class="fa fa-instagram fa-3x " aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
    `
});

new Vue({
  el: '#root',
});
