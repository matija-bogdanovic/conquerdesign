<template>
<div>
   {{time}}
</div>
</template>
<script>
export default {
  name: "Time",
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      const options = {
        timeZone: "Europe/London",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      const parts = formatter.formatToParts(now);
      
      // Build the time string with the AM/PM part in uppercase
      let timeString = parts.map(part => {
        if (part.type === 'dayPeriod') {
          return part.value.toUpperCase();
        }
        return part.value;
      }).join("");

      this.time = timeString;
    }
  }
};
</script>