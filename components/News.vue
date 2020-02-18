<template>
  <div class="information-container">
    <section class="text">
      <article>
        <p class="exposition-text launch-text">
          {{ news.head }}
        </p>
        <p
          v-for="item of news.alineas"
          :key="item.text"
          class="exposition-text"
        >
          {{ item.text }}
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
                  value=""
                  placeholder="E-mailadres"
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
    <section class="thanks-text">
      <h2 class="thanks-title">Het laatste nieuws</h2>
      <ul v-if="newsitems" class="thanks-list">
        <a
          v-for="item of newsitems"
          :key="item.date"
          :href="'/nieuwsberichten/' + item.slug"
        >
          <li v-if="item">
            <h3 v-if="item.title">
              {{ item.title }}
            </h3>
            <p v-if="item.date" class="item-date">
              {{ normalizeDate(item.date) }}
            </p>
            <p v-if="item.description">
              {{ item.description }}
            </p>
          </li>
        </a>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    newsitems: {
      type: Array,
      required: true
    }
  },
  computed: {
    news() {
      return this.$store.state.news[0]
    }
  },
  methods: {
    normalizeDate(value) {
      const date = new Date(value)
      function addPad(value) {
        return String(value).padStart(2, '0')
      }
      return `${addPad(date.getDate())}/${addPad(date.getMonth() + 1)}/${addPad(
        date.getFullYear()
      )} 
  ${addPad(date.getHours())}:${addPad(date.getMinutes())}`
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
  margin-bottom: 1rem;
}

.launch-text {
  font-size: 1.5rem;
}

.link-in-text {
  font-size: 1em;
  transition: font-size 0.5s ease;
  color: inherit;
}

.link-in-text:hover {
  font-size: 1.1em;
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

.thanks-list {
  font-size: 1em;
  margin-bottom: 1em;
  padding: 0;
  max-width: 23em;
}

.thanks-list a {
  font-size: 1em;
}

.thanks-list h3 {
  font-size: 1em;
}

.thanks-list li {
  list-style-type: none;
  border: 1px solid white;
  padding: 0.5em 1em;
  transition: background-color, color 0.3s ease;
}

.thanks-list li:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}

body {
  align-items: center;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  height: 100vh;
  justify-content: center;
}

.item-date {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

@media (max-width: 800px) {
  .text,
  .thanks-text {
    width: 100%;
  }
}
</style>
