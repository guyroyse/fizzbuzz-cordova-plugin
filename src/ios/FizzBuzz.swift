import Foundation

@objc(FizzBuzzPlugin) class FizzBuzzPlugin : CDVPlugin {

  func fizzbuzz(command: CDVInvokedUrlCommand) {

    let number = command.arguments[0] as! Int

    var result: String

    switch (number % 5, number % 3) {
      case (0, 0):
        result = "fizzbuzz"
      case (0, _):
        result = "fizz"
      case (_, 0):
        result = "buzz"
      case (_, _):
        result = "\(number)"
    }

    let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: result)
    commandDelegate!.sendPluginResult(pluginResult, callbackId:command.callbackId)

  }

}
