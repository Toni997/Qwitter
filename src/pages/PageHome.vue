<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="new-qweet"
          bottom-slots
          v-model="newQweetContent"
          placeholder="What's happening?"
          counter
          maxlength="280"
          no-caps
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          content-end
          unelevated
          rounded
          color="primary"
          label="Qweet"
          :disable="!newQweetContent.trim()"
        />
      </div>
    </div>
    <q-separator class="divider" size="10px" color="grey-2" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageHome",
  setup() {
    return { newQweetContent: ref("") };
  },
});
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 1rem
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>