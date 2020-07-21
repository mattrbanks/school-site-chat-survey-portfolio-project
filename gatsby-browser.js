/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = () => {
  if (process.env.ENABLE_LOCAL_SW) {
    registerServiceWorker()
  }
}

export const registerServiceWorker = () => {
  if (typeof window !== "undefined") {
    // Do magic
    const publicVapidKey =
      "BEdWGWTqlfYdkrTRCH6nzdJ_UAyT_4I479qAmG-59mJnaX84GC-0Sh0RdwMr2CFjZdGvLTtOlwX67CRZqwPCx-M"

    // Check for service worker
    if ("serviceWorker" in navigator) {
      send().catch(err => console.log(err))
    }

    // Register SW, Register Push, Send Push
    async function send() {
      // Register Service Worker
      console.log("Registering service worker...")
      const register = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/chat",
        }
      )
      console.log("Service Worker Registered...")

      // Register Push
      console.log("Registering Push...")
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      })
      console.log("Push Registered...")

      // Send Push Notification
      console.log("Sending Push...")
      await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json",
        },
      })
      console.log("Push Sent...")
    }

    function urlBase64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
      const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/")

      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
    }
  }
}
