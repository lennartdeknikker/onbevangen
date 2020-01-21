<template>
  <div class="information-container">
    <section class="text">
      <article>
        <p class="exposition-text launch-text">
          Lancering: 27-01-2020 17:00 Ministerie van Onderwijs, Cultuur en
          Wetenschap.
        </p>
        <p class="exposition-text">
          Alle updates over wanneer Onbevangen in uw plaats te zien is krijgt u
          via <a :href="facebookLink" class="link-in-text">Facebook</a> of
          <a :href="instagramLink" class="link-in-text">Instagram</a>.
        </p>
        <p class="exposition-text">
          Wilt u heel graag bij de lancering in Den Haag aanwezig zijn? Mail ons
          en we gaan kijken wat wij voor u kunnen doen. Registratie is
          verplicht.
        </p>
        <p class="exposition-text">
          Voor meer informatie over de mogelijkheden om de expositie binnen uw
          instelling te laten zien kunt u mailen naar
          <a class="link-in-text" href="mailto:contact@ingeborgvanderven.nl">
            contact@ingeborgvanderven.nl</a
          >.
        </p>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="mailchimp-form-container">
          <form
            id="mc-embedded-subscribe-form"
            action="https://ingeborgvanderven.us4.list-manage.com/subscribe/post?u=4b2e7b26517d85e438dd2a153&amp;id=c3fa0c2663"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate mailchimp-form"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 class="mailchimp-title">Schrijf u nu in voor onze updates</h2>
              <div class="mc-field-group">
                <input
                  id="mce-EMAIL"
                  type="email"
                  value="E-mailadres"
                  name="EMAIL"
                  class="required email email-input"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  id="mce-error-response"
                  class="response"
                  style="display:none"
                ></div>
                <div
                  id="mce-success-response"
                  class="response"
                  style="display:none"
                ></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_4b2e7b26517d85e438dd2a153_c3fa0c2663"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="Verzenden"
                  name="subscribe"
                  class="button submit-button"
                />
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script type="text/javascript">
          ;(function($) {
            window.fnames = new Array()
            window.ftypes = new Array()
            fnames[0] = 'EMAIL'
            ftypes[0] = 'email'
            fnames[1] = 'FNAME'
            ftypes[1] = 'text'
            fnames[2] = 'LNAME'
            ftypes[2] = 'text'
            fnames[3] = 'ADDRESS'
            ftypes[3] = 'address'
            fnames[4] = 'PHONE'
            ftypes[4] = 'phone'
            fnames[5] = 'BIRTHDAY'
            ftypes[5] = 'birthday'
          })(jQuery)
          var $mcj = jQuery.noConflict(true)
        </script>
        <!--End mc_embed_signup-->
      </article>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$store.state.social[0].social
    },
    facebookLink() {
      function isFbLink(link) {
        return link.name === 'Facebook'
      }
      return this.social.find(isFbLink).link
    },
    instagramLink() {
      function isFbLink(link) {
        return link.name === 'Instagram'
      }
      return this.social.find(isFbLink).link
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}

.information-container {
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: var(--font);
  color: white;
}

.text {
  width: 50%;
  min-width: 17rem;
  max-width: 42rem;
  margin: 0 2.5rem 2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.thanks-text {
  min-width: 17rem;
  margin-right: 2.5rem;
}

.thanks-title,
.exposition-title {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  font-weight: normal;
}

.thanks-list {
  list-style-type: none;
  padding: 0;
  max-width: 23em;
}

.task {
  color: var(--grey);
}

.introduction {
  margin-bottom: 1em;
}

.quote {
  margin-bottom: 1em;
  font-style: italic;
  margin-left: 1rem;
}

.ingeborg {
  align-self: flex-end;
  margin-bottom: 2em;
}

.exposition-text {
  margin-bottom: 1em;
}

.launch-text {
  font-size: 1.5em;
}

.link-in-text {
  font-size: 1em;
  font-weight: bold;
  transition: font-size 0.5s ease;
}

.link-in-text:hover {
  font-size: 1.02em;
}

/* mailchimp form styling */
.mailchimp-form-container {
  margin-top: 3em;
  width: 100%;
  max-width: 25rem;
  min-width: 10rem;
  background-color: white;
  color: black;
  display: flex;
  padding: 1em;
}

.mailchimp-form {
  width: 100%;
}

.submit-button {
  border: none;
  background-color: black;
  color: white;
  padding: 0.5rem;
  margin-top: 1rem;
  width: 100%;
}

.mailchimp-title {
  font-size: 1em;
}

.email-input {
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 800px) {
  .text,
  .thanks-text {
    width: 100%;
  }
}
</style>
