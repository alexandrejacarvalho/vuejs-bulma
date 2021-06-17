Vue.component('card', {
    props: ['text'],
    template: `
    <div class="box">
        {{ text }}
    </div>
    `
  })