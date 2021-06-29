<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
            @click="addNewQweet"
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

      <q-list separator>
        <transition-group
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated backOutDown slow"
        >
          <q-item
            v-for="qweet in qweets"
            :key="qweet.date"
            class="qweet q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <span class="text-weight-bold"> Danny Connell </span>
                <span class="text-grey-7">
                  @danny__connell <br class="lt-md" />&bull;
                  {{ relativeDate(qweet.date) }}
                </span>
              </q-item-label>
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>
              <div class="qweet-icons row justify-between">
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                />
                <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
                <q-btn
                  @click="deleteQweet(qweet)"
                  flat
                  round
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref, computed } from "vue";
import { formatDistance, subDays } from "date-fns";

export default defineComponent({
  name: "PageHome",
  setup() {
    const newQweetContent = ref("");

    const qweets = ref([]);

    qweets.value = [
      {
        content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            itaque reprehenderit eum consequun tur expedita cumque deserunt
            adipisci architecto maiores, modi dolorem, dolorum cupiditate odio


            non aperiam, ad nostrum labor um reiciendis.`,
        date: 1624920231352,
      },
      {
        content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            itaque reprehenderit eum consequun tur expedita cumque deserunt

            adipisci architecto maiores, modi dolorem, dolorum cupiditate odio
            non aperiam, ad nostrum labor um reiciendis.`,
        date: 1624920251688,
      },
    ];

    const relativeDate = (date) =>
      formatDistance(date, new Date(), { addSuffix: true });

    const addNewQweet = () => {
      let newQweet = {
        content: newQweetContent.value,
        date: Date.now(),
      };

      qweets.value.unshift(newQweet);
      newQweetContent.value = "";
    };

    const deleteQweet = (qweet) => {
      let dateToDelete = qweet.date;
      let index = qweets.value.findIndex(
        (qweet) => qweet.date === dateToDelete
      );
      qweets.value.splice(index, 1);
    };

    return { newQweetContent, qweets, relativeDate, addNewQweet, deleteQweet };
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
.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>