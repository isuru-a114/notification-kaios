//service worker regitration
if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/ function (error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

var registerBtn = document.querySelector('#set-nick');



function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    navigator.serviceWorker.getRegistration().then(
      reg => {
        reg.pushManager.subscribe({
          userVisibleOnly: true
        }).then(sub => {
          //end poin
          console.log(sub);
        })
      }
    )
    // var notification = new Notification('Hello world!');
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        let title = "The title";
        let options = {
          body: "Hello Javascrpt"
        }
        var notification = new Notification(title, options);
      }
    });
  }
  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}



notifyMe()

