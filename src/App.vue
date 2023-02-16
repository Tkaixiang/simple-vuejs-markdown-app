<script>
import debounce from "lodash.debounce";
import { marked } from "marked";

export default {
  data() {
    return {
      value: "",
      markDownValue: "",
    };
  },
  methods: {
    onValueChange(e) {
      this.value = e.target.value;
      this.updateMarkDown(e.target.value);
    },
    updateMarkDown: debounce(function updateMarkdownValue(text) {
      this.markDownValue = marked(text);
      console.log(this.markDownValue);
    }, 100),
    resetText() {
      this.value = "",
      this.markDownValue = ""
    }
  },
};
</script>

<template>
  <div class="overallDiv">
    <div style="display: flex; flex-direction: column; width: 50%; align-items: center; justify-content: center; margin: 2ch;">
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
