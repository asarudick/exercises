class Node:

	def __init__(self, data, nextNode):
		self.data = data
		self.next = nextNode


class List:

	def __init__(self, *args):
		self.tail = None
		self.sentinel = Node(None, None)
		self.size = 0

		if args != None:
			self.append(*args)

	def append(self, *args):

		for item in args:
			node = Node(item, None)

			# Non-empty case.
			if self.tail != None:
				self.tail.next = node
				self.tail = node
			# Empty case.
			else:
				self.sentinel.next = node
				self.tail = self.sentinel.next

			self.size += 1

		return self

	# Could use *args here, but the order of args vs. order of prepending
	# would result in confusion one way or the other.
	def prepend(self, data):

		node = Node(data, self.sentinel.next)
		self.sentinel.next = node

		self.size += 1

		return self

	def insertBefore(self, i, data):

		index = -1
		current = self.sentinel

		while current.next != None and i-1 != index:
			current = current.next
			index += 1

		current.next = Node(data, current.next)

		# Tail case.
		if self.tail is current:
			self.tail = current.next

		self.size += 1

		return self

	def insertAfter(self, i, data):

		index = -1
		current = self.sentinel

		while current.next != None and i != index:
			current = current.next
			index += 1

		current.next = Node(data, current.next)

		# Tail case.
		if self.tail is current:
			self.tail = current.next

		self.size += 1

		return self

	def map(self, cb):

		# Don't operate on the sentinel itself
		current = self.sentinel.next

		while current != None:
			current.data = cb(current.data)
			current = current.next

	def filter(self, cb):

		result = []

		# Don't operate on the sentinel itself
		current = self.sentinel.next

		while current != None:
			if cb(current.data):
				result.append(current.data)
			current = current.next

		return result

	def reduce(self, cb, initialValue):

		result = initialValue

		current = self.sentinel.next

		while current != None:
			result = cb(result, current.data)
			current = current.next

		return result

	def replaceAll(self, search, replacement):

		current = self.sentinel.next

		while current != None:
			if current.data == search:
				current.data = replacement

			current = current.next

		return self

	def removeAll(self, search):

		current = self.sentinel

		# Iterate over start node up to, but not including, the next-to-last node.
		while current.next.next != None:
			if current.next.data == search:
				current.next = current.next.next
				self.size -= 1
				# restart loop, since current.next has been modified
				# If we didn't restart the loop, it would skip a node.
				continue

			current = current.next

		# Tail case
		if current.next.data == search:
			current.next = None
			self.tail = current

		return self

	def removeAtIndex(self, i):

		if i < 0 or i >= self.size:
			raise IndexError('Index out of bounds.')

		index = -1
		current = self.sentinel

		while current.next.next != None:
			if i == index+1:
				current.next = current.next.next
				self.size -= 1
				return self

			index += 1

			current = current.next

		# Tail case
		if i == index+1 and current.next != None:
			self.tail = current
			current.next = None
			self.size -= 1

		return self

	def __getitem__(self, key):

		if key < 0 or key >= self.size:
			raise IndexError('Index out of bounds.')

		current = self.sentinel
		index = -1

		while current.next != None:
			index += 1

			if index == key:
				return current.next.data

			current = current.next

		return None

	def __setitem__(self, key, value):
		self.insertBefore(key, value)

	def __delitem__(self, key):
		self.removeAtIndex(key)

	def __str__(self):
		self.map(print)

	def __hash__(self):

		result = []

		current = self.sentinel.next

		while current != None:
			result.append(current.data)
			current = current.next

		return hash(tuple(result))

	def __eq__(self, other):

		if not isinstance(other, self.__class__):
			return NotImplemented

		return hash(self) == hash(other)

	def __iter__(self):

		current = self.sentinel.next

		while current != None:
			yield current.data
			current = current.next

	# This one feels like cheating, but singly-linked lists aren't
	# intended to be iterated backwards.
	def __reversed__(self):

		k = reversed(list(self))
		l = List()

		for item in k:
			l.append(item)

		return l

	def __contains__(self, item):
		for each in self:
			if each == item:
				return True
		return False
