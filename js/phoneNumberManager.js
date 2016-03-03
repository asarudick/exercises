// Exercise: Write a method to allocate a unique, unused number to a person, another to check the status of a phone number, and another to release a number.

/**
 * Manages all the phone numbers, which start at 0, and go up to the maximum integer value.
 * @method PhoneNumberManager
 */
function PhoneNumberManager () {
	this._lastAllocated = 0;
	this._releasedNumbers = {};
}

/**
 * Allocates an unused number.
 * @method allocate
 * @return {int}        The number that was allocated.
 */
PhoneNumberManager.prototype.allocate = function () {
	var keys = Object.keys(this._releasedNumbers);
	if (keys.length)
	{
		var number = this._releasedNumbers[keys[0]];
		delete this._releasedNumbers[keys[0]];
		return number;
	}
	return this._lastAllocated++;
}

/**
 * Releases a previously allocated number.
 * @method release
 * @param  {int} number The number to release.
 * @return {boolean}    True if release was successful, otherwise false.
 */
PhoneNumberManager.prototype.release = function (number) {
	this._validate(number);
	// Number isn't allocated yet.
	if (number > this._lastAllocated)
	{
		return false;
	}

	// Number is already released.
	if (this._releasedNumbers[number] !== undefined)
	{
		return false;
	}

	this._releasedNumbers[number] = number;
	return true;
}

/**
 * Returns true if the number is currently used, false if not.
 * @method status
 * @param  {int} 	number The number to query.
 * @return {boolean}       False if number isn't used, otherwise true.
 */
PhoneNumberManager.prototype.status = function (number) {
	this._validate(number);
	return this._releasedNumbers[number] === undefined && number <= this._lastAllocated;
}


/**
 * Validates a number. Throws errors instead of returning boolean.
 * @method _validate
 * @param  {object} 	number The number to validate.
 */
PhoneNumberManager.prototype._validate = function(number) {

		var num = parseInt(number, 10);

		// Check to see if it is a number
		if (isNaN(num) || num < 0)
		{
			throw new Error('Invalid phone number. Not a positive integer.');
		}

		// Float type check.
		if(number === +number && number !== (number|0))
		{
			throw new Error('Invalid phone number. Should be a positive integer and not a float.');
		}
}

// Tests.
var phoneNumberManager = new PhoneNumberManager();

// Allocate first number. Should be 0.
var allocatedNumber = phoneNumberManager.allocate();
console.log(allocatedNumber);

// Allocate second number. Should be 1.
allocatedNumber = phoneNumberManager.allocate();
console.log(allocatedNumber);

// Allocate third number. Should be 2.
allocatedNumber = phoneNumberManager.allocate();
console.log(allocatedNumber);

// Allocate fourth number. Should be 3.
allocatedNumber = phoneNumberManager.allocate();
console.log(allocatedNumber);

// Release 2. Should be 2.
var released = phoneNumberManager.release(2);
console.log(released);

// Allocate a first released number. Should be 2.
allocatedNumber = phoneNumberManager.allocate();
console.log(allocatedNumber);

// Check status of 2. Should be true, since it is now used.
var status = phoneNumberManager.status(2);
console.log(status);

// Check status of 5. Should be false.
var status = phoneNumberManager.status(5);
console.log(status);

// Check status of -1. Should throw error.
try {
	phoneNumberManager.status(-1);
}
catch (exception) {
	console.log(exception);
}

// Check status of 1.1. Should throw error.
try {
	phoneNumberManager.status(1.1);
}
catch (exception) {
	console.log(exception);
}

// Check status of 'test'. Should throw error.
try {
	phoneNumberManager.status('test');
}
catch (exception) {
	console.log(exception);
}
