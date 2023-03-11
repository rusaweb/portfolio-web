<template>
  <section class="inner-page__team-member">
    <div class="container lg-container">
      <div class="inner-page__team-member__content">
        <h2>Team Member</h2>
        <div class="inner-page__team-member__list">
          <div v-for="(item, key) in data" :key="key" class="inner-page__team-member__item">
            <div class="member-item__image">
              <img :src="item.avatar.data.attributes.url" alt="">
            </div>
            <div class="member-item__name">{{ item.name }}</div>
            <div class="member-item__role">{{ item.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data } = defineProps(['data'])
defineComponent({ name: 'TeamMember' })
</script>