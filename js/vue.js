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
    template: `
     <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Chilenos En Minnesota</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#party">Party</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Past Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="en/index.html">English</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
});

Vue.component('vue-navigation-en', {
    template: `
     <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Chilenos En Minnesota</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#party">Party</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Past Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="../index.html">Spanish</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
});


Vue.component('vue-announcements', {
    template: `
        <section id="party">
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12">
                   <div class="embed-responsive embed-responsive-16by9" style="height: 400px;">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchilenos.fernandez.9%2Fposts%2F425412431566273&width=500" width="500" height="325" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        </section>
    `
});

Vue.component('vue-events', {
    template: `
 <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Past Events</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqKZnQK" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/2018Picnicsweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Picnic</h4>
              <p class="text-muted">2018</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqL4HwR" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/2017-Aquatennial-Parade-Sister-Citiesweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Aquatennial Sister Cities</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmgVqNN3" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/2017FiestasPatriasweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiestas Patrias</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHskD19tAF" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/2017FiestadeAnonuevoweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiesta de A&#241;o Nuevo</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqfoZhE" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/2016FiestasPatriasweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiestas Patrias</h4>
              <p class="text-muted">2016</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link " href="https://flic.kr/s/aHsmqfm2VG" target="_blank ">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x "></i>
                </div>
              </div>
              <img class="img-fluid " src="img/portfolio/bingo2018web.jpg" alt="chilenosenminnesota ">
            </a>
            <div class="portfolio-caption">
              <h4>Bingo</h4>
              <p class="text-muted">2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
});

Vue.component('vue-events-en', {
    template: `
 <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Past Events</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqKZnQK" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="../img/portfolio/2018Picnicsweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Picnic</h4>
              <p class="text-muted">2018</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqL4HwR" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="../img/portfolio/2017-Aquatennial-Parade-Sister-Citiesweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Aquatennial Sister Cities</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmgVqNN3" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="../img/portfolio/2017FiestasPatriasweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiestas Patrias</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHskD19tAF" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="../img/portfolio/2017FiestadeAnonuevoweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiesta de A&#241;o Nuevo</h4>
              <p class="text-muted">2017</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="https://flic.kr/s/aHsmqfoZhE" target="_blank">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="../img/portfolio/2016FiestasPatriasweb.jpg" alt="chilenosenminnesota">
            </a>
            <div class="portfolio-caption">
              <h4>Fiestas Patrias</h4>
              <p class="text-muted">2016</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link " href="https://flic.kr/s/aHsmqfm2VG" target="_blank ">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-external-link fa-3x "></i>
                </div>
              </div>
              <img class="img-fluid " src="../img/portfolio/bingo2018web.jpg" alt="chilenosenminnesota ">
            </a>
            <div class="portfolio-caption">
              <h4>Bingo</h4>
              <p class="text-muted">2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
});

Vue.component('vue-form', {
    template: `
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Reach out today&#46;</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
             <form id="contactform" method="POST" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" name="name" placeholder="Your Name *" required="required"
                      data-validation-required-message="Please enter your name. ">
                    <p class="help-block text-danger "></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" name="_replyto" placeholder="Your Email *"
                      required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" name="phone" placeholder="Your Phone *
            "
                      required="required" data-validation-required-message="Please enter your phone number.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" id="message" name="message" placeholder="Your Message *" required="required"
                      data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send
                    Message</button>
                </div>
              </div>
              <input type="hidden" name="_next" value="https://chilenosenmn.org/" />
              <input type="hidden" name="_language" value="es" />
              <input type="text" name="_gotcha" style="display:none" />
            </form>
          </div>
        </div>
      </div>
    </section>
    `,
    mounted() {
              var contactform = document.getElementById('contactform');
              contactform.setAttribute('action', '//formspree.io/' + 'chilenosenminnesota' + '@' + 'gmail' + '.' + 'com');
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
    el: '#root'
});

