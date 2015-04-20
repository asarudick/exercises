import sys



class ChainLink:

	_next 		= None
	name 		= None
	visited 	= False

	def __init__(self, name, nextLink):
		self.name = name
		self._next = nextLink



class ChainManager:


	def __init__(self, chainList):
		self._chain 		= {}

		self._chain["BEGIN"] 	= ChainLink("BEGIN", None)
		self._chain["END"] 		= ChainLink("END", None)

		for link in chainList:
			(name, nextName) = link.split("-")

			if not name in self._chain:
				self._chain[name] = ChainLink(name, nextName)
			else:
				self._chain[name]._next = nextName


	def runChain(self):

		current = self._chain["BEGIN"]
		current.visited = True

		while current._next in self._chain:

			# move up the chain
			current = self._chain[current._next]

			# already visited
			if current.visited:
				break
			else:
				current.visited = True




	def hasGoodChain(self):
		self.runChain()
		return all(v.visited == True for v in self._chain.values())


lines = open(sys.argv[1], 'r')

for line in lines:

	chainManager = ChainManager(line.strip().split(";"))
	print("GOOD" if chainManager.hasGoodChain() else "BAD")
