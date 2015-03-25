var endianess = function () {
	'use strict';
    var b = new ArrayBuffer(4);
    var a = new Uint32Array(b);
    var c = new Uint8Array(b);

    a[0] = 0x10000001;
    if (c[0] == 0x01) return 'LittleEndian';
    return 'BigEndian';

};

console.log(endianess());
