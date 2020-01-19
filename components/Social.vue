<template>
  <ul class="social-buttons">
    <li v-for="link in socialLinks" :key="link.name" class="social-button">
      <a :href="link.link">
        <i :class="link.FAIconClass"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: {
        twitter: {
          name: 'twitter',
          link: 'https://twitter.com/OnbevangenP',
          FAIconClass: 'fab fa-twitter-square'
        },
        facebook: {
          name: 'facebook',
          link: 'https://www.facebook.com/OnbevangenHetProject/',
          FAIconClass: 'fab fa-facebook-square'
        },
        instagram: {
          name: 'instagram',
          link: 'https://www.instagram.com/onbevangenhetproject',
          FAIconClass: 'fab fa-instagram'
        },
        linkedin: {
          name: 'linkedin',
          link: 'https://www.linkedin.com/company/onbevangen-het-project',
          FAIconClass: 'fab fa-linkedin'
        }
      }
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  font-family: var(--font);
  text-decoration: none;
  font-size: 1.2em;
}

.social-button {
  margin-left: 1.3rem;
}

.social-buttons {
  display: flex;
  padding: 0;
  list-style-type: none;
  margin-left: 1rem;
}
</style>
