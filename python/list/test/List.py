import unittest
import sys
import os.path

# Hack for relative imports.
sys.path.append(
    os.path.abspath(os.path.join(os.path.dirname(__file__), os.path.pardir)))

from src.List import List

class ListTest(unittest.TestCase):

	def test_init(self):

		l = List()

		self.assertEqual(l.size, 0)
		self.assertTrue(l.sentinel != None)
		self.assertTrue(l.tail == None)

	def test_init_with_args(self):

		l = List('a','b','c')

		self.assertEqual(l.size, 3)
		self.assertEqual(list(l), ['a','b','c'])

	def test_append(self):

		l = List()
		data = 'a'
		l.append(data)

		self.assertEqual(l.size, 1)
		self.assertEqual(l[0], data)

	def test_append_with_args(self):

		l = List()
		l.append('a','b','c')

		self.assertEqual(l.size, 3)
		self.assertEqual(list(l), ['a','b','c'])

	def test_setitem(self):

		l = List()
		data = 'a'
		l[0] = data

		self.assertEqual(l.size, 1)
		self.assertEqual(l[0], data)

	def test_prepend(self):

		l = List()
		data = 'a'
		l.prepend(data)

		self.assertEqual(l.size, 1)
		self.assertEqual(l[0], data)

	def test_insertBefore(self):

		l = List()
		data = 'a'
		l.insertBefore(0, data)

		self.assertEqual(l.size, 1)
		self.assertEqual(l[0], data)

	def test_insertAfter(self):

		l = List()
		data = 'a'
		l.insertAfter(0, data)

		self.assertEqual(l.size, 1)
		self.assertEqual(l[0], data)

	def test_replaceAll(self):

		l = List('a','b','c','c','c')
		l.replaceAll('c', 'd')

		self.assertEqual(list(l), ['a','b','d','d','d'])

		l = List('a','a','a','b','c')
		l.replaceAll('a', 'd')

		self.assertEqual(list(l), ['d','d','d','b','c'])

		l = List('a','a','b','b','b','c')
		l.replaceAll('b', 'd')

		self.assertEqual(list(l), ['a','a','d','d','d','c'])


	def test_removeAll(self):

		l = List('a','b','c','c','c')
		l.removeAll('c')

		self.assertEqual(list(l), ['a','b'])

		l = List('a','a','b','b','b','c')
		l.removeAll('b')

		self.assertEqual(list(l), ['a','a','c'])

		l = List('a','a','a','b','c')
		l.removeAll('a')

		self.assertEqual(list(l), ['b','c'])

	def test_removeAtIndex(self):

		l = List('a','b','c')
		l.removeAtIndex(0)

		self.assertEqual(list(l), ['b','c'])

		l = List('a','b','c')
		l.removeAtIndex(1)

		self.assertEqual(list(l), ['a','c'])

		l = List('a','b','c')
		l.removeAtIndex(2)

		self.assertEqual(list(l), ['a','b'])

	def test_iter(self):

		l = List('a','b','c','d')
		k = list(l)

		for key, value in enumerate(l):
			self.assertEqual(value, k[key])

	def test_eq(self):
		l, k = List('a','b'), List('a','b')

		self.assertEqual(l, k)

	def test_reversed(self):

		l = List('a', 'b')
		k = reversed(l)

		self.assertEqual(list(k), ['b','a'])

	def test_contains(self):
		l = List().append('a').append('b')

		self.assertTrue('a' in l)

	def test_delitem(self):
		l = List('a', 'b', 'c')

		del l[2]

		self.assertEqual(list(l), ['a','b'])

	def test_map(self):
		l = List(1,2,3)
		l.map(lambda x: x+1)
		self.assertEqual(list(l), [2,3,4])

	def test_reduce(self):
		l = List(1,2,3)
		result = l.reduce(lambda a,b: a+b, 0)
		self.assertEqual(result, 6)

	def test_filter(self):
		l = List(1,2,3)
		k = l.filter(lambda x: x >=2)
		self.assertEqual(list(k), [2,3])


if __name__ == '__main__':
    unittest.main()
