import json


results = []
with open('datashit.txt') as inputfile:
    for line in inputfile:
        results.append(line.strip().split(','))
print results

for datapoint in results:
    datapoint[0] = datapoint[0].strip()
    datapoint[1] = datapoint[1].strip()

print results


with open('datashit.json', 'w') as outputfile:
    json.dump(results, outputfile)
