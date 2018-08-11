# import the random module
import random
# create an array consisting of 10 erroneous values and 90 within the range -10 to 110
data = [-9999] * 10 + [random.randint(-10,110) for i in xrange(90)]
# output data
print(data)
# randomise the sequence of the data
random.shuffle(data)
# create a Resiliant Dataset (RDD) from the data which will distribute data across all nodes in cluster
d = sc.parallelize(data)
# output the RDD object reference
print(d)
# return number of elements in the data set
d.count()
# return first element in data set
d.first()
# return first 5 elements in data set
d.take(5)
# return random sample of data set
d.takeSample(False, 5)
# return the mean value
d.mean()
# pass RDD through anonymous filter function (remove values <= -9999)
dnomissing = d.filter(lambda x: x > -9999)
# output new RDD object (computation of values not yet required)
print(dnomissing)
# output number of elements in RDD (computation now required)
dnomissing.count()
# convert values to celcius using anonymous map function
dnomissingC = dnomissing.map(lambda x: (x-32)*5.0/9.0)
# output the more accurate mean value
dnomissingC.mean()
# combine operations by piping output from filter -> map -> mean using dot syntax
d.filter(lambda x: x > -9999).map(lambda x: (x-32)*5.0/9.0).mean()
# repeat using more general transformation flatmap (used for one to many transformations)
d.flatMap(lambda x: [(x-32)*5.0/9.0] if x > -9999 else []).mean()
