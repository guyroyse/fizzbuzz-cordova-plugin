import Foundation

@objc(FizzBuzzPlugin) class FizzBuzzPlugin : CDVPlugin {

  func fizzbuzz(command: CDVInvokedUrlCommand) {

    let pluginResult: CDVPluginResult

    if command.arguments[0] is Int {

      let number = command.arguments[0] as! Int

      var result: String

      switch (number % 3, number % 5) {
        case (0, 0):
          result = "fizzbuzz"
        case (0, _):
          result = "fizz"
        case (_, 0):
          result = "buzz"
        case (_, _):
          result = "\(number)"
      }

      pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: result)

    } else {
      pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
    }

    commandDelegate!.sendPluginResult(pluginResult, callbackId:command.callbackId)

  }

}
