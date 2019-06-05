import pandas as pd
import json
import sys
with open(sys.argv[1]) as f:
    d = json.load(f)
allDicts =[]

for k in d.keys():
    l = d[k]
    for entry in l:
        entry['timestamp'] = k
        allDicts.append(entry)
df = pd.DataFrame(allDicts)
df['timestamp'] = pd.to_datetime(df['timestamp'])
df.to_csv(sys.argv[2])

