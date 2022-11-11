const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Word!',
      picture: "https://www.payplug.com/hubfs/Banque%20images_featured.png"
    }
  }
}).mount('#app')