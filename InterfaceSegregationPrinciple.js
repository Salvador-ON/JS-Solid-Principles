class Phone {
  constructor() {
    if (this.constructor.name === 'Phone')
      throw new Error('Phone class is absctract')
  }

  call(number) { }

  takePhoto() { }

  connectToWifi() { }
}
Can we use it to define an iPhone ?
  class IPhone extends Phone {
    call(number) {
      // Implementation
    }

    takePhoto() {
      // Implementation
    }

    connectToWifi() {
      // Implementation
    }
  }
//Okay, but for an old Nokia 3310 this interface will violate the "I" principle
class Nokia3310 extends Phone {
  call(number) {
    // Implementation
  }

  takePhoto() {
    // Argh, I don't have a camera
  }

  connectToWifi() {
    // Argh, I don't know what wifi is
  }
}