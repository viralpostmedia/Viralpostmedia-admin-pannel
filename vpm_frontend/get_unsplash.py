import urllib.request
import re

url = "https://unsplash.com/s/photos/stethoscope-heart"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    response = urllib.request.urlopen(req)
    html = response.read().decode('utf-8')
    photos = re.findall(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', html)
    print(list(set(photos))[:5])
except Exception as e:
    print(e)
