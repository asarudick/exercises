export default function(ints, s)
{
	var sums = {};

	for (var i = 0, length = ints.length; i < length; i++) {
		if (sums[s - ints[i]] !== undefined )
		{
			return [ s - ints[i], ints[i] ];
		}
		sums[ints[i]] = true;
	}

	return [];
}
