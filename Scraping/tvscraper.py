#!/usr/bin/env python
# Name:
# Student number:
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from pattern.web import plaintext
from pattern.web import NODE, TEXT, COMMENT, ELEMENT, DOCUMENT


from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'



def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    tv_series = []
    
    
    for e in dom.by_tag("td.title")[:250]: #amount of titles
        tv_serie = []
        for a in e.by_tag("a")[:1]: #search for title
            title = plaintext(a.content)
            tv_serie.append(title)
            print title
            
            
        for value in e.by_class("value"): #search for ranking
            value = plaintext(value.content)
            tv_serie.append(value)
            
        for genre in e.by_class("genre"): #search for genre
            genre = plaintext(genre.content)
            genre = genre.replace(' | ',',')
            tv_serie.append(genre)
            
        for credit in e.by_class("credit"): #search for actors/actresses
            credit = plaintext(credit.content)
            credit = credit.replace('With: ','')
            credit = credit.replace(', ',',')
            tv_serie.append(credit)
            
        for runtime in e.by_class("runtime"): #search for runtime
            runtime = plaintext(runtime.content)
            runtime = runtime.replace(' mins.','')
            tv_serie.append(runtime)
        tv_series.append(tv_serie)




    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RANKING TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.

    return tv_series  # replace this line as well as appropriate


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    tv_series = extract_tvseries(dom)
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for tvserie in tv_series:
        tvserie[0] = tvserie[0].encode('ascii', 'ignore')#ignore asccii codes for the titles and actors
        tvserie[3] = tvserie[3].encode('ascii', 'ignore')
        writer.writerow([tvserie[0],tvserie[1],tvserie[2],tvserie[3],tvserie[4]])

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
