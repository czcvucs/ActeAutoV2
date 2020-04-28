export class InputValidator {

  static isNumericValue($event) {
    const regex: RegExp = new RegExp(/^[0-9]*\.?[0-9]*$/g);
    const specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft'];
    if (specialKeys.indexOf($event.key) !== -1) {
      return;
    } else {
      if (regex.test($event.key)) {
        return true;
      } else {
        return false;
      }
    }
  }
}
