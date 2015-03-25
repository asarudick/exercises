def fizzBuzz( x, y, z )
	
	result = Array.new
	
	x = x.to_i
	y = y.to_i
	z = z.to_i
	
	(1..z).each do |i|
		
		# Divisible by both.
		if i % x == 0 and i % y == 0
			result.push("FB")
		elsif i % x == 0
			result.push("F")
		elsif i % y == 0
			result.push("B")
		else
			result.push(i)
		end
			
	end
	
	return result.join(" ")
end

output = Array.new

File.open(ARGV[0]).each_line do |line|
# Do something with line, ignore empty lines
#...
	print line
	if line == ""
		next
	end
	
	output.push(fizzBuzz(*line.split(" ") ))
	
end

print output.join("\n")

