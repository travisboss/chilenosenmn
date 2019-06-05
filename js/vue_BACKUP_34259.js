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
              <a class="navbar-item has-text-danger is-size-4" :href="url">{{ title }}</a>
    `
});

Vue.component('vue-navigation-en', {
  props: ['title', 'url'],
  template: `
<<<<<<< HEAD
              <a class="navbar-item has-text-danger is-size-4" :href="url">{{ title }}</a>
=======
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" :href="url">{{ title }}</a>
            </li>
>>>>>>> 53e7c2937e8fe6d136fd831f2e56f7554f99505e
    `
});

Vue.component('vue-announcements', {
  template: `
        <section id="party">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column flex is-half">
                    <div class="fb-post" data-href="https://www.facebook.com/chilenos.fernandez.9/posts/441450133295836" data-width="750" data-show-text="true"><blockquote cite="https://developers.facebook.com/chilenos.fernandez.9/posts/441450133295836" class="fb-xfbml-parse-ignore">Posted by <a href="https://www.facebook.com/chilenos.fernandez.9">Chilenos EnMinnesota</a> on&nbsp;<a href="https://developers.facebook.com/chilenos.fernandez.9/posts/441450133295836">Tuesday, March 19, 2019</a></blockquote></div>
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
              <h4 class="title">{{ title }}</h4>
              <p class="subtitle">{{ year }}</p>
            </div>
          </div>
    `
});

Vue.component('vue-events-en', {
  props: ['title', 'year', 'image', 'url'],
  template: `
          <div class="column is-4 portfolio-item">
            <a class="portfolio-link" :href="url" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="image" :src="image" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4 class="title">{{ title }}</h4>
              <p class="subtitle">{{ year }}</p>
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
    <form id="contactform" method="POST" name="sentMessage" novalidate="novalidate">
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
                <button class="button is-danger is-rounded"><span class="icon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span>Submit</span></button>
              </div>
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
      <div class="columns is-centered">
          <div class="column">
                <a href="https://www.facebook.com/chilenos.fernandez.9">
                  <i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
                </a>
              </div>
              <div class="column">
              <span class="instagram">
                <a href="https://www.instagram.com/chilenosenmn/">
                  <i class="fa fa-instagram fa-3x " aria-hidden="true"></i>
                </a>
              </div>
          </div>
        </div>
      </div>
      </footer>
    `
});

new Vue({
  el: '#root',
});
