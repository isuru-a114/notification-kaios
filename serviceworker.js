this.onpush = event => {
    console.log(event.data);
    // From here we can write the data to IndexedDB, send it to any open
    // windows, display a notification, etc.
}