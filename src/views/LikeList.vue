<template>
    <div>
        this like list
        <div v-for="like in likeList">
            {{ result.title }}
        </div>
    </div>
</template>
<script>
import { bus } from "../script/bus.js";
export default {
  name: "LikeList",
  data() {
    return {
      likeList: []
    };
  },
  mounted() {
    bus.$on("addToList", data => {
      this.likeList.push(data);
    });
  }
};
</script>
