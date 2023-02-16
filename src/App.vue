<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["value", "markDownValue"]), // Instead of defining an individual computed method for each state, we can use this
  },
  methods: {
    ...mapActions(['onValueChange', 'resetText']),
  }
};
</script>

<template>
  <div class="overallDiv">
    <div
      style="
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        justify-content: center;
        margin: 2ch;
      "
    >
      <button @click="resetText">Reset text</button>
      <textarea
        class="textAreaClass"
        :value="value"
        @input="
          (e) => {
            onValueChange(e);
          }
        "
        placeholder="Write some markdown..."
        style="width: 100%; height: 100%"
      />
    </div>

    <div v-html="markDownValue" class="markDownPreview"></div>
  </div>
</template>

<style>
.overallDiv {
  height: 100vh;
  display: flex;
}
.textAreaClass {
  margin: 1ch;
  padding: 1ch;
}
.markDownPreview {
  padding: 2ch;
}
body {
  margin: 0;
}
</style>
