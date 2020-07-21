console.log("Service Worker Loaded...")

self.addEventListener("push", e => {
  const data = e.data.json()
  console.log("Push Recieved...")
  self.registration.showNotification(data.title, {
    body: "From: " + data.body,
    icon:
      "https://raw.githubusercontent.com/mattrbanks/school-site-chat-survey-portfolio-project/master/src/images/cuteEagleCartoonSchool2.webp",
  })
})
